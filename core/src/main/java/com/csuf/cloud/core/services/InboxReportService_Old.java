package com.csuf.cloud.core.services;

import org.apache.sling.api.resource.ResourceResolver;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.google.gson.JsonObject;

public interface InboxReportService_Old {

	JsonObject getSCWReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);
	
	JsonObject getGradeChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getMajorMinorChangeReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);

	JsonObject getLateAddsReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

	JsonObject getLeaveOfAbsenceReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession,
			WorkItem wItem, int count);	

	JsonObject getAppealsReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);
	JsonObject getCatalogYearReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);
	JsonObject getMPPReport(ResourceResolver resolver, WorkflowSession graniteWorkflowSession, WorkItem wItem,
			int count);

}