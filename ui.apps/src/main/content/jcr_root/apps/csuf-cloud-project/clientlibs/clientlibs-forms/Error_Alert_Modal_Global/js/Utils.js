function showErrorModal(errorHeading, errorMsg) {

    debugger;

    var modal = document.getElementById("errorPopup");



    var modalHeaderMsg = document.getElementById("modal-text");
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
    okButton.value = "OK";
    okButton.onclick = function(event) {
        modal.style.display = "none";
    };
    footerModal.appendChild(okButton);
    modal.style.display = "block";
}

function checkSupDocMimeType(filePath) {

    var extension = filePath.substring(filePath.lastIndexOf(".") + 1, filePath.length);
    extension = extension.toLowerCase();
    if (extension !== "pdf" && extension !== "jpeg" && extension !== "jpg" && extension !== "png" && extension !== "tif" && extension !== "tiff") {
        //SupportingDoc1.fileAttachment.value = null;
        return true;
    } else {
        return false;
    }
}

function replaceSplCharInFileName(filePath) {



    var format = /[`~*+:’'?<>-|.,&{}#!@$%^=;\[\]\s()]/;
    filePath = toUTF8Array(filePath);
    if (format.test(filePath) === true) {
        var doc1NewName = ((filePath.replace(/[.](?=.*[.])/g, "_")).replace(/\s+/g, '_')).replace(/`|’|~|\*|\+|\:|'|\?|<|>|\,|#|\(|\)|-|&|!|@|{|}|\$|%|\^|\;|\[|\]|=/g, '_');
        return doc1NewName;
    } else {
        return false;
    }
}

function getAlternativeDean(deanId) {
    var deanData = [{"DEAN_USERID":"jzhang","DEAN_NAME":"Jenny Zhang","DEAN_EMAIL":"jzhang@fullerton.edu","DEAN_CWID":"892248220"}];
    if(deanId == "dmazzey"){
    return deanData;
    }else{
    return null;
    }
}

