package com.csuf.cloud.core.services;


import javax.jcr.Node;
import javax.jcr.Session;

public interface UserService {
	String getUserName(Session session, String userId);

	String getCanonicalName(Session session, String userId);

	String getUserEmail(Session session, String userId);

	Node getUserProfile(Session session, String userId);

	String fetchUserJcrPath(String userId, Session session);

	boolean addAuthorizableToGroup(Session session, String authorizableId, String groupId);

	boolean removeAuthorizableFromGroup(Session session, String authorizableId, String groupId);
}
