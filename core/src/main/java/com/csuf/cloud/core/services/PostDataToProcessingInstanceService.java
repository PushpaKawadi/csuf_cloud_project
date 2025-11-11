package com.csuf.cloud.core.services;

/**
 * @author 105876
 *
 */
public interface PostDataToProcessingInstanceService {
	String postData(String url, String headers, String body);
}
