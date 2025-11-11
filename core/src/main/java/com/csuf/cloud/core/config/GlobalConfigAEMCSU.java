package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.AttributeType;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "Global Configuration AEM CSU", description = "CSUF Global Configuration New Service")

public @interface GlobalConfigAEMCSU {

	@AttributeDefinition(name = "Grade Change Filenet URL", description = "Grade Change Filenet URL", type = AttributeType.STRING)
	String grade_Change_Filenet_URL() default "http://erpicn521tst.fullerton.edu:9080/CSUFAEMServices/rest/AEMService/addGradeChangeDocuments";
}
