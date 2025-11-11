package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

/**
 * Configuration for providing exclusive access to the users of a group on a
 * form on forms portal page
 * 
 * @author 105876
 */

@ObjectClassDefinition(name = "Form Access Configuration", description = "Configuration for providing exclusive access to the users of a group on a form on forms portal page")
public @interface FormAccessConfig {

	@AttributeDefinition(name = "Tag and User Group Mapping", description = "Tag ID and User Group Mapping separated by a tilde character")
	String[] tagAndUserGroupMapping() default { "csuf:forms/cobra~HRDI/Total Wellness Reviewers" };
}