function showErrorModal(errorHeading,errorMsg){
		var modal= document.getElementById("errorPopup");
    	var modalHeaderMsg = document.getElementById("modalText");
    	modalHeaderMsg.innerHTML = "";
    	modalHeaderMsg.innerHTML = errorHeading;
		//Body
		var para = document.getElementById("para");
		para.innerHTML = "";
		para.innerHTML = errorMsg;
		var footerModal = document.getElementById("errorPopup-footer");
		var okButton = document.createElement("input");
		okButton.type = "button";
		okButton.setAttribute("class", "okBtn");
		//okButton.id = "okBtn";
		okButton.value = "Ok";
		okButton.onclick = function(event) {
		modal.style.display = "none";                                  
		};
		footerModal.appendChild(okButton);
		modal.style.display = "block";
}


function getSelectedMonthDates(monthObt,yearObt){
var IncludedDay1 = "1/31/2021"; 
var IncludedDay2 = "7/31/2021"; 
var IncludedDay3 = "12/1/2021"; 
var IncludedDay4 = "0/0/0000"; 
var IncludedDay5 = "0/0/0000"; 
var IncludedDay6 = "0/0/0000"; 
var IncludedDay7 = "0/0/0000"; 
var IncludedDay8 = "0/0/0000"; 
var IncludedDay9 = "0/0/0000"; 
var IncludedDay10 = "0/0/0000"; 
var IncludedDay11 = "0/0/0000"; 
var IncludedDay12 = "0/0/0000"; 
var IncludedDay13 = "0/0/0000"; 
var IncludedDay14 = "0/0/0000"; 
var IncludedDay15 = "0/0/0000"; 

var Holiday1 = "1/1/2021"; 
var Holiday2 = "1/18/2021"; 
var Holiday3 = "2/15/2021"; 
var Holiday4 = "3/31/2021"; 
var Holiday5 = "5/25/2020"; 
var Holiday6 = "7/3/2020"; 
var Holiday7 = "9/7/2020"; 
var Holiday8 = "11/11/2020"; 
var Holiday9 = "11/26/2020"; 
var Holiday10 = "11/27/2020"; 
var Holiday11 = "12/25/2020"; 
var Holiday12 = "12/28/2020"; 
var Holiday13 = "12/29/2020"; 
var Holiday14 = "0/0/0000"; 
var Holiday15 = "0/0/0000"; 
var Holiday16 = "0/0/0000"; 
var Holiday17 = "0/0/0000"; 
var Holiday18 = "0/0/0000"; 
var Holiday19 = "0/0/0000"; 
var Holiday20 = "0/0/0000"; 
var Holiday21 = "0/0/0000"; 
var Holiday22 = "0/0/0000"; 
var Holiday23 = "0/0/0000"; 
var Holiday24 = "0/0/0000"; 
var Holiday25 = "0/0/0000"; 

var Closed1 = "12/30/2021"; 
var Closed2 = "12/31/2021"; 
var Closed3 = "0/0/0000"; 
var Closed4 = "0/0/0000"; 
var Closed5 = "0/0/0000"; 
var Closed6 = "0/0/0000"; 
var Closed7 = "0/0/0000"; 
var Closed8 = "0/0/0000"; 
var Closed9 = "0/0/0000"; 
var Closed10 = "0/0/0000"; 
var Closed11 = "0/0/0000"; 
var Closed12 = "0/0/0000"; 
var Closed13 = "0/0/0000"; 
var Closed14 = "0/0/0000"; 
var Closed15 = "0/0/0000"; 
var Closed16 = "0/0/0000"; 
var Closed17 = "0/0/0000"; 
var Closed18 = "0/0/0000"; 
var Closed19 = "0/0/0000"; 
var Closed20 = "0/0/0000"; 
var Closed21 = "0/0/0000"; 
var Closed22 = "0/0/0000"; 
var Closed23 = "0/0/0000"; 
var Closed24 = "0/0/0000"; 
var Closed25 = "0/0/0000"; 
debugger;
var key1 = "";
var key2 = "";
var key3 = "";
var key4 = "";
var key5 = "";
var key6 = "";
var key7 = "";
var key8 = "";
var key9 = "";
var key10 = "";
var key11= "";
var key12= "";
var key13 = "";
var key14 = "";
var key15 = "";
var key16= "";
var key17 = "";
var key18 = "";
var key19 = "";
var key20 = "";
var key21 = "";
var key22 = "";
var key23= "";
var key24= "";
var key25= "";
var key26= "";
var key27= "";
var key28= "";
var key29= "";
var key30= "";
var key31= "";
var key32= "";
var key33= "";
var wkDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var results = [];
if(monthObt == 1){
var LastMonthDay1 = new Date((yearObt-1), 12 , 0).getDate();
}else{
var LastMonthDay1 = new Date(yearObt, (monthObt-1) , 0).getDate();
} 
var LastMonthDay2 = LastMonthDay1 - 1 ;
//Calculate date1
if(monthObt > 0){
if(monthObt == 1){
if((("12/30/"+ (yearObt - 1)) == IncludedDay1)||(("12/30/"+ (yearObt - 1)) == IncludedDay2)||(("12/30/"+ (yearObt - 1)) == IncludedDay3)||(("12/30/"+ (yearObt - 1)) == IncludedDay4)||(("12/30/"+ (yearObt - 1)) == IncludedDay5)||(("12/30/"+ (yearObt - 1)) == IncludedDay6)||(("12/30/"+ (yearObt - 1)) == IncludedDay7)||(("12/30/"+ (yearObt - 1)) == IncludedDay8)||(("12/30/"+ (yearObt - 1)) == IncludedDay9)||(("12/30/"+ (yearObt - 1)) == IncludedDay10)||(("12/30/"+ (yearObt - 1)) == IncludedDay11)||(("12/30/"+ (yearObt - 1)) == IncludedDay12)||(("12/30/"+ (yearObt - 1)) == IncludedDay13)||(("12/30/"+ (yearObt - 1)) == IncludedDay14)||(("12/30/"+ (yearObt - 1)) == IncludedDay15)){
var date1 = 30;
}
else if((("12/31/"+ (yearObt - 1)) == IncludedDay1)||(("12/31/"+ (yearObt - 1)) == IncludedDay2)||(("12/31/"+ (yearObt - 1)) == IncludedDay3)||(("12/31/"+ (yearObt - 1)) == IncludedDay4)||(("12/31/"+ (yearObt - 1)) == IncludedDay5)||(("12/31/"+ (yearObt - 1)) == IncludedDay6)||(("12/31/"+ (yearObt - 1)) == IncludedDay7)||(("12/31/"+ (yearObt - 1)) == IncludedDay8)||(("12/31/"+ (yearObt - 1)) == IncludedDay9)||(("12/31/"+ (yearObt - 1)) == IncludedDay10)||(("12/31/"+ (yearObt - 1)) == IncludedDay11)||(("12/31/"+ (yearObt - 1)) == IncludedDay12)||(("12/31/"+ (yearObt - 1)) == IncludedDay13)||(("12/31/"+ (yearObt - 1)) == IncludedDay14)){
var date1 = 31;
}
else if((("1/1/"+ yearObt) == IncludedDay1)||(("1/1/"+ yearObt) == IncludedDay2)||(("1/1/"+ yearObt) == IncludedDay3)||(("1/1/"+ yearObt) == IncludedDay4)||(("1/1/"+ yearObt) == IncludedDay5)||(("1/1/"+ yearObt) == IncludedDay6)||(("1/1/"+ yearObt) == IncludedDay7)||(("1/1/"+ yearObt) == IncludedDay8)||(("1/1/"+ yearObt) == IncludedDay9)||(("1/1/"+ yearObt) == IncludedDay10)||(("1/1/"+ yearObt) == IncludedDay11)||(("1/1/"+ yearObt) == IncludedDay12)||(("1/1/"+ yearObt) == IncludedDay13)||(("1/1/"+ yearObt) == IncludedDay14)||(("1/1/"+ yearObt) == IncludedDay15)){
var date1 = 2;
}
else if((("1/2/"+ yearObt) == IncludedDay1)||(("1/2/"+ yearObt) == IncludedDay2)||(("1/2/"+ yearObt) == IncludedDay3)||(("1/2/"+ yearObt) == IncludedDay4)||(("1/2/"+ yearObt) == IncludedDay5)||(("1/2/"+ yearObt) == IncludedDay6)||(("1/2/"+ yearObt) == IncludedDay7)||(("1/2/"+ yearObt) == IncludedDay8)||(("1/2/"+ yearObt) == IncludedDay9)||(("1/2/"+ yearObt) == IncludedDay10)||(("1/2/"+ yearObt) == IncludedDay11)||(("1/2/"+ yearObt) == IncludedDay12)||(("1/2/"+ yearObt) == IncludedDay13)||(("1/2/"+ yearObt) == IncludedDay14)||(("1/2/"+ yearObt) == IncludedDay15)){
var date1 = 3;

}else{
var date1 = 1;

}
}else if((((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay1)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay2)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay3)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay4)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay5)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay6)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay7)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay8)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay9)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay10)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay11)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay12)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay13)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay14)||(((monthObt - 1) + "/"+ LastMonthDay2+ "/" + yearObt) == IncludedDay15)){
var date1 = (new Date (yearObt,(monthObt - 1),0).getDate()) - 1;

}
else if((((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay1)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay2)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay3)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay4)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay5)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay6)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay7)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay8)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay9)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay10)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay11)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay12)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay13)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay14)||(((monthObt - 1) + "/"+ LastMonthDay1+ "/" + yearObt) == IncludedDay15)){
var date1 = new Date (yearObt,(monthObt - 1),0).getDate();

}
else if(((monthObt + "/1/" + yearObt) == IncludedDay1)||((monthObt + "/1/" + yearObt) == IncludedDay2)||((monthObt + "/1/" + yearObt) == IncludedDay3)||((monthObt + "/1/" + yearObt) == IncludedDay4)||((monthObt + "/1/" + yearObt) == IncludedDay5)||((monthObt + "/1/" + yearObt) == IncludedDay6)||((monthObt + "/1/" + yearObt) == IncludedDay7)||((monthObt + "/1/" + yearObt) == IncludedDay8)||((monthObt + "/1/" + yearObt) == IncludedDay9)||((monthObt + "/1/" + yearObt) == IncludedDay10)||((monthObt + "/1/" + yearObt) == IncludedDay11)||((monthObt + "/1/" + yearObt) == IncludedDay12)||((monthObt + "/1/" + yearObt) == IncludedDay13)||((monthObt + "/1/" + yearObt) == IncludedDay14)||((monthObt + "/1/" + yearObt) == IncludedDay15)){
var date1 = 2;

}
else if(((monthObt + "/2/"+ yearObt) == IncludedDay1)||((monthObt + "/2/"+ yearObt) == IncludedDay2)||((monthObt + "/2/"+ yearObt) == IncludedDay3)||((monthObt + "/2/"+ yearObt) == IncludedDay4)||((monthObt + "/2/"+ yearObt) == IncludedDay5)||((monthObt + "/2/"+ yearObt) == IncludedDay6)||((monthObt + "/2/"+ yearObt) == IncludedDay7)||((monthObt + "/2/"+ yearObt) == IncludedDay8)||((monthObt + "/2/"+ yearObt) == IncludedDay9)||((monthObt + "/2/"+ yearObt) == IncludedDay10)||((monthObt + "/2/"+ yearObt) == IncludedDay11)||((monthObt + "/2/"+ yearObt) == IncludedDay12)||((monthObt + "/2/"+ yearObt) == IncludedDay13)||((monthObt + "/2/"+ yearObt)==IncludedDay14)||((monthObt + "/2/"+ yearObt) == IncludedDay15)){
var date1 = 3;

}else{
var date1 = 1;

}
}
//Calculate date2
if(monthObt > 0){
if(monthObt == 1) {
if(date1 == new Date(yearObt, 12 , 0).getDate()){ 
var date2 = 1;
}
else{
var date2 = date1 + 1 ;
}
}
else if(monthObt > 1) {
if(date1 == new Date(yearObt, (monthObt-1) , 0).getDate()){
var date2 = 1 ;
}
else{
var date2 = date1 + 1 ;
}
}
}
//Calculate date3
if(monthObt > 0){
if(monthObt == 1) {
if(date2 == new Date(yearObt, 12 , 0).getDate()){ 
var date3 = 1;
}
else{
var date3 = date2 + 1 ;
}
}
else if(monthObt > 1) {
if(date2 == new Date(yearObt, (monthObt-1) , 0).getDate()){
var date3 = 1 ;
}
else{
var date3 = date2 + 1 ;
}
}
}
//Calculate date4
if(monthObt > 0){
var date4 = date3 + 1 ;
}
//Calculate date5
if(monthObt > 0){
var date5 = date4 + 1 ;
}
//Calculate date6
if(monthObt > 0){
var date6 = date5 + 1 ;
}
//Calculate date7
if(monthObt > 0){
var date7 = date6 + 1 ;
}
//Calculate date8
if(monthObt > 0){
var date8 = date7 + 1 ;
}
//Calculate date9
if(monthObt > 0){
var date9 = date8 + 1 ;
}
//Calculate date10
if(monthObt > 0){
var date10 = date9 + 1 ;
}
//Calculate date11
if(monthObt > 0){
var date11 = date10 + 1 ;
}
//Calculate date12
if(monthObt > 0){
var date12 = date11 + 1 ;
}
//Calculate date13
if(monthObt > 0){
var date13 = date12 + 1 ;
}
//Calculate date14
if(monthObt > 0){
var date14 = date13 + 1 ;
}
//Calculate date15
if(monthObt > 0){
var date15 = date14 + 1 ;
}
//Calculate date16
if(monthObt > 0){
var date16 = date15 + 1 ;
}
//Calculate date17
if(monthObt > 0){
var date17 = date16 + 1 ;
}
//Calculate date18
if(monthObt > 0){
var date18 = date17 + 1 ;
}
//Calculate date19
if(monthObt > 0){
var date19 = date18 + 1 ;
}
//Calculate date20
if(monthObt > 0){
var date20 = date19 + 1 ;
}
//Calculate date21
if(monthObt > 0){
var date21 = date20 + 1 ;
}
//Calculate date22
if(monthObt > 0){
var date22 = date21 + 1 ;
}
//Calculate date23
if(monthObt > 0){
var date23 = date22 + 1 ;
}
//Calculate date24
if(monthObt > 0){
var date24 = date23 + 1 ;
}
//Calculate date25
if(monthObt > 0){ 
if(( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay1 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay2 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay3 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay4 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay5 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay6 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay7 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay8 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay9 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay10 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay11 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay12 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay13 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay14 ) && ( (monthObt+"/"+date24 + 1+"/"+yearObt) !==  IncludedDay15)) {
var date25 = date24 + 1 
}
}
//Calculate date26
if(monthObt > 0) {
if(date25 != ""){
if(( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay1) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay2) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay3) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay4) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay5) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay6) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay7) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay8) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay9) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay10) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay11) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay12) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay13) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay14) && ( (monthObt+"/"+date25 + 1+"/"+yearObt) !==  IncludedDay15) ){
var date26 = date25 + 1 ;
}
}
}
//Calculate date27
if(monthObt > 0) {
if(date26 != ""){
if(date26 !==  new Date(yearObt, monthObt , 0).getDate() && (date26 > 10)) {
if (( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay1 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay2 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay3 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay4 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay5 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay6 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay7 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay8 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay9 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay10 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay11 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay12 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay13 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay14 ) && ( (monthObt,"/",date26 + 1,"/",yearObt) !==  IncludedDay15 )){ 
var date27 = date26 + 1 ;
}
}
if(date26 == new Date(yearObt, monthObt , 0).getDate()){ 
if(monthObt == 12) {
if ( (("1/1/"+(yearObt + 1)) == IncludedDay1) || ( ("1/1/"+(yearObt + 1)) == IncludedDay2) || ( ("1/1/"+(yearObt + 1)) == IncludedDay3) || ( ("1/1/"+(yearObt + 1)) == IncludedDay4) || ( ("1/1/"+(yearObt + 1)) == IncludedDay5) || ( ("1/1/"+(yearObt + 1)) == IncludedDay6) || ( ("1/1/"+(yearObt + 1)) == IncludedDay7) || ( ("1/1/"+(yearObt + 1)) == IncludedDay8) || ( ("1/1/"+(yearObt + 1)) == IncludedDay9) || ( ("1/1/"+(yearObt + 1)) == IncludedDay10) || ( ("1/1/"+(yearObt + 1)) == IncludedDay11) || ( ("1/1/"+(yearObt + 1)) == IncludedDay12) || ( ("1/1/"+(yearObt + 1)) == IncludedDay13) || ( ("1/1/"+(yearObt + 1)) == IncludedDay14) || ( ("1/1/"+(yearObt + 1)) == IncludedDay15 )){
var date27 = 1 ;
}
} 
if(monthObt > 1){
if (( (monthObt + "1/1/"+yearObt) == IncludedDay1) || ( (monthObt + "1/1/"+yearObt) == IncludedDay2) || ( (monthObt + "1/1/"+yearObt) == IncludedDay3) || ( (monthObt + "1/1/"+yearObt) == IncludedDay4) || ( (monthObt + "1/1/"+yearObt) == IncludedDay5) || ( (monthObt + "1/1/"+yearObt) == IncludedDay6) || ( (monthObt + "1/1/"+yearObt) == IncludedDay7) || ( (monthObt + "1/1/"+yearObt) == IncludedDay8) || ( (monthObt + "1/1/"+yearObt) == IncludedDay9) || ( (monthObt + "1/1/"+yearObt) == IncludedDay10) || ( (monthObt + "1/1/"+yearObt) == IncludedDay11) || ( (monthObt + "1/1/"+yearObt) == IncludedDay12) || ( (monthObt + "1/1/"+yearObt) == IncludedDay13) || ( (monthObt + "1/1/"+yearObt) == IncludedDay14) || ( (monthObt + "1/1/"+yearObt) == IncludedDay15 )){ 
var date27 = 1;
}
} 
}
if(date26 == 1){
if (monthObt == 12) {
if ( (("1/2/"+(yearObt + 1)) == IncludedDay1) || ( ("1/2/"+(yearObt + 1)) == IncludedDay2) || ( ("1/2/"+(yearObt + 1)) == IncludedDay3) || ( ("1/2/"+(yearObt + 1)) == IncludedDay4) || ( ("1/2/"+(yearObt + 1)) == IncludedDay5) || ( ("1/2/"+(yearObt + 1)) == IncludedDay6) || ( ("1/2/"+(yearObt + 1)) == IncludedDay7) || ( ("1/2/"+(yearObt + 1)) == IncludedDay8) || ( ("1/2/"+(yearObt + 1)) == IncludedDay9) || ( ("1/2/"+(yearObt + 1)) == IncludedDay10) || ( ("1/2/"+(yearObt + 1)) == IncludedDay11) || ( ("1/2/"+(yearObt + 1)) == IncludedDay12) || ( ("1/2/"+(yearObt + 1)) == IncludedDay13) || ( ("1/2/"+(yearObt + 1)) == IncludedDay14) || ( ("1/2/"+(yearObt + 1)) == IncludedDay15 )) {
var date27 = 2;
}
} 
if(monthObt > 1) {
if ( ((monthObt + "1/2/"+yearObt) == IncludedDay1) || ( (monthObt + "1/2/"+yearObt) == IncludedDay2) || ( (monthObt + "1/2/"+yearObt) == IncludedDay3) || ( (monthObt + "1/2/"+yearObt) == IncludedDay4) || ( (monthObt + "1/2/"+yearObt) == IncludedDay5) || ( (monthObt + "1/2/"+yearObt) == IncludedDay6) || ( (monthObt + "1/2/"+yearObt) == IncludedDay7) || ( (monthObt + "1/2/"+yearObt) == IncludedDay8) || ( (monthObt + "1/2/"+yearObt) == IncludedDay9) || ( (monthObt + "1/2/"+yearObt) == IncludedDay10) || ( (monthObt + "1/2/"+yearObt) == IncludedDay11) || ( (monthObt + "1/2/"+yearObt) == IncludedDay12) || ( (monthObt + "1/2/"+yearObt) == IncludedDay13) || ( (monthObt + "1/2/"+yearObt) == IncludedDay14) || ( (monthObt + "1/2/"+yearObt) == IncludedDay15 ) ){
var date27 = 2;
}
}
}
}
}
//Calculate date28
var date28 = getDateFunction(monthObt,date27,yearObt);
var date29 = getDateFunction(monthObt,date28,yearObt);
var date30 = getDateFunction(monthObt,date29,yearObt);
var date31 = getDateFunction(monthObt,date30,yearObt);
var date32 = getDateFunction(monthObt,date31,yearObt);
var date33 = getDateFunction(monthObt,date32,yearObt);
monthObt=parseInt(monthObt);
yearObt=parseInt(yearObt);
//Calculate day1
if(date1 > 10){
if(monthObt == 1){
var day1 = wkDays[new Date("12,"+date1+","+ (yearObt-1)).getDay()];
}else{
var day1 = wkDays[new Date((monthObt-1)+","+ date1+","+yearObt).getDay()];
}
}else{
var day1 = wkDays[new Date(monthObt+","+ date1 +","+yearObt).getDay()];
}
//Calculate day2
if(date2 > 10){
if(monthObt == 1){
var day2 = wkDays[new Date("12,"+date2+","+ (yearObt-1)).getDay()];
}else{
var day2 = wkDays[new Date((monthObt-1)+","+ date2+","+yearObt).getDay()];
}
}else{
var day2 = wkDays[new Date(monthObt+","+ date2 +","+yearObt).getDay()];
}
//Calculate day3-day26
var day3 = wkDays[new Date(monthObt+","+ date3 +","+yearObt).getDay()];
var day4 = wkDays[new Date(monthObt+","+ date4 +","+yearObt).getDay()];
var day5 = wkDays[new Date(monthObt+","+ date5 +","+yearObt).getDay()];
var day6 = wkDays[new Date(monthObt+","+ date6 +","+yearObt).getDay()];
var day7 = wkDays[new Date(monthObt+","+ date7 +","+yearObt).getDay()];
var day8 = wkDays[new Date(monthObt+","+ date8 +","+yearObt).getDay()];
var day9 = wkDays[new Date(monthObt+","+ date9 +","+yearObt).getDay()];
var day10 = wkDays[new Date(monthObt+","+ date10 +","+yearObt).getDay()];
var day11 = wkDays[new Date(monthObt+","+ date11 +","+yearObt).getDay()];
var day12 = wkDays[new Date(monthObt+","+ date12 +","+yearObt).getDay()];
var day13 = wkDays[new Date(monthObt+","+ date13 +","+yearObt).getDay()];
var day14 = wkDays[new Date(monthObt+","+ date14 +","+yearObt).getDay()];
var day15 = wkDays[new Date(monthObt+","+ date15 +","+yearObt).getDay()];
var day16 = wkDays[new Date(monthObt+","+ date16 +","+yearObt).getDay()];
var day17 = wkDays[new Date(monthObt+","+ date17 +","+yearObt).getDay()];
var day18 = wkDays[new Date(monthObt+","+ date18 +","+yearObt).getDay()];
var day19 = wkDays[new Date(monthObt+","+ date19 +","+yearObt).getDay()];
var day20 = wkDays[new Date(monthObt+","+ date20 +","+yearObt).getDay()];
var day21 = wkDays[new Date(monthObt+","+ date21 +","+yearObt).getDay()];
var day22 = wkDays[new Date(monthObt+","+ date22 +","+yearObt).getDay()];
var day23 = wkDays[new Date(monthObt+","+ date23 +","+yearObt).getDay()];
var day24 = wkDays[new Date(monthObt+","+ date24 +","+yearObt).getDay()];
var day25 = wkDays[new Date(monthObt+","+ date25 +","+yearObt).getDay()];
var day26 = wkDays[new Date(monthObt+","+ date26 +","+yearObt).getDay()];
//Calculate day27
if(date27 < 10){
if(monthObt == 12){
var day27 = wkDays[new Date("1,"+date27+","+ (yearObt+1)).getDay()];
}else{
var day27 = wkDays[new Date((monthObt+1)+","+ date27+","+yearObt).getDay()];
}
}else{
var day27 = wkDays[new Date(monthObt+","+ date27 +","+yearObt).getDay()];
}
//Calculate day28
if(date28 < 10){
if(monthObt == 12){
var day28 = wkDays[new Date("1,"+date28+","+ (yearObt+1)).getDay()];
}else{
var day28 = wkDays[new Date((monthObt+1)+","+ date28+","+yearObt).getDay()];
}
}else{
var day28 = wkDays[new Date(monthObt+","+ date28 +","+yearObt).getDay()];
}
//Calculate day29
if(date29 < 10){
if(monthObt == 12){
var day29 = wkDays[new Date("1,"+date29+","+ (yearObt+1)).getDay()];
}else{
var day29 = wkDays[new Date((monthObt+1)+","+ date29+","+yearObt).getDay()];
}
}else{
var day29 = wkDays[new Date(monthObt+","+ date29 +","+yearObt).getDay()];
}
//Calculate day30
if(date30 < 10){
if(monthObt == 12){
var day30 = wkDays[new Date("1,"+date30+","+ (yearObt+1)).getDay()];
}else{
var day30 = wkDays[new Date((monthObt+1)+","+ date30+","+yearObt).getDay()];
}
}else{
var day30 = wkDays[new Date(monthObt+","+ date30 +","+yearObt).getDay()];
}
//Calculate day31
//if(date31 == NaN){
if(date31 < 10){
if(monthObt == 12){
var day31 = wkDays[new Date("1,"+date31+","+ (yearObt+1)).getDay()];
}else{
var day31 = wkDays[new Date((monthObt+1)+","+ date31+","+yearObt).getDay()];
}
}else{
var day31 = wkDays[new Date(monthObt+","+ date31 +","+yearObt).getDay()];
}
//}
//Calculate day32
//if(date32 == NaN){
if(date32 < 10){
if(monthObt == 12){
var day32 = wkDays[new Date("1,"+date32+","+ (yearObt+1)).getDay()];
}else{
var day32 = wkDays[new Date((monthObt+1)+","+ date32+","+yearObt).getDay()];
}
}else{
var day32 = wkDays[new Date(monthObt+","+ date32 +","+yearObt).getDay()];
}
//}
//Calculate day33
//if(date33 == NaN){
if(date33 < 10){
if(monthObt == 12){
var day33 = wkDays[new Date("1,"+date33+","+ (yearObt+1)).getDay()];
}else{
var day33 = wkDays[new Date((monthObt+1)+","+ date33+","+yearObt).getDay()];
}
}else{
var day33 = wkDays[new Date(monthObt+","+ date33 +","+yearObt).getDay()];
}
//}

