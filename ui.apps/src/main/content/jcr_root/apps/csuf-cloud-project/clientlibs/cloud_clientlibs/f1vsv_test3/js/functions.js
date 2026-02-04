/**
 * @function f1vsv_test3.generated_guideRootPanel_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_guideRootPanel_init0 = function (scope) {
    with(this) {
        with(scope) {
             var arr1 = [{"COLLEGE":"10246", "CSU_SCO_Agency":"242", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kstang", "DEPTID":"10225", "CSU_Unit":"112", "EmailID":"kstang@gmail.com"}];
College1.value = arr1[0].COLLEGE;
agency.value = arr1[0].CSU_SCO_Agency;
deleteflag.value = arr1[0].DELETE_FLG; 
fieldvalue.value = arr1[0].Field_Value;
userid.value = arr1[0].USER_ID; 
deptid.value = arr1[0].DEPTID;
unit.value = arr1[0].CSU_Unit;
email.value = arr1[0].EmailID;

        }
	}
}
/**
 * @function f1vsv_test3.generated_guideRootPanel_init1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_guideRootPanel_init1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
var arr2= [{"COLLEGE":"10246", "CSU_SCO_Agency":"242", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kstang", "DEPTID":"10225", "CSU_Unit":"112", "EmailID":"kstang@gmail.com"}, {"COLLEGE":"10245", "CSU_SCO_Agency":"241", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kst", "DEPTID":"10285", "CSU_Unit":"113", "EmailID":"abcd@gmail.com"}];
 for(var i = 0; i<arr2.length; i++){
  if(i<(arr2.length-1)){
    DynamicTable.Row2.instanceManager.addInstance(true);
  } 
   DynamicTable.Row2.instanceManager.instances[i].college2.value = arr2[i].COLLEGE;
   DynamicTable.Row2.instanceManager.instances[i].agency2.value = arr2[i].CSU_SCO_Agency;
   DynamicTable.Row2.instanceManager.instances[i].delete2.value = arr2[i].DELETE_FLG; 
   DynamicTable.Row2.instanceManager.instances[i].field2.value = arr2[i].Field_Value;
   DynamicTable.Row2.instanceManager.instances[i].userid2.value = arr2[i].USER_ID; 
   DynamicTable.Row2.instanceManager.instances[i].deptid2.value = arr2[i].DEPTID; 
   DynamicTable.Row2.instanceManager.instances[i].unit2.value = arr2[i].CSU_Unit; 
   DynamicTable.Row2.instanceManager.instances[i].email2.value = arr2[i].EmailID;
}






/* var arr2= [{"name":"xyz", "class":"10", "sub":"english"}, {"name":"xy", "class":"1", "sub":"maths"}]; 
for(var i=0; i<arr2.length; i++){
  if(i<(arr2.length-1)){
   Row1.instanceManager.addInstance(true);
  }
  Row1.instanceManager.instances[i].TF.value = arr2[i].name;
  Row1.instanceManager.instances[i].tableItem12.value = arr2[i].class;
} */

        }
	}
}
/**
 * @function f1vsv_test3.generated_guideRootPanel_init2
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_guideRootPanel_init2 = function (scope) {
    with(this) {
        with(scope) {
            //debugger; 
/*var typeOfForm = getUrlParameters('formType');
    if (typeOfForm == "Type-1") {
        formType.value = "Type-1";
        StudentInformation.visible = true;
        Instructions.visible = false;
        coursename.value= "CSE";
        courseId.value = "123";
        
       } else if (typeOfForm == "Type-2") {
        formType.value = "Type-2";
         StudentInformation.visible = false;
        Instructions.visible = true;
        coursename.value= "EEE";
        courseId.value = "124";
       } else {*/

        var modal = document.getElementById("secondModal");
        var span = document.getElementsByClassName("secondClose")[0];
        modal.style.display = "block";
        span.onclick = function() {
          debugger;
            if ((document.getElementById("secondButton1").checked === false) && (document.getElementById("secondButton2").checked === false)) {
                modal.style.display = "block";
                showErrorModal("Alert!", "Please select the form type");
            } else {
                modal.style.display = "none";
            }
        }; 
          document.getElementById("secondButton1").onclick = function() {
            debugger;
            modal.style.display = "none";
           // formType.value = "Type-1";
            
           StudentInformation.visible = true;
        Instructions.visible = false;
        coursename.value= "CSE";
        courseId.value = "123";
          };
        document.getElementById("secondButton2").onclick = function() {
          debugger;
            modal.style.display = "none";
        StudentInformation.visible = false;
        Instructions.visible = true;
        coursename.value= "EEE";
        courseId.value = "124"; 
        }; 
       





        }
	}
}
/**
 * @function f1vsv_test3.generated_courseadd_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_courseadd_click0 = function (scope) {
    with(this) {
        with(scope) {
            if((coursename.value !==null)&& (type.value !==null)&&(courseId.value !==null)){
  sectionA.instanceManager.addInstance();
}else{
  showErrorModal("Alert !", "Enter the record before adding a new row");
}
        }
	}
}
/**
 * @function f1vsv_test3.generated_Remove_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_Remove_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;	
var panelCount = sectionA.instanceManager.instanceCount;
if( panelCount > 1){
  sectionA.instanceManager.removeInstance(sectionA.instanceManager.instanceCount - 1);
}
 RemoveRecordFlag.value = "1";
        }
	}
}
/**
 * @function f1vsv_test3.generated_CB_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_CB_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            if(this.value == 1){
  Name.value = firstName.value + " " + lastName.value; 
  Sign.value = firstName.value;
  CWID1.value = cwid.value;
  Date.value = Date_1.value;
  
}
        }
	}
}
/**
 * @function f1vsv_test3.generated_button1_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_button1_click0 = function (scope) {
    with(this) {
        with(scope) {
                        debugger;
var arr3= [{"COLLEGE":"10246", "CSU_SCO_Agency":"242", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kstang", "DEPTID":"10225", "CSU_Unit":"112", "EmailID":"kstang@gmail.com"}, {"COLLEGE":"10245", "CSU_SCO_Agency":"241", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kst", "DEPTID":"10285", "CSU_Unit":"113", "EmailID":"abcd@gmail.com"}];


            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (arr3.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (arr3.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                debugger;
                var col = [];
                col.push("COLLEGE");
                col.push("CSU_SCO_Agency");
              col.push("DELETE_FLG"); 
              col.push("Field_Value");
              col.push("USER_ID"); 
              col.push("DEPTID"); 
              col.push("CSU_Unit"); 
              col.push("EmailID");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "COLLEGE","CSU_SCO_Agency ","DELETE_FLG ", "Field_Value ","USER_ID ","DEPTID ","CSU_Unit ","EmailID "];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");
              
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < arr3.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "cb");
                    button.id = "cbtn";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = arr3[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                //divContainer.innerHTML = "";
              if(comments.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }             
                var footerModal = document.getElementById("modal_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = arr3[n].COLLEGE;
                  }else{
                   result = result+","+arr3[n].COLLEGE;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               comments.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("cb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
             };

/*error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}*/


  

        }
	}
}
/**
 * @function f1vsv_test3.generated_button1_click1
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_button1_click1 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
if (StageIndicator.value === null){
    var appResult = [];
    var gifModal = document.getElementById('gifModal');
                    gifModal.style.display = "block";
                    var cwidVal = CWID.value;
    if (EmployeeName.value !== null) {
        $.ajax({
            type: 'GET',
            url: "/bin/getTestTwoData",
            data: {
                action: "TEST_SEARCH_DATA",
                firstName: EmployeeName.value
            },
            dataType: 'json',
            success: function(myresponse) {
               var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (myresponse.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (myresponse.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                debugger;
                var col = [];
                col.push("EMPLID");
                col.push("FIRST_NAME");
                col.push("LAST_NAME"); 
                col.push("DEPTID");
              
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "EMPLID","FIRST_NAME ","LAST_NAME ", "DEPTID "];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");
              
                var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };
                var cell1 = tr.insertCell(-1);
                cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < myresponse.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "checkbox";
                    button.setAttribute("class", "cb");
                    button.id = "cbtn";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = myresponse[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                //divContainer.innerHTML = "";
              if(comments.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }             
                var footerModal = document.getElementById("modal_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = myresponse[n].EMPLID;
                  }else{
                   result = result+","+myresponse[n].EMPLID;
                  }
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               comments.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("cb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
             };
          }
          });
  }
}
/*error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}*/


  

        }
	}
}
/**
 * @function f1vsv_test3.generated_button2_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_button2_click0 = function (scope) {
    with(this) {
        with(scope) {
             debugger;
var arr3= [{"COLLEGE":"10246", "CSU_SCO_Agency":"242", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kstang", "DEPTID":"10225", "CSU_Unit":"112", "EmailID":"kstang@gmail.com"}, {"COLLEGE":"10245", "CSU_SCO_Agency":"241", "DELETE_FLG":"N", "Field_Value":"EMP_AP_OFF", "USER_ID":"kst", "DEPTID":"10285", "CSU_Unit":"113", "EmailID":"abcd@gmail.com"}];


            var modal = document.getElementById('myModal');
            var span = document.getElementsByClassName("close")[0];
            
            if (arr3.length === 0) {
            
                gifModal.style.display = "none";
                modal.style.display = "none";
               
            } else if (arr3.length > 0) {
                gifModal.style.display = "none";
                modal.style.display = "block";
                //populate Hidden Fields
                debugger;
                var col = [];
                col.push("COLLEGE");
                col.push("CSU_SCO_Agency");
              col.push("DELETE_FLG"); 
              col.push("Field_Value");
              col.push("USER_ID"); 
              col.push("DEPTID"); 
              col.push("CSU_Unit"); 
              col.push("EmailID");
                
                
                var table = document.createElement("table");
                table.id = "tb";
                var tr = table.insertRow(-1);
                var headings = ["", "COLLEGE","CSU_SCO_Agency ","DELETE_FLG ", "Field_Value ","USER_ID ","DEPTID ","CSU_Unit ","EmailID "];
                for (var j = 0; j < headings.length; j++) {
                    var th = document.createElement("th");
                    th.innerHTML = headings[j];
                    tr.appendChild(th);
                }
                tr = table.insertRow(-1);
                var rButtons = document.getElementsByClassName("cb");
              
                /*var selectAllButton = document.createElement("input");
                selectAllButton.type = "button";
                selectAllButton.setAttribute("class", "selectAllBtn");
                selectAllButton.value = "Select All";
                
                selectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = true;  
                }
                };*/
                var cell1 = tr.insertCell(-1);
                //cell1.appendChild(selectAllButton);
                var unselectAllButton = document.createElement("input");
                unselectAllButton.type = "button";
                unselectAllButton.setAttribute("class", "unSelectAllBtn");
                unselectAllButton.value = "Unselect All";
                unselectAllButton.onclick = function(event) {
                for(n=0;n<rButtons.length;n++){
                rButtons[n].checked = false;  
                }
                };
                var cell2 = tr.insertCell(-1);
                cell2.appendChild(unselectAllButton);
                    
                for (var k = 0; k < arr3.length; k++) {
                    tr = table.insertRow(-1);
                    // tr.appendChild('<td><input type = "radio"  class = "rb" name="group" value = ""> </td>');
                    var button = document.createElement("input");
                    button.type = "radio";
                    button.setAttribute("class", "cb");
                    button.id = "cbtn";
                    button.name = "group";
                    button.value = "";                    
                    var tabCell1 = tr.insertCell(-1);
                    tabCell1.appendChild(button);
                    for (var l = 0; l < col.length; l++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = arr3[k][col[l]];
                    }
                }
                var divContainer = document.getElementById("showData");
                //divContainer.innerHTML = "";
              if(comments2.value === null){
                divContainer.innerHTML = "";
                divContainer.appendChild(table);  
              }             
                var footerModal = document.getElementById("modal_footer");
              
                var okButton = document.createElement("input");
                okButton.type = "button";
                okButton.setAttribute("class", "okBtn");
                okButton.value = "OK";
                okButton.onclick = function(event) {
                    
              var n;
              var rButtonStatus = false;
              var result = "";
              
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === true){                 
                  if(result === ""){
                   result = arr3[n].COLLEGE+","+arr3[n].CSU_SCO_Agency+","+arr3[n].DELETE_FLG+","+arr3[n].Field_Value+","+arr3[n].USER_ID+","+arr3[n].DEPTID+","+arr3[n].CSU_Unit+","+arr3[n].EmailID;
                  // result = arr3[n].CSU_SCO_Agency;
                  }/*else{
                   result = result+","+arr3[n].COLLEGE;
                  }*/
                rButtonStatus = true;
                }
              }
               //DepReportingAccess.value = result;
               comments2.value = result;
                //  CSU_SCO_Agency.value = result;
              if(rButtonStatus === false){
                showErrorModal("Alert!","Please select the department");
                modal.style.display = "block";
              }else {               
                
                 gifModal.style.display = "none";
                modal.style.display = "none";

                    }
                };
                
                footerModal.appendChild(okButton);
               
            } else {
                showErrorModal("Alert!","No matching records found");
                gifModal.style.display = "none";
            }
           
             span.onclick = function() {
            
              var n;
              var rButtonStatus;
             
              var rButtons = document.getElementsByClassName("cb");
              for(n=0;n<rButtons.length;n++){
                if(rButtons[n].checked === false){
                  rButtonStatus = false;
                }else{
                  rButtonStatus = true;
                  break;
                }
              }
              if(rButtonStatus === false){
                gifModal.style.display = "none";
               //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }else{
                gifModal.style.display = "none";
                //showErrorModal("Alert!","Please select the department");
                modal.style.display = "none";
              }             
                
             };