function toUTF8Array(str) {
    var utf8 = [];
    for (var i = 0; i < str.length; i++) {
        var charcode = str.charCodeAt(i);
        if (charcode < 0x80) utf8.push(charcode);
        else if (charcode < 0x800) {
            utf8.push(0xc0 | (charcode >> 6),
                0x80 | (charcode & 0x3f));
        } else if (charcode < 0xd800 || charcode >= 0xe000) {
            utf8.push(0xe0 | (charcode >> 12),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
        // surrogate pair
        else {
            i++;
            charcode = ((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff)
            utf8.push(0xf0 | (charcode >> 18),
                0x80 | ((charcode >> 12) & 0x3f),
                0x80 | ((charcode >> 6) & 0x3f),
                0x80 | (charcode & 0x3f));
        }
    }
    return utf8;
}




function getFinancialAidTaxYear(financialAidYearVal) {



    var taxYearVal = financialAidYearVal.split("-");
    var taxYear = taxYearVal[0];
    var taxFilingYear = taxYear - 2;



    return taxFilingYear;
}

/* Function to disable Cut Copy Paste Functionality - Used in Parent Tax Filing Statement F0CTXP/F1CTXP */
function disabledCutCopyPasteFunctionality() {
    $(document).ready(function() {
        $('.disableCopyPaste').bind("cut copy paste", function(e) {
            e.preventDefault();
        });
    });
}

/* To read the URL Parameters. (Used in all Financial Aid Forms) */
function getUrlParameters(formParam) {
    var formUrl = window.location.search;
    var urlParams = new URLSearchParams(formUrl);
    var paramValue;

    if (urlParams.has(formParam)) {
        paramValue = urlParams.get(formParam);
    }
    return paramValue;
}
/* Function to disable Cut Copy Paste Functionality - Used in Parent Tax Filing Statement F0CTXP/F1CTXP */
function disabledCutCopyPasteFunctionality() {
    $(document).ready(function() {
        $('.disableCopyPaste').bind("cut copy paste", function(e) {
            e.preventDefault();
        });
    });
}

window.onload = function execute() {
    var dateString = new Date().toLocaleString("en-US", {
        timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
    }).replace(/[^ -~]/g, '');
    var dateObject = new Date(dateString);
    var curyear = dateObject.getFullYear();
    var footerText = "© ".concat(curyear).concat(" CSUF | All rights reserved");
    document.getElementById('FooterText').innerHTML = footerText;
};

function getDateforAdaptiveForm(){
 var dateString = new Date().toLocaleString("en-US", {

            timeZone: (Intl.DateTimeFormat().resolvedOptions().timeZone)
        }).replace(/[^ -~]/g, '');
        var dateObject = new Date(dateString);
        var curyear = dateObject.getFullYear();
	/*	var curyearMonth = String(dateObject.getMonth() + 1).padStart(2, '0');
	   	var curyearDay = String(dateObject.getDate()).padStart(2, '0');*/
        var curyearMonth = (dateObject.getMonth() + 1 < 10 ? '0' : '') + (dateObject.getMonth() + 1);
        var curyearDay = (dateObject.getDate() < 10 ? '0' : '') + dateObject.getDate();
        var d = (curyear + "-" + curyearMonth + "-" + curyearDay);
        return d;
}

/*
function getAidYearValuesOnSingleAidYear() {
    var financialAidDetails = {
        "AidYearZero": 2024,
        "AidYearOne": 2023,
        "AidYearGeneral": 2023,
        "FinAidYearZero": "2023-2024",
        "FinAidYearOne": "2022-2023",
        "FinAidYearGeneral": "2022-2023",
        "FormCodeGeneral": "F1"
    };
    return financialAidDetails;
}

function getAidYearValuesOnPopup() {
    var financialAidDetails = {
        "AidYearOne": 2023,
        "AidYearTwo": 2024,
        "FinAidYearOne": "2022-2023",
        "FinAidYearTwo": "2023-2024",
        "FinAidYearFormCodeOne": "F1",
        "FinAidYearFormCodeTwo": "F0"
    };
    var popupTextOne = financialAidDetails.FinAidYearOne;
    var popupTextTwo = financialAidDetails.FinAidYearTwo;
    document.getElementById('PopupTextOne').innerHTML = popupTextOne;
    document.getElementById('PopupTextTwo').innerHTML = popupTextTwo;
    return financialAidDetails;
}*/

/*function getTaxFilingStatementTextChange(aidYearValue) {
    if (aidYearValue == "2019") {
        var TextOneChange = {
            "TextFour": "schedules 1,2,3 if applicable",
            "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2019 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2019 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2019.",
            "TextFifteenOne": "$12,400",
            "TextFifteenTwo": "$12,400",
            "TextFifteenThree": "$18,650",
            "TextFifteenFour": "$24,800"
        };
    }
    if (aidYearValue == "2020") {
        var TextOneChange = {
            "TextFour": "all schedules if applicable",
            "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2019 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2020 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2020.",
            "TextFifteenOne": "$12,400",
            "TextFifteenTwo": "$12,400",
            "TextFifteenThree": "$18,650",
            "TextFifteenFour": "$24,800"
        };
    }  
    if (aidYearValue == "2021") {
        var TextOneChange = {
            "TextFour": "all schedules if applicable"
            "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2021 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2021 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2021.",
            "TextFifteenOne": "$12,550",
            "TextFifteenTwo": "$12,550",
            "TextFifteenThree": "$18,800",
            "TextFifteenFour": "$25,100"
        };
    }  
    return TextOneChange;
}*/

/*
function getUniqueStatements(FormName, AidYear, ExtraValue) {
    var resultantValue = "";
    if (FormName == "CAL_GRANT_TRANSFER_ENTITLEMENT_VERIFICATION") {
        if (AidYear == "2022") {
            resultantValue = "2000";
        } else if (AidYear == "2023") {
            resultantValue = "2000";
        } else if (AidYear == "2024") {
            resultantValue = "2001";
        }
    }

 if (FormName == "PARENT_TAX_FILING_STATEMENT") {
        if (AidYear == "2019" && ExtraValue == "CDA") {
            resultantValue = {
                "TextTaxExtensionDate": "October 15, 2019",
                "TextFourTwo": "schedules 1,2,3 if applicable",
                "TextFifteenOne": "$12,200",
                "TextFifteenTwo": "$12,200",
                "TextFifteenThree": "$18,350",
                "TextFifteenFour": "$24,400"
            };
        } else if (AidYear == "2019" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFiledTaxExtensionYear": "2018",
                "TextFifteenOne": "$12,200",
                "TextFifteenTwo": "$12,200",
                "TextFifteenThree": "$18,350",
                "TextFifteenFour": "$24,400"
            };
        } else if (AidYear == "2020" && ExtraValue == "CDA") {
            resultantValue = {
                "TextTaxExtensionDate": "October 15, 2020",
                "TextFourTwo": "all schedules if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2020 W2s, a signed statement with estimated 2020 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2019 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2020.", 
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"
            };
        } else if (AidYear == "2020" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFiledTaxExtensionYear": "2020",
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"                
            };
        } else if (AidYear == "2021" && ExtraValue == "CDA") {
            resultantValue = {
                "TextTaxExtensionDate": "October 14, 2021",
                "TextFourTwo": "all schedules if applicable", 
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"
            };
        } else if (AidYear == "2021" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFiledTaxExtensionYear": "2021",
                "TextFifteenOne": "$12,550",
                "TextFifteenTwo": "$12,550",
                "TextFifteenThree": "$18,800",
                "TextFifteenFour": "$25,100"                
            };
        }
    }

     if (FormName == "STUDENT_TAX_FILING_STATEMENT") {
        if (AidYear == "2019" && ExtraValue == "CDA") {
            resultantValue = {
                "TextOne": "2019",
                "TextFourOne": "2019",
                "TextFourTwo": "schedules 1,2,3 if applicable",
                "TextAllW2": "2018",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2018 W2s, a signed statement with estimated 2019 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2018 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2019.",              
                "TextFifteenOne": "$12,200",
                "TextFifteenTwo": "$12,200",
                "TextFifteenThree": "$18,350",
                "TextFifteenFour": "$24,400"
            };
        } else if (AidYear == "2019" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2019 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2018 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2019.",
                "Text3rdCBCopyofYourYearChange": "2018",
                "TextFifteenOne": "$12,200",
                "TextFifteenTwo": "$12,200",
                "TextFifteenThree": "$18,350",
                "TextFifteenFour": "$24,400"
            };
        } else if (AidYear == "2020" && ExtraValue == "CDA") {
            resultantValue = {
                "TextOne": "2020",
                "TextFourOne": "2020",
                "TextFourTwo": "all schedules if applicable",
                "TextAllW2": "2020",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2020 W2s, a signed statement with estimated 2020 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2019 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2020.", 
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"
            };
        } else if (AidYear == "2020" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2020 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2019 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2020.",
                "Text3rdCBCopyofYourYearChange": "2019",          
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"                
            };
        } else if (AidYear == "2021" && ExtraValue == "CDA") {
            resultantValue = {
                "TextOne": "2020",
                "TextFourOne": "2020",
                "TextFourTwo": "all schedules if applicable",
                "TextAllW2": "2021",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2021 W2s, a signed statement with estimated 2021 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2020 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2021.", 
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"
            };
        } else if (AidYear == "2021" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2021 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2021 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2021.",
                "Text3rdCBCopyofYourYearChange": "2021",
                "TextFifteenOne": "$12,550",
                "TextFifteenTwo": "$12,550",
                "TextFifteenThree": "$18,800",
                "TextFifteenFour": "$25,100"                
            };
        }
    }

    if (FormName == "SAP_APPEAL") {
        if (AidYear == "2021") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2021 is 10/28/21; Deadline to appeal for Spring 2022 is 04/7/2022)"
            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2022 is 10/27/22; Deadline to appeal for Spring 2023 is 04/6/2023)"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2023 is 10/26/23; Deadline to appeal for Spring 2024 is 04/4/2024)"
            };
        }
    }

    return resultantValue;
}*/