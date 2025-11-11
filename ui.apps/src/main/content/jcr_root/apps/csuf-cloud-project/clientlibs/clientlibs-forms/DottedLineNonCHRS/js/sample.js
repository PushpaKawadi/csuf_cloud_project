function checkSupDocMimeType(filePath){
  
 var extension = filePath.substring(filePath.lastIndexOf(".")+1,filePath.length);
 extension = extension.toLowerCase();
 if(extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff"){ 
 //SupportingDoc1.fileAttachment.value = null;  
 return true;
 }else{
     return false;
}
}
function replaceSplCharInFileName(filePath){

 var format = /[`~*+:'?<>-|.,&{}#!@$%^=;\[\]\s()]/; 
 if(format.test(filePath) === true){
   var doc1NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g,'_'); 
 return doc1NewName;
 }else{
     return false;
}
}