package com.csuf.cloud.core.services;

public interface ProcessingInstanceConfigService {
	String processingUrl();

	String userName();

	String userSecurity();

	String dbType();

	boolean isProcessingInstance();
}
