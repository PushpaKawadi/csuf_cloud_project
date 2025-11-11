package com.csuf.cloud.core.config;

import org.apache.commons.lang3.StringUtils;
import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration Parameters for User Details
 * 
 * @author 104745
 */

@ObjectClassDefinition(name = "Fallback User Details Configuration", description = "Fallback User Deatils Configuration")
public @interface FallbackUserDetailsConfig {
	
	@AttributeDefinition(name = "Fallback User Email Address", description = "Fallback User Email Address")
	String fallbackUserEmailAddress() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Fallback User Id", description = "Fallback User Id")
	String fallbackUserId() default StringUtils.EMPTY;

	@AttributeDefinition(name = "Fallback User Name", description = "Fallback User Full Name")
	String fallbackUserFullName() default StringUtils.EMPTY;
	
}