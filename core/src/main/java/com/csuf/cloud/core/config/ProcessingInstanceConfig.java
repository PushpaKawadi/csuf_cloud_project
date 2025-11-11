package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.osgi.service.metatype.annotations.Option;

/**
 * Configuration file for ProcessingInstance
 * 
 * @author 105876
 */
@ObjectClassDefinition(name = "Processing Instance Configuration", description = " AEM Processing Instance Configuration")
public @interface ProcessingInstanceConfig {

	/**
	 * @return
	 */
	@AttributeDefinition(name = "Is Processing Instance ?", description = "Mark it as true if this aem server is a processing instance", type = AttributeType.BOOLEAN, required = true)
	public boolean isProcessingInstance() default false;

	/**
	 * @return
	 */
	@AttributeDefinition(name = "Processing URL", description = "Processing URL (http scheme, hostname and port details)", type = AttributeType.STRING, required = true)
	public String processingUrl() default "http://localhost:4602";

	/**
	 * @return
	 */
	@AttributeDefinition(name = "User name", description = "Service User name", type = AttributeType.STRING, required = true)
	public String userName() default "service_user";

	/**
	 * @return
	 */
	@AttributeDefinition(name = "User Security", description = "Service User Security", type = AttributeType.PASSWORD, required = true)
	public String userSecurity() default "P@ssw0rd";

	/**
	 * @return
	 */
	@AttributeDefinition(name = "Database Type", description = "Please select a Database Type", options = {
			@Option(label = "ORACLE", value = "ORACLE"), @Option(label = "MYSQL", value = "MYSQL") })
	String dbType() default "ORACLE";

}