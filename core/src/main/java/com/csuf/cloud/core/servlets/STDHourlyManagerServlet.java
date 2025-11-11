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
                "sling.servlet.paths=" + "/bin/getHourlyINTManager",
                "sling.servlet.methods=GET"
        }
)
public class STDHourlyManagerServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws IOException {

        //http://erpaempn65dev:4502/bin/getHourlyINTManager?empId=899752547&union_cd=M80&deptId=10147

        String empId = request.getParameter("empId");
        String union_cd = request.getParameter("union_cd");
        String deptId = request.getParameter("deptId");


        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // ✅ Create JSON Array
        JSONArray employees = new JSONArray();

        // --- First record ---

        JSONObject emp1 = new JSONObject();
        emp1.put("SupervisorTitle", "VP, Admin & Finance/CFO");
        emp1.put("MANAGER_USERID", "yjayaram");
        emp1.put("MANAGER_EMAIL_ID", "pushpa.kawadi@thoughtfocus.com");
        emp1.put("SupervisorName", "Pushpa Kawadi");

        employees.put(emp1);


        // ✅ Write JSON response
        response.getWriter().write(employees.toString(2)); // pretty print with indentation
    }
}
