package com.csuf.cloud.core.servlets;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@WebServlet("/connectOnPremServlet")
public class ConnectOnPremServlet extends HttpServlet {
	
	private final static Logger log = LoggerFactory.getLogger(ConnectOnPremServlet.class);
	private static final long serialVersionUID = 1L;


	@Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        setCors(resp);

        // incoming parameters
        String targetServletUrl = req.getParameter("targetServletUrl");   
        String jsonInput = getBody(req);            

        URL url = new URL(targetServletUrl);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();

        con.setRequestMethod("POST");
        con.setDoOutput(true);
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Accept", "application/json");

        // Send JSON to target servlet
        try (OutputStream os = con.getOutputStream()) {
            os.write(jsonInput.getBytes("UTF-8"));
        }

        // Read response from target servlet
        int status = con.getResponseCode();

        BufferedReader br = new BufferedReader(
                new InputStreamReader(
                        status > 299 ? con.getErrorStream() : con.getInputStream(),
                        "UTF-8"
                )
        );

        StringBuilder targetResponse = new StringBuilder();
        String line;
        while ((line = br.readLine()) != null) {
            targetResponse.append(line);
        }

        br.close();
        con.disconnect();

        // Return response back to AEM Cloud Form
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.getWriter().write(targetResponse.toString());
    }

    // Gets JSON body from request
    private String getBody(HttpServletRequest req) throws IOException {
        StringBuilder sb = new StringBuilder();
        BufferedReader reader = req.getReader();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        return sb.toString();
    }

    // CORS for AEM Cloud
    private void setCors(HttpServletResponse resp) {
        resp.setHeader("Access-Control-Allow-Origin", "*");
        resp.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        resp.setHeader("Access-Control-Allow-Headers", "Content-Type");
    }
}