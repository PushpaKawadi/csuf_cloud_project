package com.csuf.cloud.core.services.impl;

import java.io.UnsupportedEncodingException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.codec.binary.Base64;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.csuf.cloud.core.services.PostDataToProcessingInstanceService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;
import com.csuf.cloud.core.utils.CSUFUtils;

@Component(service = PostDataToProcessingInstanceService.class)
public class PostDataToProcessingInstanceServiceImpl implements PostDataToProcessingInstanceService {

	/** Default log. */
	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	public String postData(String url, String headers, String body) {
		HttpPost post = null;
		try {
			HttpClient httpclient = CSUFUtils.httpClientTrustingAllSSLCerts();
			url = processingInstanceConfigService.processingUrl().concat(url);
			post = new HttpPost(url.split("\\?")[0]);

			log.debug("url : {}", url);
			log.debug("headers : {}", headers);
			log.debug("body : {}", body);

			String auth = new StringBuffer(processingInstanceConfigService.userName()).append(":")
					.append(processingInstanceConfigService.userSecurity()).toString();
			byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
			String authHeader = "Basic " + encodedAuth;
			post.addHeader("Authorization", authHeader);

			if (headers != null) {
				List<NameValuePair> header = splitHeader(headers);
				for (NameValuePair nvp : header) {
					post.addHeader(nvp.getName(), nvp.getValue());
				}
			}
			if (body != null) {
				post.setEntity(new StringEntity(body));
			} else {
				List<NameValuePair> params = splitQuery(new URL(url));
				post.setEntity(new UrlEncodedFormEntity(params, "UTF-8"));
			}
			HttpResponse response = httpclient.execute(post);
			int statusCode = response.getStatusLine().getStatusCode();
			if (statusCode == 200) {
				HttpEntity entity = response.getEntity();
				String responseString = EntityUtils.toString(entity, "UTF-8");
				log.debug("post data to processing instance response : {}", responseString);
				return responseString;
			} else {
				log.error("error in getting response response from processing instance with status code : {}",
						statusCode);
				throw new Exception("error in POST call");
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != post) {
				post.completed();
				post.releaseConnection();
			}
		}
		return null;
	}

	private List<NameValuePair> splitQuery(URL url) throws UnsupportedEncodingException {
		Map<String, String> query_pairs = new LinkedHashMap<String, String>();
		String query = url.getQuery();
		log.debug("query : {}", query);

		if (query != null) {
			String[] pairs = query.split("&");
			for (String pair : pairs) {
				int idx = pair.indexOf("=");
				query_pairs.put(URLDecoder.decode(pair.substring(0, idx), "UTF-8"),
						URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
			}
		}
		List<NameValuePair> nvpList = new ArrayList<>(query_pairs.size());
		for (Map.Entry<String, String> entry : query_pairs.entrySet()) {
			nvpList.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
		}
		return nvpList;
	}

	public List<NameValuePair> splitHeader(String headers) throws UnsupportedEncodingException {
		Map<String, String> query_pairs = new LinkedHashMap<String, String>();
		String[] pairs = headers.split("&");
		for (String pair : pairs) {
			int idx = pair.indexOf("=");
			query_pairs.put(URLDecoder.decode(pair.substring(0, idx), "UTF-8"),
					URLDecoder.decode(pair.substring(idx + 1), "UTF-8"));
		}
		List<NameValuePair> nvpList = new ArrayList<>(query_pairs.size());
		for (Map.Entry<String, String> entry : query_pairs.entrySet()) {
			nvpList.add(new BasicNameValuePair(entry.getKey(), entry.getValue()));
		}
		return nvpList;
	}
}