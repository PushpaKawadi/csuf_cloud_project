package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration file for CustomScheduler
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Custom Scheduler Configuration", description = "Custom CSUF Scheduler Configuration")
public @interface CustomSchedulerConfig {
	/**
	 * schedulerName
	 * 
	 * @return String name
	 */
	@AttributeDefinition(name = "Scheduler name", description = "Scheduler name", type = AttributeType.STRING)
	public String schedulerName() default "CSUF Scheduler";

	/**
	 * schedulerConcurrent
	 * 
	 * @return schedulerConcurrent
	 */
	@AttributeDefinition(name = "Concurrent", description = "Schedule task concurrently", type = AttributeType.BOOLEAN)
	boolean schedulerConcurrent() default false;

	/**
	 * serviceEnabled
	 * 
	 * @return serviceEnabled
	 */
	@AttributeDefinition(name = "Enabled", description = "Enable Scheduler", type = AttributeType.BOOLEAN)
	boolean serviceEnabled() default true;

	/**
	 * schedulerExpression
	 * 
	 * @return schedulerExpression
	 */
	@AttributeDefinition(name = "Expression", description = "Cron-job expression. Default: run every minute.", type = AttributeType.STRING)
	String schedulerExpression () default "0 * * * * ?"; 
}