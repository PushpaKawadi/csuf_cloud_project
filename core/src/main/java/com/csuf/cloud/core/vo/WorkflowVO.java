package com.csuf.cloud.core.vo;

import java.util.List;

import javax.jcr.Session;

import org.apache.jackrabbit.api.security.user.Authorizable;
import org.json.JSONArray;
import org.osgi.service.event.Event;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;

public class WorkflowVO {

	private String workflowTitle;
	private WorkflowSession graniteWorkflowSession;
	private Session adminSession;
	private EmailServiceVO emailBean;
	private String workflowEventTopic;
	private Event event;
	private boolean isSystemWorkflow;
	private boolean isSuspendWorkflow;
	private boolean isResumeWorkflow;
	private boolean isTerminateWorkflow;
	private String workflowModelName;
	private String workflowModelId;
	private String workflowModelVersion;
	private String workflowModelJcrPath;
	private String workflowInstanceId;
	private String workflowInstanceState;
	private String payloadType;
	private String payloadPath;
	private WorkItem workItem;
	private List<String> routes;
	private List<String> workflowMetadataFieldsList;
	private String nodeDateFormat;
	private boolean isReminderEmailActivated;
	private EmailServiceVO emailVO;
	private boolean isTaskDeadlineActivated;
	private int dueDays;
	private int dueHours;
	private int dueMinutes;
	private boolean isDelegationAllowed;
	private String delegateAssignee;
	private Authorizable delegateAssigneeAuthorizable;
	private boolean isDynamicParticipant;
	private String dynamicParticipant;
	private Authorizable dynamicParticipantAuthorizable;
	private String reminderCronExpression;
	private String taskDeadlineCronExpression;
	private String taskDeadlineMetadataField;
	private String metadataField;
	private JSONArray formFieldsList;
	private String element;
	private String actionToBeTaken;
	private String wfRoute;

	public String getWorkflowTitle() {
		return workflowTitle;
	}

	public void setWorkflowTitle(String workflowTitle) {
		this.workflowTitle = workflowTitle;
	}

	/**
	 * @return the graniteWorkflowSession
	 */
	public WorkflowSession getGraniteWorkflowSession() {
		return graniteWorkflowSession;
	}

	/**
	 * @param graniteWorkflowSession the graniteWorkflowSession to set
	 */
	public void setGraniteWorkflowSession(WorkflowSession graniteWorkflowSession) {
		this.graniteWorkflowSession = graniteWorkflowSession;
	}

	public Session getAdminSession() {
		return adminSession;
	}

	public void setAdminSession(Session adminSession) {
		this.adminSession = adminSession;
	}

	public String getWorkflowEventTopic() {
		return workflowEventTopic;
	}

	public void setWorkflowEventTopic(String workflowEventTopic) {
		this.workflowEventTopic = workflowEventTopic;
	}

	public boolean isSystemWorkflow() {
		return isSystemWorkflow;
	}

	public void setSystemWorkflow(boolean isSystemWorkflow) {
		this.isSystemWorkflow = isSystemWorkflow;
	}

	public boolean isSuspendWorkflow() {
		return isSuspendWorkflow;
	}

	public void setSuspendWorkflow(boolean isSuspendWorkflow) {
		this.isSuspendWorkflow = isSuspendWorkflow;
	}

	public boolean isResumeWorkflow() {
		return isResumeWorkflow;
	}

	public void setResumeWorkflow(boolean isResumeWorkflow) {
		this.isResumeWorkflow = isResumeWorkflow;
	}

	public boolean isTerminateWorkflow() {
		return isTerminateWorkflow;
	}

	public void setTerminateWorkflow(boolean isTerminateWorkflow) {
		this.isTerminateWorkflow = isTerminateWorkflow;
	}

	public String getWorkflowModelName() {
		return workflowModelName;
	}

	public void setWorkflowModelName(String workflowModelName) {
		this.workflowModelName = workflowModelName;
	}

	public String getWorkflowModelId() {
		return workflowModelId;
	}

	public void setWorkflowModelId(String workflowModelId) {
		this.workflowModelId = workflowModelId;
	}

	public String getWorkflowModelVersion() {
		return workflowModelVersion;
	}

	public void setWorkflowModelVersion(String workflowModelVersion) {
		this.workflowModelVersion = workflowModelVersion;
	}

	public String getWorkflowModelJcrPath() {
		return workflowModelJcrPath;
	}

	public void setWorkflowModelJcrPath(String workflowModelJcrPath) {
		this.workflowModelJcrPath = workflowModelJcrPath;
	}

	public String getWorkflowInstanceId() {
		return workflowInstanceId;
	}

