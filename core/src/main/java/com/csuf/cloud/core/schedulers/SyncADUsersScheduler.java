package com.csuf.cloud.core.schedulers;

import java.lang.management.ManagementFactory;
import java.util.Iterator;

import javax.management.MBeanServer;
import javax.management.ObjectName;
import javax.management.openmbean.TabularData;

import org.apache.sling.commons.scheduler.ScheduleOptions;
import org.apache.sling.commons.scheduler.Scheduler;
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

/**
 * Service to invoke the syncAllExternalUsers() method of
 * org.apache.jackrabbit.oak so that external AD users can be synchronized to
 * AEM repository using LDAP.
 */
@Component(immediate = true, configurationPid = "csuf.scheduler.SyncFacultyADUsersScheduler", property = {
		Constants.SERVICE_DESCRIPTION + "=CSUF Faculty AD sync Scheduler" })
@Designate(ocd = SyncADUsersScheduler.Configuration.class)
public class SyncADUsersScheduler implements Runnable {

	private int schedulerID;

	protected static Logger logger = LoggerFactory.getLogger(SyncADUsersScheduler.class);

	@Reference
	private Scheduler scheduler;

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
		logger.debug("Removing Scheduler Job '{}'", schedulerID);
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
			logger.debug("CSUF Faculty AD External User Sync Scheduler added succesfully with cron expression : "
					.concat(config.schedulerExpression()));
		} else {
			logger.debug("CSUF Faculty AD External User Sync Scheduler is disabled, no scheduler job created");
		}
	}

	/**
	 * Runs the implementation at the scheduled interval
	 *
	 * @return void
	 */
	@Override
	public void run() {
		logger.debug("starting AD Sync Service...");
		MBeanServer mBeanServer = ManagementFactory.getPlatformMBeanServer();
		ObjectName objectName = null;
		try {
			objectName = new ObjectName("org.apache.jackrabbit.oak:handler=\"default\","
					+ "idp=\"ldap\",name=External Identity Synchronization Management,type=UserManagement");
			Object result = mBeanServer.invoke(objectName, "syncAllExternalUsers", null, null);
			/*
			 * TabularData result = (TabularData) mBeanServer.invoke(objectName,
			 * "syncAllExternalUsers", null, null); Iterator<?> resultIterator =
			 * result.keySet().iterator(); while (resultIterator.hasNext()) { Object
			 * resultData = resultIterator.next(); logger.debug("resultData : {}",
			 * resultData); }
			 */
			logger.debug("mbean invocation result : {}", result.toString());
		} catch (Exception e) {
			logger.error("Error while running the Mbean to sync external AD users with AEM using LDAP. ", e);
		}
	}

	@ObjectClassDefinition(name = "CSUF Faculty AD External User Sync Scheduler")
	public @interface Configuration {

		@AttributeDefinition(name = "Cron Expression", description = "Cron-job expression. Default: run every Wednesday at 1:00:00 AM", type = AttributeType.STRING)
		String schedulerExpression() default "0 0 1 ? * WED *";

		@AttributeDefinition(name = "Scheduler Name", description = "Scheduler Name", type = AttributeType.STRING)
		String schedulerName() default "CSUF Faculty AD External User Sync Scheduler";

		@AttributeDefinition(name = "Enable Scheduler ?", description = "Enable Scheduler ?", type = AttributeType.BOOLEAN)
		boolean isSchedulerEnabled() default true;
	}
}