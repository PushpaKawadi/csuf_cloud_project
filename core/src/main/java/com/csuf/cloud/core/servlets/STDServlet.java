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
                "sling.servlet.paths=" + "/bin/chrsIDUpdateServlet",
                "sling.servlet.methods=GET"
        }
)
public class STDServlet extends SlingAllMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws IOException {

       /* http://erpaempn65dev:4502/bin/chrsIDUpdateServlet?action=STD_682_OVERTIME_USER_LOOKUP&userId=hramirez*/
        String userId = request.getParameter("userId");
        String action = request.getParameter("action");


        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        // ✅ Create JSON Array
        JSONArray employees = new JSONArray();

        // --- First record ---
        JSONObject emp1 = new JSONObject();
        emp1.put("First_Name", "Hector");
        emp1.put("Middle_Name", "A");
        emp1.put("SCOPositionNum", "242-756-3312-001");
        emp1.put("Last_Name", "Ramirez");
        emp1.put("CSU_SCO_AGENCY", "242");
        emp1.put("FUL_DIVISION", "10238");
        emp1.put("UNION_CD", "M80");
        emp1.put("EMPL_RCD", "0");
        emp1.put("DEPTID", "10147");
        emp1.put("CSU_UNIT", "756");
        emp1.put("CHRS_ID", "100030476");
        emp1.put("EMPLID", "899752547");

        // --- Second record ---
        JSONObject emp2 = new JSONObject();
        emp2.put("First_Name", "Hector");
        emp2.put("Middle_Name", "A");
        emp2.put("SCOPositionNum", "242-197-2358-002");
        emp2.put("Last_Name", "Ramirez");
        emp2.put("CSU_SCO_AGENCY", "242");
        emp2.put("FUL_DIVISION", "10237");
        emp2.put("UNION_CD", "R03");
        emp2.put("EMPL_RCD", "1");
        emp2.put("DEPTID", "10160");
        emp2.put("CSU_UNIT", "197");
        emp2.put("CHRS_ID", "100030476");
        emp2.put("EMPLID", "899752547");

        // Add to array
        employees.put(emp1);
        employees.put(emp2);

        // ✅ Write JSON response
        response.getWriter().write(employees.toString(2)); // pretty print with indentation
    }
}
