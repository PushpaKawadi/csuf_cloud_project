/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_CWID_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var pattern = /^\d{9}$/;
var result = pattern.test(this.value);
if(result !== true){      
   
  	showErrorModal("Alert!","Please enter a valid CWID, should be of 9 digits");	
}
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_textdraw1605570976303_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_textdraw1605570976303_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_LORDueDate_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_LORDueDate_init0 = function (scope) {
    with(this) {
        with(scope) {
            var dateString = new Date().toLocaleString("en-US", {
                timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
            }).replace(/[^ -~]/g, '');
debugger;
var dateObject = new Date(dateString);
var curyear = dateObject.getFullYear();
var curyearMonth = dateObject.getMonth() + 2;
var curyearDay = dateObject.getDate();
var d = (curyear + "-"+curyearMonth+"-"+ curyearDay);
LORDueDate.value = d;
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = SupportingDoc1.fileAttachment.value;
//alert("filePath: " + filePath);
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  SupportingDoc1.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  SupportingDoc1.fileAttachment.value = fname;
}
}
if(SupportingDoc1.fileAttachment.value !== null){
	doc1.value = SupportingDoc1.fileAttachment.value;
}
else{
    doc1.value = "";
}
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc2_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = SupportingDoc2.fileAttachment.value;
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  SupportingDoc2.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  SupportingDoc2.fileAttachment.value = fname;
}
}
if(SupportingDoc2.fileAttachment.value !== null){
	doc2.value = SupportingDoc2.fileAttachment.value;
}
else{
    doc2.value = "";
}
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc3_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = SupportingDoc3.fileAttachment.value;
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  SupportingDoc3.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  SupportingDoc3.fileAttachment.value = fname;
}
}
if(SupportingDoc3.fileAttachment.value !== null){
	doc3.value = SupportingDoc3.fileAttachment.value;
}
else{
    doc3.value = "";
}
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_SupportingDoc4_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = SupportingDoc4.fileAttachment.value;
var flag = 0;
if(flag === 0){
if(checkSupDocMimeType(filePath) === true){
  showErrorModal("Älert!","Only PDF, JPEG, PNG, JPG, TIF, TIFF files are allowed");
  SupportingDoc4.fileAttachment.value = null; 
  flag = 1;
}else{
  flag = 0;
}
}
if(flag === 0){
var fname = replaceSplCharInFileName(filePath);
if(fname !== false){
  SupportingDoc4.fileAttachment.value = fname;
}
}
if(SupportingDoc4.fileAttachment.value !== null){
	doc4.value = SupportingDoc4.fileAttachment.value;
}
else{
    doc4.value = "";
}
        }
	}
}
/**
 * @function letter_of_recommendation_lor_letter_of_recommendation.generated_submit1604987192821_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_letter_of_recommendation.generated_submit1604987192821_click0 = function (scope) {
    with(this) {
        with(scope) {
            /*if(SupportingDoc3.fileAttachment.value != null){
	doc3.value = SupportingDoc3.fileAttachment.value;
}
else{
    doc3.value = "";
}

if(SupportingDoc4.fileAttachment.value != null){
	doc4.value = SupportingDoc4.fileAttachment.value;
}
else{
    doc4.value = "";
}*/
  
guideBridge.submit();



        }
	}
}
