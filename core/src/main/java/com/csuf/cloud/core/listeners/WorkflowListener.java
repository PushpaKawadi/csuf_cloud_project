package com.csuf.cloud.core.listeners;

import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.jcr.Session;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.LoginException;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ResourceResolverFactory;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.event.Event;
import org.osgi.service.event.EventConstants;
import org.osgi.service.event.EventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.w3c.dom.Document;
import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.event.WorkflowEvent;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.model.WorkflowModel;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.services.WorkflowConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.XMLUtils;

@Component(service = EventHandler.class, immediate = true, property = {
		Constants.SERVICE_DESCRIPTION + "=Workflow Event Listener to manage assign task workitems programmatically",
		EventConstants.EVENT_TOPIC + "=" + WorkflowEvent.EVENT_TOPIC })

public class WorkflowListener implements EventHandler {

	protected final Logger log = LoggerFactory.getLogger(WorkflowListener.class);

	@Reference
	private WorkflowConfigService workflowConfig;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private TaskService taskService;

	@Reference
	private ResourceResolverFactory resolverFactory;
	
	private static final String SUB_SERVICE_NAME = "datawrite";
	// public static final String JOB_TOPIC =
	// "workflow/workitem/af-assign-task/delegate/job";
	private static final String ASSIGN_TASK_STEP = "forms:assigntask";

	public enum WorkflowStatus {
		RUNNING, FAILED, RESUMED, SUSPENDED, COMPLETED, TERMINATED;

		private WorkflowStatus() {
		}
	}