	public void setWorkflowInstanceId(String workflowInstanceId) {
		this.workflowInstanceId = workflowInstanceId;
	}

	public String getWorkflowInstanceState() {
		return workflowInstanceState;
	}

	public void setWorkflowInstanceState(String workflowInstanceState) {
		this.workflowInstanceState = workflowInstanceState;
	}

	public String getPayloadType() {
		return payloadType;
	}

	public void setPayloadType(String payloadType) {
		this.payloadType = payloadType;
	}

	public String getPayloadPath() {
		return payloadPath;
	}

	public void setPayloadPath(String payloadPath) {
		this.payloadPath = payloadPath;
	}

	public WorkItem getWorkItem() {
		return workItem;
	}

	public void setWorkItem(WorkItem workItem) {
		this.workItem = workItem;
	}

	public List<String> getRoutes() {
		return routes;
	}

	public void setXmlFields(JSONArray formFieldsList) {
		this.formFieldsList = formFieldsList;
	}

	public JSONArray getXmlFields() {
		return formFieldsList;
	}

	public String getXmlElement() {
		return element;
	}

	public void setXmlElement(String element) {
		this.element = element;
	}

	public void setRoutes(List<String> routes) {
		this.routes = routes;
	}

	public List<String> getWorkflowMetadataFieldsList() {
		return workflowMetadataFieldsList;
	}

	public void setWorkflowMetadataFieldsList(List<String> workflowMetadataFieldsList) {
		this.workflowMetadataFieldsList = workflowMetadataFieldsList;
	}

	public String getNodeDateFormat() {
		return nodeDateFormat;
	}

	public void setNodeDateFormat(String nodeDateFormat) {
		this.nodeDateFormat = nodeDateFormat;
	}

	public boolean isReminderEmailActivated() {
		return isReminderEmailActivated;
	}

	public void setReminderEmailActivated(boolean isReminderEmailActivated) {
		this.isReminderEmailActivated = isReminderEmailActivated;
	}

	public EmailServiceVO getEmailVO() {
		return emailVO;
	}

	public void setEmailVO(EmailServiceVO emailVO) {
		this.emailVO = emailVO;
	}

	public boolean isTaskDeadlineActivated() {
		return isTaskDeadlineActivated;
	}

	public void setTaskDeadlineActivated(boolean isTaskDeadlineActivated) {
		this.isTaskDeadlineActivated = isTaskDeadlineActivated;
	}

	public int getDueDays() {
		return dueDays;
	}

	public void setDueDays(int dueDays) {
		this.dueDays = dueDays;
	}

	public int getDueHours() {
		return dueHours;
	}

	public void setDueHours(int dueHours) {
		this.dueHours = dueHours;
	}

	public int getDueMinutes() {
		return dueMinutes;
	}

	public void setDueMinutes(int dueMinutes) {
		this.dueMinutes = dueMinutes;
	}

	public boolean isDelegationAllowed() {
		return isDelegationAllowed;
	}

	public void setDelegationAllowed(boolean isDelegationAllowed) {
		this.isDelegationAllowed = isDelegationAllowed;
	}

	public String getDelegateAssignee() {
		return delegateAssignee;
	}

	public void setDelegateAssignee(String delegateAssignee) {
		this.delegateAssignee = delegateAssignee;
	}

	public Authorizable getDelegateAssigneeAuthorizable() {
		return delegateAssigneeAuthorizable;
	}

	public void setDelegateAssigneeAuthorizable(Authorizable delegateAssigneeAuthorizable) {
		this.delegateAssigneeAuthorizable = delegateAssigneeAuthorizable;
	}

	public boolean isDynamicParticipant() {
		return isDynamicParticipant;
	}

	public void setDynamicParticipant(boolean isDynamicParticipant) {
		this.isDynamicParticipant = isDynamicParticipant;
	}

	public String getDynamicParticipant() {
		return dynamicParticipant;
	}

	public void setDynamicParticipant(String dynamicParticipant) {
		this.dynamicParticipant = dynamicParticipant;
	}

	public Authorizable getDynamicParticipantAuthorizable() {
		return dynamicParticipantAuthorizable;
	}

	public void setDynamicParticipantAuthorizable(Authorizable dynamicParticipantAuthorizable) {
		this.dynamicParticipantAuthorizable = dynamicParticipantAuthorizable;
	}

	public String getReminderCronExpression() {
		return reminderCronExpression;
	}

	public void setReminderCronExpression(String reminderCronExpression) {
		this.reminderCronExpression = reminderCronExpression;
	}

	public String getTaskDeadlineCronExpression() {
		return taskDeadlineCronExpression;
	}

