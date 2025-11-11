package com.csuf.cloud.core.services.impl;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.User;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.jcr.base.util.AccessControlUtil;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.day.cq.search.PredicateGroup;
import com.day.cq.search.Query;
import com.day.cq.search.QueryBuilder;
import com.day.cq.search.result.SearchResult;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.UserService;

@Component(service = UserService.class)
public class UserServiceImpl implements UserService {

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private QueryBuilder queryBuilder;

	@Reference
	private GlobalConfigService globalConfigService;

	@Override
	public String getUserName(Session session, String userId) {
		String userName = null;
		try {
			Node userProfile = getUserProfile(session, userId);

			if (userProfile != null && userProfile.hasProperty("displayName")) {
				userName = userProfile.getProperty("displayName").getString();
			} else if (userProfile != null && userProfile.hasProperty("familyName")) {
				userName = userProfile.getProperty("familyName").getString();
			} else {
				UserManager userManager = AccessControlUtil.getUserManager(session);
				User currentUser = (User) userManager.getAuthorizable(userId);
				userName = currentUser.getPrincipal().getName();
			}
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return userName;
	}

	@Override
	public String getCanonicalName(Session session, String userId) {
		try {

			Node userProfile = getUserProfile(session, userId);
			if (userProfile != null && userProfile.hasProperty("canonicalName")) {
				return userProfile.getProperty("canonicalName").getString();
			}
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public String getUserEmail(Session session, String userId) {
		try {
			Node userProfile = getUserProfile(session, userId);
			if (userProfile != null && userProfile.hasProperty("email")) {
				return userProfile.getProperty("email").getString();
			}
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public Node getUserProfile(Session session, String userId) {
		try {
			UserManager userManager = AccessControlUtil.getUserManager(session);
			Authorizable currentUserOrGroup = userManager.getAuthorizable(userId);
			Node userNode = JcrUtils.getNodeIfExists(currentUserOrGroup.getPath(), session);
			return userNode.getNode("profile");
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

	@Override
	public boolean addAuthorizableToGroup(Session session, String authorizableId, String groupId) {
		Group group = null;
		try {
			UserManager userManager = AccessControlUtil.getUserManager(session);
			log.debug("authorizableId : {}", authorizableId);
			Authorizable userOrGroup = userManager.getAuthorizable(authorizableId);
			log.debug("userOrGroup : {}", userOrGroup);
			Authorizable groupOnly = userManager.getAuthorizable(groupId);
			log.debug("groupOnly : {}", groupOnly);
			if (null != userOrGroup && null != groupOnly && groupOnly.isGroup()) {
				group = (Group) groupOnly;
				if (!group.isMember(userOrGroup)) {
					group.addMember(userOrGroup);
					session.save();
					log.debug("Authorizable with authorizableId : ".concat(authorizableId)
							.concat(" successfully added to the group with groupId : ".concat(groupId)));
					return true;
				} else {
					log.debug("Authorizable with authorizableId : ".concat(authorizableId)
							.concat(" is already a member of the group with groupId : ".concat(groupId)));
					return true;
				}
			} else {
				log.debug("user/group argument is not valid inside addAuthorizableToGroup method");
			}
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public boolean removeAuthorizableFromGroup(Session session, String authorizableId, String groupId) {
		Group group = null;
		try {
			UserManager userManager = AccessControlUtil.getUserManager(session);
			Authorizable userOrGroup = userManager.getAuthorizable(authorizableId);
			Authorizable groupOnly = userManager.getAuthorizable(groupId);
			if (null != userOrGroup && null != groupOnly && groupOnly.isGroup()) {
				group = (Group) groupOnly;
				if (group.isMember(userOrGroup)) {
					group.removeMember(userOrGroup);
					session.save();
					log.debug("Authorizable with authorizableId : ".concat(authorizableId)
							.concat(" successfully removed from the group with groupId : ".concat(groupId)));
					return true;
				} else {
					log.debug("Authorizable with authorizableId : ".concat(authorizableId)
							.concat(" is already removed from the group with groupId : ".concat(groupId)));
					return true;
				}
			} else {
				log.debug("user/group argument is not valid inside removeUserFromGroup method");
			}
		} catch (RepositoryException | NullPointerException e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return false;
	}

	@Override
	public String fetchUserJcrPath(String userId, Session session) {
		Map<String, String> map = new HashMap<>();
		log.debug("session userId : {}", session.getUserID());
		map.put("path", "/home/users");
		map.put("type", "rep:User");
		map.put("property", "rep:authorizableId");
		map.put("property.value", userId);

		Query query = queryBuilder.createQuery(PredicateGroup.create(map), session);
		SearchResult result = query.getResult();
		if (null != result) {
			log.debug("Query Result count : ", result.getTotalMatches());
			Iterator<Resource> iterator = result.getResources();
			if (iterator.hasNext()) {
				Resource resource = iterator.next();
				if (null != resource)
					return resource.getPath();
			}
		}
		return null;
	}
}
