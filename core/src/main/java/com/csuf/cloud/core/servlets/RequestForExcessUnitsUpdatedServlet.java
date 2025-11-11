package com.csuf.cloud.core.servlets;

import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.servlets.SlingSafeMethodsServlet;
import org.osgi.service.component.annotations.Component;
import org.osgi.framework.Constants;
import javax.servlet.Servlet;
import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;

@Component(service = Servlet.class, property = { Constants.SERVICE_DESCRIPTION + "=Get Request for Excess Units Updated Servlet",
        "sling.servlet.methods=" + HttpConstants.METHOD_GET, "sling.servlet.paths=" + "/bin/getExcessUnitDetails" })

public class RequestForExcessUnitsUpdatedServlet extends SlingSafeMethodsServlet {

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response)
            throws IOException {
        String userId = request.getParameter("userID");
        String action = request.getParameter("action");

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        JSONArray jsonArray = new JSONArray();

        JSONObject student = new JSONObject();
        student.put("ACAD_CAREER", "PBAC");
        student.put("LOA_FLAG", "Y");
        student.put("CHAIR_EMAIL", "pushpa.kawadi@thoughtfocus.com");
        student.put("POSTAL", "92831");
        student.put("CHAIR_USERID", "ragoldberg");
        student.put("STATE", "CA");
        student.put("LAST_NAME", "Tang");
        student.put("FIRST_NAME", "Jieming");
        student.put("PROGRAMS", "Music (Performance),CRT.");
        student.put("USERID", "jieming.tang");
        student.put("DEPTID", "10171");
        student.put("ADMIT_TERM", "2247");
        student.put("ADDRESS1", "1407 Concord Avenue");
        student.put("EIP_FLG", "N");
        student.put("EMPLID", "885197947");
        student.put("ADDRESS2", " ");
        student.put("STUDENT_ID", "885197947");
        student.put("TERM_DESCR", "Fall 2024");
        student.put("NAME", "Tang,Jieming");
        student.put("PREF_EMAIL", "pushpa.kawadi@thoughtfocus.com");
        student.put("CELL_PHONE", "216/849-5233");
        student.put("CHAIR_EMPLID", "885130245");
        student.put("CHAIR_NAME", "Randall Goldberg");
        student.put("CITY", "Fullerton");
        student.put("DEPTNAME", "School of Music");
        student.put("checkBox", 1);
        student.put("ACAD_PROG", "PBCRT");
        student.put("DEGREE", "CRT");
        student.put("INTERNATIONAL_FLAG", "Y");


        JSONObject student1 = new JSONObject();

        student1.put("ACAD_CAREER","UGRD");
        student1.put("LOA_FLAG", "Y");
        student1.put("CHAIR_EMAIL","zjohnson@FULLERTON.EDU");
        student1.put("POSTAL","92832-2514");
        student1.put("CHAIR_USERID","zjohnson");
        student1.put("STATE","CA");
        student1.put("LAST_NAME","Flores");
        student1.put("FIRST_NAME","Osvaldo");
        student1.put("PROGRAMS", "Communication Studies, Communication Studies Concentration, BA.");
        student1.put("USERID","o.flores");
        student1.put("DEPTID","10211");
        student1.put("ADMIT_TERM","2243");
        student1.put("ADDRESS1","512 S Newell Ave");
        student1.put("EIP_FLG","N");
        student1.put("EMPLID","800511552");
        student1.put("ADDRESS2","aa");
        student1.put("student1_ID","800511552");
        student1.put("TERM_DESCR","Spring 2024");
        student1.put("NAME","Flores,Osvaldo");
        student1.put("PREF_EMAIL","o.flores@csu.fullerton.edu");
        student1.put("CELL_PHONE","949/887-1116");
        student1.put("CHAIR_EMPLID","890317548");
        student1.put("CHAIR_NAME","Zachary Johnson");
        student1.put("CITY","Fullerton");
        student1.put("DEPTNAME","Human Communication Studies");
        student1.put("checkBox",2);
        student1.put("ACAD_PROG","UGD");
        student1.put("DEGREE","BA");
        student1.put("INTERNATIONAL_FLAG","N");

        jsonArray.put(student1);
        jsonArray.put(student);

        response.getWriter().write(jsonArray.toString());
    }
}