/*error: function(error){
showErrorModal("Alert!","error block="+error);
  //loadingText.visible = false; 
}*/


  
        }
	}
}
/**
 * @function f1vsv_test3.generated_generateDOR_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_generateDOR_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;

    getPdf();


function getPdf() {
    console.log("in view pdf");
   debugger;
    window.guideBridge.getDataXML({
        success: function(result) {
           console.log("in view pdf="+result.data);
            var jsonData = new FormData();
            jsonData.append('data', result.data.replace(/&amp;/g, 'and'));
            jsonData.append('formPath', '/content/forms/af/f1vsv/test3');
            jsonData.append('fileName', lastName.value);          
            console.log("jsonData: " + jsonData);
            var xhr = new XMLHttpRequest();
            xhr.open('POST', '/bin/getDoR', true);
            xhr.responseType = 'blob';	
            xhr.send(jsonData);	
            xhr.onload  = function () {
                if (this.status === 200) {
                    var filename = "";
                    var disposition = xhr.getResponseHeader('Content-Disposition');
                    if (disposition && disposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(disposition);
                        if (matches !== null && matches[1]) filename = matches[1].replace(/['"]/g, '');
                    }
                    var type = xhr.getResponseHeader('Content-Type');

                    var blob;
                    if (typeof File === 'function') {
                        try {
                            blob = new File([this.response], filename, { type: type });
                        } catch (e) { /* Edge */ }
                    }
                    if (typeof blob === 'undefined') {
                        blob = new Blob([this.response], { type: type });
                    }

                    if (typeof window.navigator.msSaveBlob !== 'undefined') {
                        // IE workaround for "HTML7007: One or more blob URLs were revoked by closing the blob for which they were created. These URLs will no longer resolve as the data backing the URL has been freed."
                        window.navigator.msSaveBlob(blob, filename);
                    } else {
                        var URL = window.URL || window.webkitURL;
                        var downloadUrl = URL.createObjectURL(blob);

                        if (filename) {
                            // use HTML5 a[download] attribute to specify filename
                            var a = document.createElement("a");
                            // safari doesn't support this yet
                            if (typeof a.download === 'undefined') {
                                window.location = downloadUrl;
                            } else {
                                a.href = downloadUrl;
                                a.download = filename;
                                document.body.appendChild(a);								
                                a.click();
                            }
                        } else {
                            window.location = downloadUrl;
                        }
                        setTimeout(function () { URL.revokeObjectURL(downloadUrl); }, 100); // cleanup
                    }
                }
            };	      
        },
        error: function(guideResultObject) {
            console.log("got error");
        },
        guideState: null,
        boundData: true
    });
}
        }
	}
}
/**
 * @function f1vsv_test3.generated_submit1575264176703_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
f1vsv_test3.generated_submit1575264176703_click0 = function (scope) {
    with(this) {
        with(scope) {
            debugger;
	if(cwid.value === null){
       showErrorModal("Alert !", "Please enter the CWID");
   		 guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].cwid[0]");
    }

   else if(firstName.value === null) {
 		 showErrorModal("Alert !", "Please enter the First Name");
   		 guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].firstName[0]");
     
    } else if (lastName.value === null){
      	 showErrorModal("Alert !", "Please enter the last Name");
    	 guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].lastName[0]");
 		 
    }else if(financialAidYear.value === null){
 		showErrorModal("Alert !", "Please select the Year");
    	 guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].StudentInformation[0].financialAidYear[0]");
    }
	else if(CheckBox1.value === null){
  		showErrorModal("Alert !", "Please read the instructions carefully!!");
  		guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Instructions[0].CheckBox1[0]");
      
	}else if((Sign.value === null) || (CWID1.value === null) || (Name.value === null) || (Date === null)){
      showErrorModal("Alert !", "Please fill all the details!!");
      guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Certification[0].Sign[0]");
      
    }else if(CB.value === null){
      showErrorModal("Alert !", "Please click on the checkbox!!");
      guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].MainPanel[0].Certification[0].CB[0]");
    }
else{
  alert("Successfully submitted");
}
        }
	}
}
