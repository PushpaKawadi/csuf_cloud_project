function getParticipant() {
var workflowData = workItem.getWorkflowData();
if (workflowData.getPayloadType() == "JCR_PATH") { 
var path = workflowData.getPayload().toString(); 
var getCwid = workflowData.getMetaDataMap().get("CWID");
// log.info("Second:"+InstructorID2);
              return getCwid;
            }
}