	public void setTaskDeadlineCronExpression(String taskDeadlineCronExpression) {
		this.taskDeadlineCronExpression = taskDeadlineCronExpression;
	}

	public Event getEvent() {
		return event;
	}

	public void setEvent(Event event) {
		this.event = event;
	}

	public EmailServiceVO getEmailBean() {
		return emailBean;
	}

	public void setEmailBean(EmailServiceVO emailBean) {
		this.emailBean = emailBean;
	}

	public String getTaskDeadlineMetadataField() {
		return taskDeadlineMetadataField;
	}

	public void setTaskDeadlineMetadataField(String taskDeadlineMetadataField) {
		this.taskDeadlineMetadataField = taskDeadlineMetadataField;
	}

	public void setMetadataField(String metadataField) {
		this.metadataField = metadataField;
	}

	public String getMetadataField() {
		return metadataField;
	}

	public String getActionToBeTaken() {
		return actionToBeTaken;
	}

	public void setActionToBeTaken(String actionToBeTaken) {
		this.actionToBeTaken = actionToBeTaken;
	}
	
	public String getSubmissionRoute() {
		return wfRoute;
	}
	
	public void setRoutes(String wfRoute) {
		this.wfRoute = wfRoute;
	}
	@Override
	public String toString() {
		final int maxLen = 10;
		return "WorkflowVO [" + (workflowTitle != null ? "workflowTitle=" + workflowTitle + ", " : "")
				+ (workflowEventTopic != null ? "workflowEventTopic=" + workflowEventTopic + ", " : "")
				+ "isSystemWorkflow=" + isSystemWorkflow + ", isSuspendWorkflow=" + isSuspendWorkflow
				+ ", isResumeWorkflow=" + isResumeWorkflow + ", isTerminateWorkflow=" + isTerminateWorkflow + ", "
				+ (workflowModelName != null ? "workflowModelName=" + workflowModelName + ", " : "")
				+ (workflowModelId != null ? "workflowModelId=" + workflowModelId + ", " : "")
				+ (workflowModelVersion != null ? "workflowModelVersion=" + workflowModelVersion + ", " : "")
				+ (workflowModelJcrPath != null ? "workflowModelJcrPath=" + workflowModelJcrPath + ", " : "")
				+ (workflowInstanceId != null ? "workflowInstanceId=" + workflowInstanceId + ", " : "")
				+ (workflowInstanceState != null ? "workflowInstanceState=" + workflowInstanceState + ", " : "")
				+ (payloadType != null ? "payloadType=" + payloadType + ", " : "")
				+ (payloadPath != null ? "payloadPath=" + payloadPath + ", " : "")
				+ (workItem != null ? "workItemId=" + workItem.toString() + ", " : "")
				+ (routes != null ? "routeId=" + routes.toString() + ", " : "")
				+ (workflowMetadataFieldsList != null
						? "workflowMetadataFieldsList=" + workflowMetadataFieldsList.subList(0,
								Math.min(workflowMetadataFieldsList.size(), maxLen)) + ", "
						: "")
				+ (nodeDateFormat != null ? "nodeDateFormat=" + nodeDateFormat + ", " : "")
				+ "isReminderEmailActivated=" + isReminderEmailActivated + ", "
				+ (emailVO != null ? "emailVO=" + emailVO + ", " : "") + "isTaskDeadlineActivated="
				+ isTaskDeadlineActivated + ", dueDays=" + dueDays + ", dueHours=" + dueHours + ", dueMinutes="
				+ dueMinutes + ", isDelegationAllowed=" + isDelegationAllowed + ", "
				+ (delegateAssignee != null ? "delegateAssignee=" + delegateAssignee + ", " : "")
				+ (delegateAssigneeAuthorizable != null
						? "delegateAssigneeAuthorizable=" + delegateAssigneeAuthorizable + ", "
						: "")
				+ "isDynamicParticipant=" + isDynamicParticipant + ", "
				+ (dynamicParticipant != null ? "dynamicParticipant=" + dynamicParticipant + ", " : "")
				+ (dynamicParticipantAuthorizable != null
						? "dynamicParticipantAuthorizable=" + dynamicParticipantAuthorizable + ", "
						: "")
				+ (reminderCronExpression != null ? "reminderCronExpression=" + reminderCronExpression + ", " : "")
				+ (taskDeadlineCronExpression != null ? "taskDeadlineCronExpression=" + taskDeadlineCronExpression : "")
				+ (taskDeadlineMetadataField != null ? "taskDeadlineMetadataField=" + taskDeadlineMetadataField : "")
				+ "]";
	}

	public String getWFRoute() {
		// TODO Auto-generated method stub
		return wfRoute;
	}
}
