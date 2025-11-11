package com.adobe.fd.fp.util;

import com.adobe.fd.fp.exception.FormsPortalException;
import org.osgi.service.component.annotations.Component;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Base64;

@Component(service = FPRemoteOperations.class)
public abstract class FPRemoteOperations {

    // Fetch from environment variables or Cloud secrets
    private String getUserName() {
        return System.getenv("AEM_REMOTE_USER");
    }

    private String getPassword() {
        return System.getenv("AEM_REMOTE_PASSWORD");
    }

    private String getRemoteAuthorURL() {
        return System.getenv("AEM_REMOTE_URL");
    }

    private HttpClient getHttpClient() {
        return HttpClient.newBuilder()
                .version(HttpClient.Version.HTTP_1_1)
                .build();
    }

    private String basicAuthHeader() {
        String auth = getUserName() + ":" + getPassword();
        return "Basic " + Base64.getEncoder().encodeToString(auth.getBytes());
    }

    public byte[] getDataInternal(String url) throws FormsPortalException {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(getRemoteAuthorURL() + url))
                    .header("Authorization", basicAuthHeader())
                    .GET()
                    .build();

            HttpResponse<byte[]> response = getHttpClient().send(request, HttpResponse.BodyHandlers.ofByteArray());

            if (response.statusCode() == 200) {
                return response.body();
            } else {
                throw new FormsPortalException("Failed to fetch data. HTTP code: " + response.statusCode());
            }
        } catch (IOException | InterruptedException e) {
            throw new FormsPortalException(e);
        }
    }

    public String postData(String url, byte[] data, String nodePath) throws FormsPortalException {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(getRemoteAuthorURL() + url))
                    .header("Authorization", basicAuthHeader())
                    .header("Content-Type", "application/octet-stream")
                    .POST(HttpRequest.BodyPublishers.ofByteArray(data))
                    .build();

            HttpResponse<String> response = getHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200 || response.statusCode() == 201) {
                return response.body();
            } else {
                throw new FormsPortalException("Failed to post data. HTTP code: " + response.statusCode());
            }
        } catch (IOException | InterruptedException e) {
            throw new FormsPortalException(e);
        }
    }

    public boolean deleteDataInternal(String url) throws FormsPortalException {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(getRemoteAuthorURL() + url))
                    .header("Authorization", basicAuthHeader())
                    .DELETE()
                    .build();

            HttpResponse<String> response = getHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
            return response.statusCode() == 204;
        } catch (IOException | InterruptedException e) {
            throw new FormsPortalException(e);
        }
    }

    public String getJsonString(String url) throws FormsPortalException {
        try {
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(getRemoteAuthorURL() + url))
                    .header("Authorization", basicAuthHeader())
                    .GET()
                    .build();

            HttpResponse<String> response = getHttpClient().send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                return response.body();
            } else {
                throw new FormsPortalException("Failed to fetch JSON. HTTP code: " + response.statusCode());
            }
        } catch (IOException | InterruptedException e) {
            throw new FormsPortalException(e);
        }
    }
}
