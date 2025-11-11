package com.csuf.cloud.core.utils;

import org.apache.commons.lang3.StringUtils;

import com.adobe.granite.workflow.WorkflowException;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

public class ArgumentParser {

	public enum FormType {
		AF, PDF, READ_ONLY_AF;

		private FormType() {
		}
	}

	public static String getInputDataXMLPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "INPUT_DATAXML", "INPUT_COMBINED_DATAXML",
				"FOLDER_PAYLOAD");
	}

	public static String getInputCombinedDataXMLPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get("INPUT_COMBINED_DATAXML", String.class);
		return property;
	}

	public static String getOutputDataXMLPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "OUTPUT_DATAXML", "OUTPUT_COMBINED_DATAXML",
				"FOLDER_PAYLOAD");
	}

	public static String getOutputStepAttachmentsPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "OUTPUT_STEP_ATTACHMENTS",
				"OUTPUT_STEP_COMBINED_ATTACHMENTS", "FOLDER_PAYLOAD");
	}

	public static String getDORPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "DOR_PATH", "DOR_COMBINED_PATH", "FOLDER_PAYLOAD");
	}

	public static String getPDFPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "PDF_PATH", "PDF_COMBINED_PATH", "FOLDER_PAYLOAD");
	}

	public static String getInputStepAttachmentsPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get("INPUT_STEP_ATTACHMENTS", String.class);
		return property;
	}

	public static String getOutputTaskAttachmentsPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get("OUTPUT_STEP_ATTACHMENTS", String.class);
		return property;
	}

	public static String getInputCombinedFormAttachmentsPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get("INPUT_COMBINED_FORM_ATTACHMENTS", String.class);
		return property;
	}

	public static String getInputFormAttachmentsPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "INPUT_FORM_ATTACHMENTS",
				"INPUT_COMBINED_FORM_ATTACHMENTS", "FOLDER_PAYLOAD");
	}

	public static String getOutputFormAttachmentsPath(WorkItem workItem) {
		return getStringValueWithBackwardCompatibilty(workItem, "OUTPUT_FORM_ATTACHMENTS",
				"OUTPUT_COMBINED_FORM_ATTACHMENTS", "FOLDER_PAYLOAD");
	}

	public static String getOutputCombinedTaskAttachmentsPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get("OUTPUT_STEP_COMBINED_ATTACHMENTS", String.class);
		if (StringUtils.isBlank(property)) {
			property = getStringValueWithBackwardCompatibilty(workItem, "OUTPUT_FORM_ATTACHMENTS",
					"OUTPUT_COMBINED_FORM_ATTACHMENTS", "FOLDER_PAYLOAD");
		}
		return property;
	}

	public static boolean isCommentAllowed(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("IS_COMMENT_ALLOWED", String.class));
	}

	public static boolean isUploadTaskAttachmentAllowed(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean(args.get("IS_ATTACHMENT_ALLOWED", String.class));
	}

	public static boolean isViewAttachmentNotAllowed(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean(args.get("IS_VIEW_ATTACHMENT_NOT_ALLOWED", String.class));
	}

	public static FormType getFormType(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = args.get("FORM_TYPE", String.class);
		FormType formType = FormType.valueOf(property);
		switch (formType) {
		case AF:
			return FormType.AF;
		case READ_ONLY_AF:
			return FormType.AF;
		case PDF:
			return formType;
		}
		return formType;
	}

	public static String getAFPath(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return args.get("AF_PATH", String.class);
	}

	public static boolean isReadOnlyForm(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = args.get("FORM_TYPE", String.class);
		FormType formType = FormType.valueOf(property);
		if (FormType.READ_ONLY_AF.equals(formType)) {
			return true;
		}
		return false;
	}

	public static boolean showAssignee(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_ASSIGNEE", String.class));
	}

	public static boolean showActionTaken(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_ACTION", String.class));
	}

	public static boolean showComment(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_COMMENT", String.class));
	}

	public static boolean showDocumentOfCompletedTasks(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_DOCUMENT_OF_COMPLETED_TASK", String.class));
	}

	public static boolean isPreviousStepDataAllowed(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("IS_PREVIOUS_STEP_DATA_ALLOWED", String.class));
	}

	public static String getWorkitemStage(WorkItem workItem) {
		return (String) workItem.getMetaDataMap().get("workflowStage", String.class);
	}

	public static String getWorkitemTitle(WorkItem workItem) {
		return (String) workItem.getMetaDataMap().get("title", String.class);
	}

	public static boolean isNextStepDataAllowed(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("IS_NEXT_STEP_DATA_ALLOWED", String.class));
	}

	public static boolean showReset(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_RESET", String.class));
	}

	public static boolean showSave(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_SAVE", String.class));
	}

	public static boolean showSubmit(WorkItem workItem) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		return Boolean.parseBoolean((String) args.get("SHOW_SUBMIT", String.class));
	}

	private static String getStringValueWithBackwardCompatibilty(WorkItem workItem, String oldPropertyName,
			String newPropertyName, String defaultPrefix) {
		MetaDataMap args = workItem.getNode().getMetaDataMap();
		String property = (String) args.get(newPropertyName, String.class);
		if (property == null || property.isEmpty()) {
			property = (String) args.get(oldPropertyName, String.class);
			if (property != null && !property.isEmpty())
				property = defaultPrefix + ":" + property;
		}
		return property;
	}

	public static String getRoutes(WorkItem workItem) {
		StringBuilder builder = new StringBuilder();
		JsonParser parser = new JsonParser();
		MetaDataMap args = workItem.getNode().getMetaDataMap();

		String[] routes = args.get("ROUTES", String[].class);
		if ((routes == null) || (routes.length == 0)) {
			return null;
		}
		for (String route : routes) {
			JsonObject json = parser.parse(route).getAsJsonObject();
			String routeLabel = json.get("Route_Label").getAsString();
			builder.append(routeLabel);
			builder.append(",");
		}
		return builder.toString().substring(0, builder.toString().length() - 1);
	}

	public static String getHistoryPathForWorkItem(WorkItem workItem) throws WorkflowException {
		String workflowId = getWorkflowName(workItem);
		String historyUniqueId = workItem.getMetaDataMap().get("DASHBOARD_HISTORY_PATH", String.class);
		if (StringUtils.isBlank(historyUniqueId)) {
			throw new WorkflowException("Error in getHistoryPathForWorkItem method");
		}
		return workflowId + "/" + "history" + "/" + historyUniqueId;
	}

	public static String getWorkflowName(WorkItem workItem) {
		return workItem.getWorkflow().getId().replace('/', '_');
	}
}
