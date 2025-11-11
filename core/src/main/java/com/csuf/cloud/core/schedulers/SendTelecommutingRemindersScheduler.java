package com.csuf.cloud.core.schedulers;

import java.sql.Connection;

import java.sql.SQLException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import javax.jcr.Session;

import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Deactivate;
import org.osgi.service.component.annotations.Modified;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.Designate;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.adobe.granite.workflow.WorkflowSession;
import com.csuf.cloud.core.services.EmailService;
import com.csuf.cloud.core.services.GlobalConfigCSUFService;
import com.csuf.cloud.core.services.GlobalConfigService;
import com.csuf.cloud.core.services.JDBCConnectionHelperService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.services.TaskService;
import com.csuf.cloud.core.utils.CSUFConstantsUtils;
import com.csuf.cloud.core.utils.CSUFUtils;
import com.csuf.cloud.core.utils.DatabaseUtils;
import com.csuf.cloud.core.vo.EmailServiceVO;

/**
 * This Scheduled Service processes all task rows from task_details table in
 * database and update their correct status by synchronizing respective WorkItem
 * and workflow status from processing instance.
 */
@Component(immediate = true, configurationPid = "csuf.scheduler.sendTeleReminders.Scheduler", property = {
		Constants.SERVICE_DESCRIPTION + "=Send Telecommuting Reminder Scheduler Service" })
@Designate(ocd = SendTelecommutingRemindersScheduler.Configuration.class)
public class SendTelecommutingRemindersScheduler implements Runnable {

	protected static Logger log = LoggerFactory.getLogger(SendTelecommutingRemindersScheduler.class);
	private int schedulerID;
	private Configuration config;

	@Reference
	private Scheduler scheduler;

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private GlobalConfigService globalConfigService;

	@Reference
	private GlobalConfigCSUFService globalConfigCSUService;

	@Reference
	private TaskService taskService;

	@Reference
	private JDBCConnectionHelperService jdbcService;

	@Reference
	private EmailService emailService;

	@Reference
	private JDBCConnectionHelperService jdbcConnectionService;

	private static final transient String DEFAULT_IMAGE_PATH = "/content/dam/csu/CSUF_Mailer_logo.gif";
	private static final transient String NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH = "/etc/notification/email/csuf/Telecommuting Agreement/Telecommuting_Agreement_Reminder.html";

	@Activate
	public void activate(Configuration config) {
		schedulerID = config.schedulerName().hashCode();
		addScheduler(config);
	}

	@Modified
	protected void modified(Configuration config) {
		removeScheduler();
		schedulerID = config.schedulerName().hashCode(); // update schedulerID
		addScheduler(config);
	}

	@Deactivate
	protected void deactivate(Configuration config) {
		removeScheduler();
	}

	/**
	 * Remove a scheduler based on the scheduler ID
	 */
	private void removeScheduler() {
		log.debug("Send Telecommuting Reminder Scheduler Job '{}'", schedulerID);
		scheduler.unschedule(String.valueOf(schedulerID));
	}

	/**
	 * Add a scheduler based on the scheduler ID
	 */
	private void addScheduler(Configuration config) {
		if (config.isSchedulerEnabled()) {
			ScheduleOptions sopts = scheduler.EXPR(config.schedulerExpression());
			sopts.name(String.valueOf(schedulerID));
			sopts.canRunConcurrently(false);
			scheduler.schedule(this, sopts);
			log.debug("Send Telecommuting Reminder Scheduler added succesfully with cron expression : {}",
					config.schedulerExpression());
			this.config = config;
		} else {
			log.debug("Send Telecommuting Reminder Scheduler is disabled, no scheduler job will be created");
		}
	}

