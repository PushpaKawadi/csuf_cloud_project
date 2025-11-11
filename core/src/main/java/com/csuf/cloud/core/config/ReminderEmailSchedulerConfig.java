package com.csuf.cloud.core.config;


import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration file for Reminder Email Scheduler
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Reminder Email Scheduler Configuration", description = "Reminder Email Scheduler Configuration")
public @interface ReminderEmailSchedulerConfig {

	/**
	 * serviceEnabled
	 * 
	 * @return serviceEnabled
	 */
	@AttributeDefinition(name = "Enabled", description = "Enable Reminder Email Scheduler", type = AttributeType.BOOLEAN)
	boolean serviceEnabled() default true;
}