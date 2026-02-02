package com.csuf.cloud.core.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.Map;
import javax.servlet.Servlet;
import javax.servlet.ServletException;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.HttpMultipartMode;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.csuf.cloud.core.services.InboxItemService;
import com.csuf.cloud.core.services.ProcessingInstanceConfigService;

@Component(service = Servlet.class, property = { "sling.servlet.methods=" + HttpConstants.METHOD_GET,
		"sling.servlet.paths=" + "/bin/delegateTaskOnProcessingInstance" })
public class DelegateTaskOnProcessingInstanceServlet extends SlingAllMethodsServlet {

	private static final long serialVersionUID = 2598426539166789515L;

	protected final Logger log = LoggerFactory.getLogger(this.getClass());

	private static final String DELEGATE_TASK_URL = "/bin/workflow/inbox";
	private static final String CSRF_TOKEN_URL = "/libs/granite/csrf/token.json";

	@Reference
	private ProcessingInstanceConfigService processingInstanceConfigService;

	@Reference
	private InboxItemService inboxService;

	@Override
	protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
			throws ServletException, IOException {
		doPost(request, response);
	}

	@Override
	protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
		log.debug("entered DelegateTaskOnProcessingInstanceServlet doPost method");
		HttpPost httpPost = null;
		try (PrintWriter out = response.getWriter();) {
			final Map<String, RequestParameter[]> params = request.getRequestParameterMap();
			String cmd = null, status = null, _charset_ = null, item = null, delegateeText = "delegatee-",
					commentText = "comment-", user = null, comment = null;

			if (params.containsKey("cmd"))
				cmd = params.get("cmd")[0].toString();

			if (params.containsKey(":status"))
				status = params.get(":status")[0].toString();

			if (params.containsKey("_charset_"))
				_charset_ = params.get("_charset_")[0].toString();

			if (params.containsKey("item"))
				item = params.get("item")[0].toString().trim();

			if (StringUtils.isNotBlank(item) && params.containsKey(delegateeText.concat(item)))
				user = params.get(delegateeText.concat(item))[0].toString();

			if (StringUtils.isNotBlank(item) && params.containsKey(commentText.concat(item)))
				comment = params.get(commentText.concat(item))[0].toString();

			try (CloseableHttpClient client = HttpClients.createDefault();) {
				httpPost = new HttpPost(processingInstanceConfigService.processingUrl().concat(DELEGATE_TASK_URL));
				String loginTokenJson = inboxService.getResponseFromProcessingInstance(CSRF_TOKEN_URL);

				if (StringUtils.isNotBlank(loginTokenJson)) {
					JsonParser parser = new JsonParser();
					JsonObject json = parser.parse(loginTokenJson).getAsJsonObject();
					String loginToken = json.get("token").getAsString();
					httpPost.addHeader("CSRF-Token", loginToken);
				}

				String auth = new StringBuffer(processingInstanceConfigService.userName()).append(":")
						.append(processingInstanceConfigService.userSecurity()).toString();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(StandardCharsets.US_ASCII));
				String authHeader = "Basic " + new String(encodedAuth);
				httpPost.addHeader("Authorization", authHeader);

				MultipartEntityBuilder builder = MultipartEntityBuilder.create();
				builder.setMode(HttpMultipartMode.BROWSER_COMPATIBLE);
				builder.setContentType(ContentType.MULTIPART_FORM_DATA);

				builder.addTextBody("cmd", cmd, ContentType.TEXT_PLAIN);
				builder.addTextBody("status", status, ContentType.TEXT_PLAIN);
				builder.addTextBody("_charset_", _charset_, ContentType.TEXT_PLAIN);
				builder.addTextBody("item", item, ContentType.TEXT_PLAIN);
				log.debug("delegate task on processing instance user : {}", user);
				
				if (StringUtils.isNotBlank(user))
					builder.addTextBody(delegateeText.concat(item), user, ContentType.TEXT_PLAIN);

				if (StringUtils.isNotBlank(comment))
					builder.addTextBody(commentText.concat(item), comment, ContentType.TEXT_PLAIN);

				HttpEntity multipart = builder.build();
				httpPost.setEntity(multipart);

				try (CloseableHttpResponse httpResponse = client.execute(httpPost);) {
					int statusCode = httpResponse.getStatusLine().getStatusCode();
					if (statusCode == 200) {
						HttpEntity entity = httpResponse.getEntity();
						String responseString = EntityUtils.toString(entity, "UTF-8");
						log.debug("delegate task on processing instance success response : {}", responseString);
						out.append("success");
					} else {
						log.error("error in getting response response from processing instance with status code : {}",
								statusCode);
						throw new Exception("error in POST call");
					}
				} 
			}
		} catch (Exception e) {
			log.error(Arrays.toString(e.getStackTrace()));
		} finally {
			if (null != httpPost) {
				httpPost.completed();
				httpPost.releaseConnection();
			}
		}
		log.debug("exit DelegateTaskOnProcessingInstanceServlet doPost method");
	}
}