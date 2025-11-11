package com.csuf.cloud.core.services.impl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.jackrabbit.api.JackrabbitSession;
import org.apache.jackrabbit.api.security.user.Authorizable;
import org.apache.jackrabbit.api.security.user.Group;
import org.apache.jackrabbit.api.security.user.User;
import org.apache.jackrabbit.api.security.user.UserManager;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.jcr.base.util.AccessControlUtil;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.metatype.annotations.Designate;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.config.WorkflowAdministrationConfig;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.WorkflowAdministrationConfigService;

@Component(immediate = true, service = WorkflowAdministrationConfigService.class, property = {
		Constants.SERVICE_VENDOR + "=ThoughtFocus",
		Constants.SERVICE_DESCRIPTION + "=Workflow Administration Config Service", })
@Designate(ocd = WorkflowAdministrationConfig.class)
public class WorkflowAdministrationConfigServiceImpl implements WorkflowAdministrationConfigService {

	private static final Logger log = LoggerFactory.getLogger(WorkflowAdministrationConfigServiceImpl.class);

	private WorkflowAdministrationConfig config;

	@OSGiService
	private InboxItemService inboxItemService;

	@Activate
	protected void activate(WorkflowAdministrationConfig config) {
		this.config = config;
		// log.info("The " + this.getClass().getName() + " service now active");
	}

	@Override
	public String[] getDelegateGroupList() {
		return config.delegateGroupList();
	}

	@Override
	public String[] delegateInReportGroupList() {
		return config.delegateInReportGroupList();
	}
	
	@Override
	public String[] terminateInReportGroupList() {
		return config.terminateInReportGroupList();
	}

	@Override
	public boolean getAuthorisedWorkflowAdministrators(String title, String uid, Session session, String[] userArray) {
		Boolean status = false;
		try {
			log.debug("start of getAuthorisedWorkflowAdministrators");
			if (StringUtils.isNotBlank(title) && StringUtils.isNotBlank(uid)) {
				UserManager userManager = ((JackrabbitSession) session).getUserManager();
				List<String> wordList = Arrays.asList(userArray);
				for (String temp : wordList) {
					String[] arrOfVar = temp.split("~", 2);
					String wfTitle = arrOfVar[1];
					Authorizable groupAuthorizable = userManager.getAuthorizable(arrOfVar[0]);
					Authorizable authorizable = userManager.getAuthorizable(uid);
					if (null != authorizable && null != groupAuthorizable && groupAuthorizable.isGroup()) {
						Group group = (Group) groupAuthorizable;
						if (title.matches(wfTitle) && group.isMember(authorizable)) {
							status = true;
							break;
						} else {
							// log.debug("start of getAuthorisedWorkflowAdministrators doesnt match ");
							status = false;
						}
					}
				}
			}
		} catch (Exception e) {
			log.error("Exception while trying to get display name : {}", Arrays.toString(e.getStackTrace()));
		}
		log.error("status={}" + status);
		return status;
	}

	public boolean isAssigneeAGroup(String assignee, Session session) {
		Boolean status = false;
		try {
			log.debug("start of isAssigneeAGroup");
			if (StringUtils.isNotBlank(assignee)) {
				UserManager userManager = ((JackrabbitSession) session).getUserManager();
				Authorizable authorizable = userManager.getAuthorizable(assignee);
				if (authorizable.isGroup()) {
					status = true;
				} else {
					status = false;
				}
			}
		} catch (Exception e) {
			log.error("Exception while trying to get display name : {}", Arrays.toString(e.getStackTrace()));
		}
		log.error("status={}" + status);
		return status;
	}
	
	public String getUserName(String userId,Session session) {
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

	public boolean isUserAMemberOfGroup(String assignee, String userid, Session session) {
		Boolean status = false;
		try {

			log.debug("start of isUserAMemberOfGroup");

			if (StringUtils.isNotBlank(assignee)) {
				UserManager userManager = ((JackrabbitSession) session).getUserManager();
				Authorizable groupAuthorizable = userManager.getAuthorizable(assignee);
				Authorizable authorizable = userManager.getAuthorizable(userid);
				if (null != authorizable && null != groupAuthorizable && groupAuthorizable.isGroup()) {
					Group group = (Group) groupAuthorizable;
					if (group.isMember(authorizable)) {
						status = true;
					} else {
						status = false;
					}
				}
			}
		} catch (Exception e) {
			log.error("Exception while trying to get display name : {}", Arrays.toString(e.getStackTrace()));
		}
		log.error("status={}" + status);
		return status;
	}
	
	@Override
	public boolean getAuthorisedUsersforTermination(String title, String uid, Session session, String[] userArray) {
		Boolean status = false;
		try {
			log.debug("start of getAuthorisedUsersforTermination");
			if (StringUtils.isNotBlank(title) && StringUtils.isNotBlank(uid)) {
				List<String> userList = Arrays.asList(userArray);
				for (String temp : userList) {
					String[] val = temp.split("~", 2);
					String wfTitle = val[0];
					if(title.matches(wfTitle)) {
						List<String> groups = new ArrayList<>();
				        List<String> faculties = new ArrayList<>();
				        String[] sections = val[1].split("\\|");
				        for (String section : sections) {
				            section = section.trim();
				            if (section.startsWith("GROUP:")) {
				                String[] groupArray = section.substring(6).split(",");
				                for (String group : groupArray) {
				                    groups.add(group.trim());
				                }
				            } else if (section.startsWith("FACULTY:")) {
				                String[] facultyArray = section.substring(8).split(",");
				                for (String faculty : facultyArray) {
				                    faculties.add(faculty.trim());
				                }
				            }
				        }
				        if(!faculties.isEmpty() && faculties.contains(uid)) {
				        	status = true;	
				        	break;
				        } else if (!groups.isEmpty()) {
				        	UserManager userManager = ((JackrabbitSession) session).getUserManager();
				        	for (String groupName : groups) {
				        		Authorizable groupAuthorizable = userManager.getAuthorizable(groupName);
				        		Authorizable authorizable = userManager.getAuthorizable(uid);
				        		if (null != authorizable && null != groupAuthorizable && groupAuthorizable.isGroup()) {
				        			Group group = (Group) groupAuthorizable;
				        			if(group.isMember(authorizable)) {
				        				status = true;
				        				break;
				        			}
				        		}
				        	}
				        	if(status == true) {
				        		break;
				        	}
				        } else {
				        	status = false;
				        }
				        
						
					}
				}
			}
		} catch (Exception e) {
			log.error("Exception while trying to get display name : {}", Arrays.toString(e.getStackTrace()));
		}
		log.error("status={}" + status);
		return status;
	}
	
	@Override
	public String[] groupWFList() {
		return config.groupWFList();
	}
	
	@Override
	public String[] supDocAllowedTypesWFList() {
		return config.supDocAllowedTypesWFList();
	}
}