//Calculate key
key1 = calculatekey(monthObt,date1,yearObt);
key2 = calculatekey(monthObt,date2,yearObt);
key3 = calculatekey(monthObt,date3,yearObt);
key4 = calculatekey(monthObt,date4,yearObt);
key5 = calculatekey(monthObt,date5,yearObt);
key6 = calculatekey(monthObt,date6,yearObt);
key7 = calculatekey(monthObt,date7,yearObt);
key8 = calculatekey(monthObt,date8,yearObt);
key9 = calculatekey(monthObt,date9,yearObt);
key10 = calculatekey(monthObt,date10,yearObt);
key11 = calculatekey(monthObt,date11,yearObt);
key12 = calculatekey(monthObt,date12,yearObt);
key13 = calculatekey(monthObt,date13,yearObt);
key14 = calculatekey(monthObt,date14,yearObt);
key15 = calculatekey(monthObt,date15,yearObt);
key16 = calculatekey(monthObt,date16,yearObt);
key17 = calculatekey(monthObt,date17,yearObt);
key18 = calculatekey(monthObt,date18,yearObt);
key19 = calculatekey(monthObt,date19,yearObt);
key20 = calculatekey(monthObt,date20,yearObt);
key21 = calculatekey(monthObt,date21,yearObt);
key22 = calculatekey(monthObt,date22,yearObt);
key23 = calculatekey(monthObt,date23,yearObt);
key24 = calculatekey(monthObt,date24,yearObt);
key25 = calculatekey(monthObt,date25,yearObt);
key26 = calculatekey(monthObt,date26,yearObt);
//Calculate key27-key33
key27 = calculatekey1(monthObt,date27,yearObt);
key28 = calculatekey1(monthObt,date28,yearObt);
key29 = calculatekey1(monthObt,date29,yearObt);
key30 = calculatekey1(monthObt,date30,yearObt);
key31 = calculatekey1(monthObt,date31,yearObt);
key32 = calculatekey1(monthObt,date32,yearObt);
key33 = calculatekey1(monthObt,date33,yearObt);
//Push date,day,key to result array
date1 = date1+" "+key1;
date2 = date2+" "+key2;
date3 = date3+" "+key3;
date4 = date4+" "+key4;
date5 = date5+" "+key5;
date6 = date6+" "+key6;
date7 = date7+" "+key7;
date8 = date8+" "+key8;
date9 = date9+" "+key9;
date10 = date10+" "+key10;
date11 = date11+" "+key11;
date12 = date12+" "+key12;
date13 = date13+" "+key13;
date14 = date14+" "+key14;
date15 = date15+" "+key15;
date16 = date16+" "+key16;
date17 = date17+" "+key17;
date18 = date18+" "+key18;
date19 = date19+" "+key19;
date20 = date20+" "+key20;
date21 = date21+" "+key21;
date22 = date22+" "+key22;
date23 = date23+" "+key23;
date24 = date24+" "+key24;
date25 = date25+" "+key25;
date26 = date26+" "+key26;
date27 = date27+" "+key27;
date28 = date28+" "+key28;
date29 = date29+" "+key29;
date30 = date30+" "+key30;
date31 = date31+" "+key31;
date32 = date32+" "+key32;
date33 = date33+" "+key33;
results.push([day1,date1]);
results.push([day2,date2]);
results.push([day3,date3]);
results.push([day4,date4]);
results.push([day5,date5]);
results.push([day6,date6]);
results.push([day7,date7]);
results.push([day8,date8]);
results.push([day9,date9]);
results.push([day10,date10]);
results.push([day11,date11]);
results.push([day12,date12]);
results.push([day13,date13]);
results.push([day14,date14]);
results.push([day15,date15]);
results.push([day16,date16]);
results.push([day17,date17]);
results.push([day18,date18]);
results.push([day19,date19]);
results.push([day20,date20]);
results.push([day21,date21]);
results.push([day22,date22]);
results.push([day23,date23]);
results.push([day24,date24]);
results.push([day25,date25]);
results.push([day26,date26]);
results.push([day27,date27]);
results.push([day28,date28]);
results.push([day29,date29]);
results.push([day30,date30]);
results.push([day31,date31]);
results.push([day32,date32]);
results.push([day33,date33]);
return results;
}