	/**
	 * Runs the implementation at the scheduled interval
	 *
	 * @return void
	 */
	@Override
	public void run() {
		log.debug("starting Send Telecommuting Reminder Scheduler Service...");
		WorkflowSession wfSession = null;
		ResourceResolver resolver = null;
		Connection dbConn = null;
		JSONArray resultArray = new JSONArray();
		JSONArray getResultArray = new JSONArray();
		try {

			int dayInterval = config.dayInterval();
			resolver = globalConfigService.getResourceResolver();
			wfSession = resolver.adaptTo(WorkflowSession.class);
			String dataSourceVal = globalConfigCSUService.getAEMFormsDatabaseSource();
			dbConn = getConnection(dataSourceVal);
			//String sqlQuery = CSUFConstantsUtils.getTeleData;
			String sqlQuery = CSUFConstantsUtils.getUpdatedTeleData;
			String lookupFields = CSUFConstantsUtils.getTeleDataLookUpFieldsOld;
			resultArray = DatabaseUtils.getDataFromDB(sqlQuery, lookupFields, dbConn);
			log.debug("resultArray length"+resultArray.length());
			JSONObject objects = null;
			int count = 0;
			for (int i = 0; i < resultArray.length(); i++) {
				objects = resultArray.getJSONObject(i);
				if (objects.has(config.effectiveDate().toString())) {
					String endDate = objects.getString(config.effectiveDate().toString());
				/*	String sqlGetQuery = CSUFConstantsUtils.getResubmittedTeleData;
					sqlGetQuery = sqlGetQuery.replaceAll("<<cwid>>", objects.getString("EMPLID"));
					sqlGetQuery = sqlGetQuery.replaceAll("<<end_dt>>",
							CSUFUtils.getSimpleDateFromat(objects.getString("END_DT")));
					String getLookupFields = CSUFConstantsUtils.getResubmittedTeleDataLookUpFieldsOld;
					getResultArray = DatabaseUtils.getDataFromDB(sqlGetQuery, getLookupFields, dbConn);
					log.debug("getResultArray : {}", getResultArray.toString());
					if (StringUtils.isNotEmpty(endDate.toString()) && getResultArray.length() == 0) {*/
						if (StringUtils.isNotEmpty(endDate.toString())) {
						SimpleDateFormat datePattern = new SimpleDateFormat("yyyy-MM-dd");
						Date effDateNew = datePattern.parse(endDate);
						// Date effDateNew = Date.valueOf(endDate);
						LocalDateTime effDate = CSUFUtils.convertToLocalDateTimeViaInstant(effDateNew);
						log.debug("effDate : {}", effDate);
						log.debug("difference days : {}", effDate.minusDays(dayInterval));
						// if (LocalDateTime.now().isAfter(effDate.minusDays(dayInterval))) {
						if (LocalDateTime.now().isBefore(effDate) && LocalDateTime.now().with(LocalTime.MIDNIGHT)
								.equals(effDate.minusDays(dayInterval))) {
							count = count+1;
							EmailServiceVO emailVO = new EmailServiceVO();
							emailVO.setUseCQGateway(false);
							String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\." + "[a-zA-Z0-9_+&*-]+)*@"
									+ "(?:[a-zA-Z0-9-]+\\.)+[a-z" + "A-Z]{2,7}$";
							Pattern pattern = Pattern.compile(emailRegex);
							List<String> bccList = new ArrayList<String>();
							for (String bccAdd : (Arrays.asList(config.notifyEmailBccAddresses()))) {
								bccList.add(bccAdd);
							}
							emailVO.setBccAddress(bccList);

							List<String> ccList = new ArrayList<String>();
							for (String ccAdd : (Arrays.asList(config.notifyEmailCcAddresses()))) {
								ccList.add(objects.getString(ccAdd));
							}
							emailVO.setCcAddress(ccList);

							List<String> toList = new ArrayList<String>();
							for (String toAdd : (Arrays.asList(config.notifyEmailToAddresses()))) {
								toList.add(objects.getString(toAdd));
							}
							SimpleDateFormat fromDate = new SimpleDateFormat("yyyy-MM-dd");
							SimpleDateFormat toDate = new SimpleDateFormat("MM/dd/yyyy");

							Map<String, String> templateVaribles = new HashMap<>();
							for (String temp : (Arrays.asList(config.notifyTemplateVariables()))) {
								String[] arrOfVar = temp.split("~");
								String value = objects.getString(arrOfVar[1]);
								if (value.contains("00:00:00.0")) {
									value = value.replace("00:00:00.0", "");
									if (value != null && !value.equals("")) {
										try {
											value = toDate.format(fromDate.parse(value));
										} catch (ParseException e) {
											log.error("ParseException in telecommuting reminder for value="
													+ Arrays.toString(e.getStackTrace()));
										}
									}
								}
								templateVaribles.put(arrOfVar[0], value);

							}

							emailVO.setTemplateVaribles(templateVaribles);
							emailVO.setToAddress(toList);
							emailVO.setFromAddress(config.notifyEmailFromAddress());
							emailVO.setFromName(config.notifyEmailFromAddress());
							emailVO.setToName(templateVaribles.get("toName"));
							// emailVO.setSubject(config.notifyEmailSubject());
							emailVO.setSubject("Telecommuting Agreement End Date Reminder - "
									.concat(templateVaribles.get("toName")));
							emailVO.setTemplatePath(config.notifyEmailTemplatePath());
							emailVO.setEmbeddedImage(true);
							emailVO.setEmbeddedImagePath(config.notifyEmailEmbeddedImagePath());
							emailVO.setEmbeddedImageDescription("CSUF Logo");
							emailVO.setStartTLS(config.isNotifyEmailStartTLS());
                            log.debug("Email VO"+emailVO);
							sendReminderEmail(emailVO, resolver);
							log.debug("reminder email sent for the task started on : {}", effDate);
						}
					}
				}
			}
			log.info("Total Matching records count"+count);

		} catch (Exception e) {
			log.error("Error while running Send Telecommuting Reminder Scheduler Service", e);
		} finally {
			if (wfSession != null) {
				wfSession.logout();
			}
			if (resolver != null && resolver.isLive()) {
				resolver.close();
			}
			if (dbConn != null) {
				try {
					dbConn.close();
				} catch (SQLException e) {
					log.error(Arrays.toString(e.getStackTrace()));
				}
			}
		}
		log.debug("completed execution of \"Send Telecommuting Reminder Scheduler Service\"...");
	}

	private void sendReminderEmail(EmailServiceVO emailVO, ResourceResolver resolver) {
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

	@ObjectClassDefinition(name = "Send Telecommuting Reminder Scheduler Configuration")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every 5 minutes", type = AttributeType.STRING)
		String schedulerExpression() default "0 0/5 * 1/1 * ? *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "Send Telecommuting Reminder Scheduler Configuration";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default false;

		@AttributeDefinition(name = "Send Notification Email From Address", description = "From Address for sending notification emails")
		String notifyEmailFromAddress();

		@AttributeDefinition(name = "Send Notification Email To Addresses", description = "To Addresses for sending notification emails")
		String[] notifyEmailToAddresses();

		@AttributeDefinition(name = "Send Notification Email Cc Addresses", description = "Cc Addresses for sending notification emails")
		String[] notifyEmailCcAddresses() default {};

		@AttributeDefinition(name = "Send Notification Email Bcc Addresses", description = "Bcc Addresses for sending notification emails")
		String[] notifyEmailBccAddresses() default {};

		@AttributeDefinition(name = "Send Notification Email Template Variables", description = "Template variables for sending notification emails")
		String[] notifyTemplateVariables() default {};

		@AttributeDefinition(name = "Send Notification Email Subject", description = "Subject for sending notification emails")
		String notifyEmailSubject();

		@AttributeDefinition(name = "Send Notification Day Interval", description = "Interval for sending notification emails")
		int dayInterval() default 3;

		@AttributeDefinition(name = "Send Notification Effective Date", description = "Effective Date for sending notification emails")
		String effectiveDate();

		@AttributeDefinition(name = "Send Notification Email Template Path", description = "Template Path for sending notification emails")
		String notifyEmailTemplatePath() default NOTIFICATION_EMAIL_DEFAULT_TEMPLATE_PATH;

		@AttributeDefinition(name = "Send Notification Email Embedded Image Path", description = "Embedded Image Path for sending notification emails")
		String notifyEmailEmbeddedImagePath() default DEFAULT_IMAGE_PATH;

		@AttributeDefinition(name = "Is Notification Email Start TLS ?", description = "Is Start TLS setting required by the configured SMTP server for sending notification emails ?", type = AttributeType.BOOLEAN)
		boolean isNotifyEmailStartTLS() default false;
	}

	private Connection getConnection(String dataSource) {
		try {
			Connection dbConn = jdbcConnectionService.getDBConn(dataSource);
			log.debug("Connection = {}", dbConn);
			return dbConn;

		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		}
		return null;
	}

}