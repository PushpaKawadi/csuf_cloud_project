/**
 * @function letter_of_recommendation_lor_lor_copy.generated_CWID_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_CWID_valueCommit0 = function (scope) {
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
 * @function letter_of_recommendation_lor_lor_copy.generated_textdraw1605570976303_init0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_textdraw1605570976303_init0 = function (scope) {
    with(this) {
        with(scope) {
            this.visible = false;
        }
	}
}
/**
 * @function letter_of_recommendation_lor_lor_copy.generated_SupportingDoc1_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_SupportingDoc1_valueCommit0 = function (scope) {
    with(this) {
        with(scope) {
            var filePath = SupportingDoc1.fileAttachment.value;
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
doc1.value = SupportingDoc1.fileAttachment.value;
console.log("doc1 file name : " + doc1.value);
        }
	}
}
/**
 * @function letter_of_recommendation_lor_lor_copy.generated_SupportingDoc2_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_SupportingDoc2_valueCommit0 = function (scope) {
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
doc2.value = SupportingDoc2.fileAttachment.value;
console.log("doc2 file name : " + doc2.value);
        }
	}
}
/**
 * @function letter_of_recommendation_lor_lor_copy.generated_SupportingDoc3_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_SupportingDoc3_valueCommit0 = function (scope) {
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
doc3.value = SupportingDoc3.fileAttachment.value;
console.log("doc3 file name : " + doc3.value);
        }
	}
}
/**
 * @function letter_of_recommendation_lor_lor_copy.generated_SupportingDoc4_valueCommit0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_SupportingDoc4_valueCommit0 = function (scope) {
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
doc4.value = SupportingDoc4.fileAttachment.value;
console.log("doc4 file name : " + doc4.value);
        }
	}
}
/**
 * @function letter_of_recommendation_lor_lor_copy.generated_submit1604987192821_click0
 * @this currentComponent
 * @param {scope} scope in which code inside function will be executed.
 */
letter_of_recommendation_lor_lor_copy.generated_submit1604987192821_click0 = function (scope) {
    with(this) {
        with(scope) {
            
  
guideBridge.submit();



        }
	}
}