	@Override
	public void handleEvent(Event event) {
		log.debug("entered WorkflowListener");
		String topic = event.getTopic();
		if (!topic.equals(WorkflowEvent.EVENT_TOPIC)) {
			log.debug("event topic is not a WorkflowEvent, so returning without further processing!");
			return;
		}
		String instanceId = StringUtils.EMPTY;

		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Session adminSession = null;
		try {
			log.debug("Requesting service resolver for subservice '{}'", SUB_SERVICE_NAME);

	        Map<String, Object> params = new HashMap<>();
	        params.put(ResourceResolverFactory.SUBSERVICE, SUB_SERVICE_NAME);

	        try {
	            resolver = resolverFactory.getServiceResourceResolver(params);

	            if (resolver != null) {
	                log.debug("Service resolver obtained successfully: {}", resolver);
	            } else {
	                log.debug("Service resolver is null or not live for subservice '{}'", SUB_SERVICE_NAME);
	            }
	        } catch (LoginException e) {
	            log.error("Failed to get service resolver for subservice '{}': {}", SUB_SERVICE_NAME, e.getMessage(), e);
	        } catch (Exception e) {
	            log.error("Unexpected error while getting service resolver: {}", e.getMessage(), e);
	        }
			//resolver = globalConfigService.getResourceResolver();
			adminSession = resolver.adaptTo(Session.class);//.getAdminSession();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			WorkflowEvent wfevent = (WorkflowEvent) event;

			log.debug("wfevent : {}", wfevent.toString());

			instanceId = wfevent.getWorkflowInstanceId();
			log.debug("wfevent instanceId is set to ".concat(instanceId));
			
			WorkItem item = wfevent.getWorkItem();
			
			/*Workflow workflowInstance = wfSession.getWorkflow(instanceId);
			log.info("wfSession= "+wfSession);
			log.info("workflowInstance= "+workflowInstance);*/
			

			// If there is nothing to work on then we will return immediately
			/*if (!this.doesInstanceIdContainWorkflows(workflowInstance.getWorkflowModel())) {
				log.info("Workflow Model having title as {} is not added in Workflow Scheduler Configuration",
						workflowInstance.getWorkflowModel().getTitle());
				return;
			}*/

			if (wfevent.getEventType().equalsIgnoreCase(WorkflowEvent.WORKFLOW_RESUMED_EVENT)) {
				taskService.updateWorkflowInstanceStatus(instanceId, WorkflowStatus.RUNNING.name());
				return;
			} else if (wfevent.getEventType().equalsIgnoreCase(WorkflowEvent.WORKFLOW_ABORTED_EVENT)) {
				taskService.updateWorkflowInstanceStatus(instanceId, WorkflowStatus.TERMINATED.name());
				return;
			} else if (wfevent.getEventType().equalsIgnoreCase(WorkflowEvent.WORKFLOW_COMPLETED_EVENT)) {
				taskService.updateWorkflowInstanceStatus(instanceId, WorkflowStatus.COMPLETED.name());
				return;
			} else if (wfevent.getEventType().equalsIgnoreCase(WorkflowEvent.WORKFLOW_SUSPENDED_EVENT)) {
				taskService.updateWorkflowInstanceStatus(instanceId, WorkflowStatus.SUSPENDED.name());
				return;
			} else if (wfevent.getEventType().equalsIgnoreCase(WorkflowEvent.JOB_FAILED_EVENT)) {
				taskService.updateWorkflowInstanceStatus(instanceId, WorkflowStatus.FAILED.name());
				return;
			}
			if (null != item && StringUtils.isNotBlank(item.getItemSubType())
					&& item.getItemSubType().equalsIgnoreCase(ASSIGN_TASK_STEP)) {
				log.info("Current workItem Id : {} ", item.getId());
				boolean isTaskExist = taskService.isTaskExist(item.getId());
				if (!isTaskExist && wfevent.getEventType().equalsIgnoreCase("NodeTransition")
						&& !item.getId().startsWith("VolatileWorkItem")) {
					log.debug("Task Does not exist, saving it in database");
					String workitemNodeId = taskService.saveTask(item, resolver,
							(adminSession != null ? adminSession : globalConfigService.getAdminSession()));
					log.info("workitem_node_id returned from database for saveTask operation : {}", workitemNodeId);
				} else if (isTaskExist && wfevent.getEventType().equalsIgnoreCase("WorkItemDelegated")) {
					log.debug("Task exist in database");
					log.debug(
							"WorkItemDelegated event : updating the task assignee for the existing workitem in database");
					String assignee = taskService.getTaskAssignee(item.getId());
					log.debug("previous assignee : {}", assignee);
					log.debug("delegated assignee : {}", wfevent.getDelegateName());
					if (StringUtils.isNotBlank(wfevent.getDelegateName())
							&& !assignee.equalsIgnoreCase(wfevent.getDelegateName())) {
						boolean updateAssigneeStatus = taskService.updateTaskAssignee(item.getId(),
								wfevent.getDelegateName());
						log.info("update Assignee Status in case of delegation event : {}", updateAssigneeStatus);
					}
				} else if (isTaskExist && wfevent.getEventType().equalsIgnoreCase("NodeTransition")) {
					log.debug("Task exist in database");
					log.debug(
							"NodeTransition event : updating the task assignee for the existing workitem in database");

					// updating task status in case of GoTo Step, old completed workitem needs to be
					// made active again
					log.debug(
							"updating existing task status as ACTIVE as GoTo Step has taken workflow to a previous step");

					boolean isTaskUpdated = taskService.updateTaskStatus(item.getId(), "ACTIVE", true);
					if (isTaskUpdated) {
						String taskDescription = null;
						// fetch updated dataXML for current workitem
						InputStream is = CSUFUtils.getDataXMLStreamFromPayloadPath(resolver, item.getContentPath(),
								"Data.xml");
						if (null != is) {
							Document doc = XMLUtils.getDomDocument(is);
							taskDescription = XMLUtils.getExtendedDesc(doc);
							String dataXML = XMLUtils.prettyPrintAsString(doc);
							if (StringUtils.isNotBlank(dataXML)) {
								log.debug("updating task data");
								taskService.updateTaskData(item.getId(), dataXML);
							}
						}

						// updating task Description in case of GoTo Step
						log.debug("taskDescription as read from dataXML in case of GoTo Step : {}", taskDescription);
						if (StringUtils.isNotBlank(taskDescription)) {
							boolean isTaskDescriptionUpdated = taskService
									.updateTaskDescription(item.getWorkflow().getId(), taskDescription);
							log.debug("taskDescription update status in case of Go To Workflow Step : {}",
									isTaskDescriptionUpdated);
						}
					}

					String assignee = taskService.getTaskAssignee(item.getId());
					log.debug("previous assignee : {}", assignee);
					log.debug("delegated assignee : {}", item.getCurrentAssignee());
					if (StringUtils.isNotBlank(item.getCurrentAssignee())
							&& !assignee.equalsIgnoreCase(item.getCurrentAssignee())) {
						boolean updateAssigneeStatus = taskService.updateTaskAssignee(item.getId(),
								item.getCurrentAssignee());
						log.info("update Assignee Status in case of delegation event : {}", updateAssigneeStatus);
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
			if (adminSession != null && adminSession.isLive()) {
				adminSession.logout();
			}
		}
		log.debug("exit WorkflowListener");
	}

	/**
	 * This function checks to see if the workflow should be operated on.
	 * 
	 * @param instanceId The instance of the current workflow
	 * @return True if the workflow is whitelisted to be worked on, False if it is
	 *         not whitelisted to be worked on
	 */
	private boolean doesInstanceIdContainWorkflows(WorkflowModel model) {
		if (model == null) {
			return false;
		}

		String id = model.getId();
		String title = model.getTitle();

		if (id.isEmpty() || title.isEmpty()) {
			return false;
		}

		List<String> workflows = this.workflowConfig.getToBeScannedWorkflowModels();
		for (String workflow : workflows) {
			if (id.toLowerCase().contains(workflow.toLowerCase())
					|| title.toLowerCase().contains(workflow.toLowerCase())) {
				return true;
			}
		}
		return false;
	}
}