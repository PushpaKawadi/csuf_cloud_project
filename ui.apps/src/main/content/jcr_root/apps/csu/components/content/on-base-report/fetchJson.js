
use(function() {
    // Directly define the JSON array here
    /* var jsonArray = [
         {
             "sNo": 1,
             "id": "12345",
             "formId": "A100",
             "fName": "John",
             "lName": "Doe"
         },
         {
             "sNo": 2,
             "id": "67890",
             "formId": "B200",
             "fName": "Jane",
             "lName": "Smith"
         }
     ];*/
    var jsonArray = [{
        "sNo": 1,
        "cwid": "890214251",
        "fName": "Mark",
        "lName": "Ghoubrial",
        "formId": "1365129",
        "workflowStartTime": {
            "display": "5/7/2024 10:32:31 AM",
            "timestamp": 1715146351503
        },
        "stepStartTime": {
            "display": "5/7/2024 11:52:43 AM",
            "timestamp": 1715146363410
        },
        "stepInitiator": "mark.ghoubrial",
        "handlerID": "1211881",
        "workflowInstanceId": "/var/workflow/instances/server0/2024-04-28/dq-appeal-form_63",
        "workflowModelName": "Course Withdrawal",
        "witemId": "/var/workflow/instances/server0/2024-04-28/dq-appeal-form_63/workItems/node8_var_workflow_instances_server0_2024-04-28_dq-appeal-form_63"
    }, {
        "sNo": 2,
        "cwid": "815241209",
        "fName": "Anna",
        "lName": "Kuntsevich",
        "formId": "1365150",
        "workflowStartTime": {
            "display": "5/9/2024 09:00:31 AM",
            "timestamp": 1715146351503
        },
        "stepStartTime": {
            "display": "5/9/2024 03:45:43 PM",
            "timestamp": 1715146363410
        },
        "stepInitiator": "akuntsevich",
        "handlerID": "1211886",
        "workflowInstanceId": "/var/workflow/instances/server0/2024-04-28/dq-appeal-form_63",
        "workflowModelName": "Course Withdrawal",
        "witemId": "/var/workflow/instances/server0/2024-04-28/dq-appeal-form_63/workItems/node8_var_workflow_instances_server0_2024-04-28_dq-appeal-form_63"
    }];

    return {
        populationData: jsonArray
    };
});