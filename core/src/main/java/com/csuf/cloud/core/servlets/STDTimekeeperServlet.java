package com.csuf.cloud.core.servlets;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.json.JSONArray;
import org.json.JSONObject;
import org.osgi.service.component.annotations.Component;

import javax.servlet.Servlet;
import java.io.IOException;

@Component(
        service = {Servlet.class},
        property = {
                "sling.servlet.paths=" + "/bin/getTimekeeperData",
                "sling.servlet.methods=GET"
        }
)
public class STDTimekeeperServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws IOException {

        //http://erpaempn65dev:4502/bin/getTimekeeperData?deptId=10160&division=10237&agencyUnit=533&fieldVal=EMP_TK_PRI

        String agencyUnit = request.getParameter("agencyUnit");
        String division = request.getParameter("division");
        String deptId = request.getParameter("deptId");
        String fieldVal = request.getParameter("fieldVal");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // ✅ Create JSON Array
        JSONArray employees = new JSONArray();

        // --- First record ---
        JSONObject emp1 = new JSONObject();

        emp1.put("USERID", "yjayaram");
        emp1.put("EMAILID", "pushpa.kawadi@thoughtfocus.com");
        emp1.put("NAME", "Pushpa Kawadi");

        employees.put(emp1);


        // ✅ Write JSON response
        response.getWriter().write(employees.toString(2)); // pretty print with indentation
    }
}