function calculatekey(monthObt,keyDate,yearObt){
var finalKey = "";
var Holiday1 = "1/1/2021"; 
var Holiday2 = "1/18/2021"; 
var Holiday3 = "2/15/2021"; 
var Holiday4 = "3/31/2021"; 
var Holiday5 = "5/25/2020"; 
var Holiday6 = "7/3/2020"; 
var Holiday7 = "9/7/2020"; 
var Holiday8 = "11/11/2020"; 
var Holiday9 = "11/26/2020"; 
var Holiday10 = "11/27/2020"; 
var Holiday11 = "12/25/2020"; 
var Holiday12 = "12/28/2020"; 
var Holiday13 = "12/29/2020"; 
var Holiday14 = "0/0/0000"; 
var Holiday15 = "0/0/0000"; 
var Holiday16 = "0/0/0000"; 
var Holiday17 = "0/0/0000"; 
var Holiday18 = "0/0/0000"; 
var Holiday19 = "0/0/0000"; 
var Holiday20 = "0/0/0000"; 
var Holiday21 = "0/0/0000"; 
var Holiday22 = "0/0/0000"; 
var Holiday23 = "0/0/0000"; 
var Holiday24 = "0/0/0000"; 
var Holiday25 = "0/0/0000"; 

var Closed1 = "12/30/2021"; 
var Closed2 = "12/31/2021"; 
var Closed3 = "0/0/0000"; 
var Closed4 = "0/0/0000"; 
var Closed5 = "0/0/0000"; 
var Closed6 = "0/0/0000"; 
var Closed7 = "0/0/0000"; 
var Closed8 = "0/0/0000"; 
var Closed9 = "0/0/0000"; 
var Closed10 = "0/0/0000"; 
var Closed11 = "0/0/0000"; 
var Closed12 = "0/0/0000"; 
var Closed13 = "0/0/0000"; 
var Closed14 = "0/0/0000"; 
var Closed15 = "0/0/0000"; 
var Closed16 = "0/0/0000"; 
var Closed17 = "0/0/0000"; 
var Closed18 = "0/0/0000"; 
var Closed19 = "0/0/0000"; 
var Closed20 = "0/0/0000"; 
var Closed21 = "0/0/0000"; 
var Closed22 = "0/0/0000"; 
var Closed23 = "0/0/0000"; 
var Closed24 = "0/0/0000"; 
var Closed25 = "0/0/0000"; 
monthObt = parseInt(monthObt);
keyDate = parseInt(keyDate);
yearObt = parseInt(yearObt);
if(monthObt == 1){ 
if(keyDate < 10)
{ 
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25)){
finalKey = "Holiday";
}
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25)) {
finalKey = "Campus Closed";
}
}
if(keyDate > 10)
{
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25)){ 
finalKey = "Holiday";
}
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25)) {
finalKey = "Campus Closed";
}
}
}
if(monthObt > 1) {
if(keyDate < 10) {
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25)) {
finalKey = "Holiday"; 
}
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25)) {
finalKey = "Campus Closed";
}
}
else if(keyDate > 10) {
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25)) {
finalKey = "Holiday"; 
}
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25)){ 
finalKey = "Campus Closed"; 
}
}
}
return finalKey;
}
function calculatekey1(monthObt,keyDate,yearObt){
var finalKey1 = "";
var Holiday1 = "1/1/2021"; 
var Holiday2 = "1/18/2021"; 
var Holiday3 = "2/15/2021"; 
var Holiday4 = "3/31/2021";
var Holiday5 = "5/25/2020"; 
var Holiday6 = "7/3/2020"; 
var Holiday7 = "9/7/2020"; 
var Holiday8 = "11/11/2020"; 
var Holiday9 = "11/26/2020"; 
var Holiday10 = "11/27/2020"; 
var Holiday11 = "12/25/2020"; 
var Holiday12 = "12/28/2020"; 
var Holiday13 = "12/29/2020"; 
var Holiday14 = "0/0/0000"; 
var Holiday15 = "0/0/0000"; 
var Holiday16 = "0/0/0000"; 
var Holiday17 = "0/0/0000"; 
var Holiday18 = "0/0/0000"; 
var Holiday19 = "0/0/0000"; 
var Holiday20 = "0/0/0000"; 
var Holiday21 = "0/0/0000"; 
var Holiday22 = "0/0/0000"; 
var Holiday23 = "0/0/0000"; 
var Holiday24 = "0/0/0000"; 
var Holiday25 = "0/0/0000"; 

var Closed1 = "12/30/2021"; 
var Closed2 = "12/31/2021"; 
var Closed3 = "0/0/0000"; 
var Closed4 = "0/0/0000"; 
var Closed5 = "0/0/0000"; 
var Closed6 = "0/0/0000"; 
var Closed7 = "0/0/0000"; 
var Closed8 = "0/0/0000"; 
var Closed9 = "0/0/0000"; 
var Closed10 = "0/0/0000"; 
var Closed11 = "0/0/0000"; 
var Closed12 = "0/0/0000"; 
var Closed13 = "0/0/0000"; 
var Closed14 = "0/0/0000"; 
var Closed15 = "0/0/0000"; 
var Closed16 = "0/0/0000"; 
var Closed17 = "0/0/0000"; 
var Closed18 = "0/0/0000"; 
var Closed19 = "0/0/0000"; 
var Closed20 = "0/0/0000"; 
var Closed21 = "0/0/0000"; 
var Closed22 = "0/0/0000"; 
var Closed23 = "0/0/0000"; 
var Closed24 = "0/0/0000"; 
var Closed25 = "0/0/0000"; 
monthObt = parseInt(monthObt);
keyDate = parseInt(keyDate);
yearObt = parseInt(yearObt);
if(monthObt == 12){ 
if(keyDate > 10) {
if( ((monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25) ){
var finalKey1 =  "Holiday" ;
}
if(( (monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25) ){
var finalKey1 =  "Campus Closed" ;
}
}
if(keyDate < 10){ 
if (( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday1) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday2) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday3) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday4) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday5) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday6) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday7) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday8) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday9) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday10) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday11) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday12) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday13) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday14) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday15) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday16) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday17) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday18) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday19) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday20) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday21) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday22) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday23) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday24) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Holiday25)){ 
var finalKey1 =  "Holiday" ;
}
if (( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed1) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed2) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed3) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed4) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed5) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed6) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed7) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed8) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed9) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed10) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed11) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed12) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed13) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed14) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed15) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed16) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed17) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed18) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed19) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed20) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed21) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed22) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed23) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed24) || ( (1+"/"+keyDate+"/"+(yearObt + 1)) == Closed25) ){
var finalKey1 =  "Campus Closed"; 
}
}
} 
if(monthObt < 12) {
if(keyDate > 10) {
if(( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Holiday25) ){
var finalKey1 =  "Holiday"; 
}
if (( (monthObt+"/"+keyDate+"/"+yearObt) == Closed1) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed2) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed3) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed4) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed5) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed6) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed7) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed8) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed9) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed10) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed11) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed12) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed13) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed14) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed15) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed16) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed17) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed18) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed19) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed20) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed21) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed22) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed23) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed24) || ( (monthObt+"/"+keyDate+"/"+yearObt) == Closed25) ){
var finalKey1 =  "Campus Closed"; 
}
}
if(keyDate < 10) {
if(( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday1) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday2) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday3) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday4) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday5) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday6) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday7) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday8) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday9) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday10) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday11) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday12) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday13) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday14) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday15) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday16) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday17) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday18) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday19) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday20) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday21) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday22) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday23) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday24) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Holiday25) ){
var finalKey1 =  "Holiday" ;
}
if( ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed1) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed2) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed3) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed4) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed5) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed6) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed7) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed8) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed9) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed10) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed11) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed12) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed13) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed14) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed15) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed16) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed17) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed18) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed19) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed20) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed21) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed22) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed23) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed24) || ( ((monthObt + 1)+"/"+keyDate+"/"+yearObt) == Closed25)){
var finalKey1 = "Campus Closed";
}
}
} 
return finalKey1;
}
function getDateFunction(monthObt,dateObt,yearObt){
var finalDate = "";
//finalDate = parseInt(finalDate);
var IncludedDay1 = "1/31/2021"; 
var IncludedDay2 = "7/31/2021"; 
var IncludedDay3 = "12/1/2021"; 
var IncludedDay4 = "0/0/0000"; 
var IncludedDay5 = "0/0/0000"; 
var IncludedDay6 = "0/0/0000"; 
var IncludedDay7 = "0/0/0000"; 
var IncludedDay8 = "0/0/0000"; 
var IncludedDay9 = "0/0/0000"; 
var IncludedDay10 = "0/0/0000"; 
var IncludedDay11 = "0/0/0000"; 
var IncludedDay12 = "0/0/0000"; 
var IncludedDay13 = "0/0/0000"; 
var IncludedDay14 = "0/0/0000"; 
var IncludedDay15 = "0/0/0000"; 
    
monthObt = parseInt(monthObt);
dateObt = parseInt(dateObt);
yearObt = parseInt(yearObt);
if(monthObt > 0){
if(dateObt !== ""){
if(dateObt !== new Date(yearObt, monthObt , 0).getDate() && (dateObt > 10)){ 
if( ((monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay1) && ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay2)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay3)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay4)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay5)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay6)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay7)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay8)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay9)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay10)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay11)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay12)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay13)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay14)&& ( (monthObt+"/"+(dateObt + 1)+"/"+yearObt) !== IncludedDay15)){
finalDate = (dateObt + 1);
}
} 
if(dateObt == new Date(yearObt, monthObt , 0).getDate()){
if(monthObt == 12) {
if(( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay1)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay2)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay3)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay4)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay5)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay6)|| ( (1+"/"+1+"/"+(yearObt + 1)) == IncludedDay7)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay8)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay9)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay10)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay11)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay12)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay13)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay14)|| ( (1+"/"+1+"/"+(yearObt + 1)) ==IncludedDay15) ){
finalDate = 1;
}
}
if(monthObt > 1){ 
if(( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay1)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay2)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay3)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay4)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay5)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay6)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay7)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay8)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay9)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay10)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay11)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay12)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay13)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay14)|| ( ((monthObt + 1)+"/"+1+"/"+yearObt) ==IncludedDay15)){ 
finalDate = 1;
}
}
}
if(dateObt == 1) {
if(monthObt == 12){ 
if(( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay1)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay2)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay3)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay4)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay5)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay6)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay7)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay8)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay9)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay10)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay11)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay12)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay13)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay14)|| ( (1+"/"+2+"/"+(yearObt + 1)) ==IncludedDay15) ){
finalDate = 2;
}
}
if(monthObt > 1) {
if(( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay1)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay2)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay3)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay4)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay5)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay6)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay7)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay8)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay9)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay10)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay11)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay12)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay13)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay14)|| ( ((monthObt + 1)+"/"+2+"/"+yearObt) ==IncludedDay15) ){
finalDate = 2;
}
}
}
}
}
return finalDate;
}