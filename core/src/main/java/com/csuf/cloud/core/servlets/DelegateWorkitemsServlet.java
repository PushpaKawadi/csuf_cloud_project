package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.jcr.Session;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.apache.sling.models.annotations.injectorspecific.OSGiService;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.services.WorkflowConfigService;
import com.csuf.cloud.core.services.WorkflowService;
import com.csuf.cloud.core.utils.ArgumentParser;
import com.csuf.cloud.core.vo.EmailServiceVO;
import com.csuf.cloud.core.vo.WorkflowVO;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/delegateWorkitems" })
public class DelegateWorkitemsServlet extends SlingAllMethodsServlet {

	private static final long serialVersionUID = 1L;

	@Reference
	private WorkflowConfigService workflowConfig;

	@Reference
	private WorkflowService workflowService;

	@Reference
	private EmailService emailService;
	@Reference
	private TaskService taskService;

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());
	private static final transient String DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final transient String FROM_EMAIL = "csuf@fullerton.edu";
	private static final transient String BCC_EMAIL = "yjayaram@fullerton.edu";
	private static final transient String EMAIL_SUBJECT = "AEM Task Delegated";
	private static final transient String DELEGATEE_GROUP = "workflow-users";
	private static final transient String NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/Delegate_Workitems_Templates/Delegate_Workitems_Templates.html";

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {

		log.debug("Entered DelegateWorkitemsServlet Servlet doGet method");
		ResourceResolver resolver = request.getResourceResolver();
		Session session = resolver.adaptTo(Session.class);
		WorkflowSession wfSession = resolver.adaptTo(WorkflowSession.class);
		String wItem = StringUtils.EMPTY;
		String delegatee = StringUtils.EMPTY;
		String email = StringUtils.EMPTY;
		String name = StringUtils.EMPTY;
		final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
		if (params.containsKey("wId")) {
			wItem = params.get("wId")[0].toString();
		}
		if (params.containsKey("user")) {
			delegatee = params.get("user")[0].toString();
		}
		if (params.containsKey("email")) {
			email = params.get("email")[0].toString();
		}
		if (params.containsKey("name")) {
			name = params.get("name")[0].toString();
		}

		EmailServiceVO emailVO = new EmailServiceVO();
		emailVO.setUseCQGateway(false);
		log.error("wItem=" + wItem);
		try (PrintWriter out = response.getWriter();) {
			WorkItem currentWorkItem = wfSession.getWorkItem(wItem);
			log.error("currentWorkItem=" + currentWorkItem);
			WorkflowVO workflowVO = new WorkflowVO();
			workflowVO.setWorkflowInstanceId(currentWorkItem.getWorkflow().getId());
			workflowVO.setWorkItem(currentWorkItem);
			workflowVO.setWorkflowModelName(currentWorkItem.getWorkflow().getWorkflowModel().getTitle());
			workflowVO.setGraniteWorkflowSession(wfSession);
			workflowVO.setAdminSession(session);
			String workflowData = currentWorkItem.getWorkflow().getWorkflowModel().getTitle()
					.concat(" - ".concat(ArgumentParser.getWorkitemTitle(currentWorkItem)));
			if (StringUtils.isNotBlank(delegatee)) {
				workflowVO.setDelegateAssignee(delegatee);
			}
			Boolean isSuccess = false;

			if (StringUtils.isNotBlank(workflowVO.getDelegateAssignee())) {
				if (currentWorkItem.getMetaDataMap().containsKey("ORIGINAL_PARTICIPANT")
						&& !currentWorkItem.getMetaDataMap().get("ORIGINAL_PARTICIPANT").equals(DELEGATEE_GROUP)) {
					isSuccess = workflowService.assignTaskToDelegateeForGroupDelegatee(workflowVO,
							currentWorkItem.getMetaDataMap().get("ORIGINAL_PARTICIPANT").toString());
				} else {
					isSuccess = workflowService.assignTaskToDelegatee(workflowVO);
				}
				if (isSuccess) {
					List<String> toList = new ArrayList<String>();
					toList.add(email);
					Map<String, String> templateVaribles = new HashMap<>();
					templateVaribles.put("toName", name);
					templateVaribles.put("wItem", workflowData);
					emailVO.setTemplateVaribles(templateVaribles);
					emailVO.setToName(templateVaribles.get("toName"));
					emailVO.setToAddress(toList);
					emailVO.setFromAddress(FROM_EMAIL);
					emailVO.setFromName(FROM_EMAIL);
					List<String> bccList = new ArrayList<String>();
					bccList.add(BCC_EMAIL);
					emailVO.setBccAddress(bccList);
					emailVO.setSubject(EMAIL_SUBJECT);
					emailVO.setTemplatePath(NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH);
					emailVO.setEmbeddedImage(true);
					emailVO.setEmbeddedImagePath(DEFAULT_IMAGE_PATH);
					emailVO.setEmbeddedImageDescription("CSUF Logo");
					emailVO.setStartTLS(false);
					sendEmail(emailVO);
					out.print("success");
				} else {
					out.print("Delegate Unsuccessful");
				}

			}

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != resolver && resolver.isLive()) {
				resolver.close();
			}
			if (wfSession != null) {
				wfSession.logout();
			}
			if (session != null) {
				session.logout();
			}
		}
		log.debug("Exit DelegateWorkitemsServlet Servlet doGet method");

	}

	private void sendEmail(EmailServiceVO emailVO) {
		try {

			List<String> emailFailureList = emailService.sendEmail(emailVO);

			if (null != emailFailureList && !emailFailureList.isEmpty()) {
				log.error("Reminder Email sending failed to these recipients: {}", emailFailureList.toString());
			} else if (null != emailFailureList && emailFailureList.isEmpty()) {
				log.info("Reminder Email sent successfully to these recipients: {}", emailVO.getToAddress());
			} else {
				log.error("FATAL : Reminder Email sending failed");
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
	}
}
