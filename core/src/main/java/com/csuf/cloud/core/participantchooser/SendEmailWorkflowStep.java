package com.csuf.cloud.core.participantchooser;

import com.adobe.granite.workflow.WorkflowSession;
import com.adobe.granite.workflow.exec.WorkItem;
import com.adobe.granite.workflow.exec.WorkflowProcess;
import com.adobe.granite.workflow.metadata.MetaDataMap;
import com.day.cq.mailer.MessageGateway;
import com.day.cq.mailer.MessageGatewayService;
import org.apache.commons.mail.Email;
import org.apache.commons.mail.SimpleEmail;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(
        service = WorkflowProcess.class,
        property = { "process.label=Send Test Email (Cloud Compatible)" }
)
public class SendEmailWorkflowStep implements WorkflowProcess {

    private static final Logger log = LoggerFactory.getLogger(SendEmailWorkflowStep.class);

    @Reference
    private MessageGatewayService messageGatewayService;

    @Override
    public void execute(WorkItem workItem, WorkflowSession workflowSession, MetaDataMap args) {
        try {
            Email email = new SimpleEmail();
            email.setSubject("Test Email from AEM Workflow (Cloud SDK)");
            email.setMsg("This is a test email sent via custom workflow step.");
            email.addTo("pushpa.kawadi@thoughtfocus.com");
            email.setFrom("erpimaging@fullerton.edu");

            log.info("Before gateway");

            MessageGateway<Email> gateway = messageGatewayService.getGateway(SimpleEmail.class);
            if (gateway != null) {
                log.info("Inside gateway");
                gateway.send(email);
                log.info("Email sent successfully to {}", "pushpa.kawadi@thoughtfocus.com");
            } else {
                log.info("No MessageGateway available. Check Mail Service configuration.");
            }
        } catch (Exception e) {
            log.error("Failed to send email", e);
        }
    }
}
