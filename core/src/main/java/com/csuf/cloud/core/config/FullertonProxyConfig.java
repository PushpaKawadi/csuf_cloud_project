package com.csuf.cloud.core.config;

import org.osgi.service.metatype.annotations.ObjectClassDefinition;
import org.osgi.service.metatype.annotations.AttributeDefinition;

@ObjectClassDefinition(
        name = "Proxy Servlet Configuration",
        description = "Configs for the proxy servlet"
)
public @interface FullertonProxyConfig {

    @AttributeDefinition(
            name = "API Key",
            description = "Secret key for validating requests"
    )
    String api_key() default "";

}
