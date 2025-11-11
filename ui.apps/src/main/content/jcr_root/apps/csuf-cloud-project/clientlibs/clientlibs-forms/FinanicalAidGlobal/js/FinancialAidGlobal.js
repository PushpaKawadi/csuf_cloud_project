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

function getAidYearValuesOnSingleAidYearUpdated() {
    var financialAidDetails = {
        "AidYearZero": 2024,
        "AidYearOne": 2025,
        "AidYearGeneral": 2024,
        "FinAidYearZero": "2023-2024",
        "FinAidYearOne": "2024-2025",
        "FinAidYearGeneral": "2023-2024",
        "FormCodeGeneral": "F0"
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
}

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

function getUniqueStatements(FormName, AidYear, ExtraValue) {
    var resultantValue = "";
    if(FormName == "CAL_GRANT_TRANSFER_ENTITLEMENT_VERIFICATION"){
        if (AidYear == "2022") {
            resultantValue = "2000";
        } else if (AidYear == "2023") {
            resultantValue = "2001";
        } else if (AidYear == "2024") {
            resultantValue = "2001";
        } else if (AidYear == "2025") {
            resultantValue = "2001";
        }
    }

 if (FormName == "PARENT_TAX_FILING_STATEMENT") {
        if (AidYear == "2019" && ExtraValue == "CDA") {
            resultantValue = {
                "TextTaxExtensionDate": "October 15, 2019",
                "TextFourTwo": "schedules 1,2,3 if applicable",
                "TextTen": "2018",
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
                "TextTen": "2020",
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
                "TextTen": "2021",
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
        } else if (AidYear == "2022" && ExtraValue == "CDA") {
            resultantValue = {
                "TextTaxExtensionDate": "October 14, 2022",
                "TextFourTwo": "all schedules if applicable",
                "TextTen": "2022",
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800"
            };
        } else if (AidYear == "2022" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFiledTaxExtensionYear": "2022",
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
                "TextFifteenFour": "$24,400",
                "TextNine": " "
            };
        } else if (AidYear == "2019" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2019 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2018 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2019.",
                "Text3rdCBCopyofYourYearChange": "2018",
                "TextFifteenOne": "$12,200",
                "TextFifteenTwo": "$12,200",
                "TextFifteenThree": "$18,350",
                "TextFifteenFour": "$24,400",
                "TextNine": " "
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
                "TextFifteenFour": "$24,800",
                "TextNine": "However, please <b><u>INCLUDE</u></b> a signed statement that you did not earn income in 2020 and did not file taxes."
            };
        } else if (AidYear == "2020" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2020 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2019 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2020.",
                "Text3rdCBCopyofYourYearChange": "2019",
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800",
                "TextNine": " "
            };
        } else if (AidYear == "2021" && ExtraValue == "CDA") {
            resultantValue = {
                "TextOne": "2021",
                "TextFourOne": "2021",
                "TextFourTwo": "all schedules if applicable",
                "TextAllW2": "2021",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2021 W2s, a signed statement with estimated 2021 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2020 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2021.",
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800",
                "TextNine": "However, please <b><u>INCLUDE</u></b> a signed statement that you did not earn income in 2021 and did not file taxes.",
            };
        } else if (AidYear == "2021" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2021 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2021 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2021.",
                "Text3rdCBCopyofYourYearChange": "2021",
                "TextFifteenOne": "$12,550",
                "TextFifteenTwo": "$12,550",
                "TextFifteenThree": "$18,800",
                "TextFifteenFour": "$25,100",
                "TextNine": "However, please <b><u>INCLUDE</u></b> a signed statement that you did not earn income in 2021 and did not file taxes."
            };
        } else if (AidYear == "2022" && ExtraValue == "CDA") {
            resultantValue = {
                "TextOne": "2022",
                "TextFourOne": "2022",
                "TextFourTwo": "all schedules if applicable",
                "TextAllW2": "2022",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All 2022 W2s, a signed statement with estimated 2022 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2021 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2022.",
                "TextFifteenOne": "$12,400",
                "TextFifteenTwo": "$12,400",
                "TextFifteenThree": "$18,650",
                "TextFifteenFour": "$24,800",
                "TextNine": "However, please <b><u>INCLUDE</u></b> a signed statement that you did not earn income in 2022 and did not file taxes.",
            };
        } else if (AidYear == "2022" && ExtraValue == "FAFSA") {
            resultantValue = {
                "TextFour": "schedules 1,2,3 if applicable",
                "TextSeven": "- Submit form 4868, unexpired IRS approval of extensions beyond the<br>&nbsp; &nbsp;automatic 6-month extension<br>- All W2s, a signed statement with estimated 2022 income and/<br>&nbsp; or business income amount(s) (if applicable), a signed<br>&nbsp;  copy of your 2022 federal tax return form (1040, 1040A, or<br>&nbsp; 1040EZ), and provide confirmation of non-filing from the IRS<br>&nbsp; through form 4506-T (box 7), dated on or after October 1, 2022.",
                "Text3rdCBCopyofYourYearChange": "2022",
                "TextFifteenOne": "$12,550",
                "TextFifteenTwo": "$12,550",
                "TextFifteenThree": "$18,800",
                "TextFifteenFour": "$25,100",
                "TextNine": "However, please <b><u>INCLUDE</u></b> a signed statement that you did not earn income in 2021 and did not file taxes."
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
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2024 is 10/26/24; Deadline to appeal for Spring 2025 is 04/4/2025)"
            };
        }
    }

    if (FormName == "STUDENT_DEPENDENTS_VERIFICATION") {

       if (AidYear == "2021") {
            resultantValue = {
                "RegulationDateTextTwo": "June 26, 2022",
                "RegulationDateTextThree": "June 30, 2022",
                "AcademicYearTextFour": "Fall 2021 or Spring 2022"

            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "RegulationDateTextTwo": "June 23, 2023",
                "RegulationDateTextThree": "June 30, 2023",
                "AcademicYearTextFour": "Fall 2022 or Spring 2023"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "RegulationDateTextTwo": "June 21, 2024",
                "RegulationDateTextThree": "June 30, 2024",
                "AcademicYearTextFour": "Fall 2023 or Spring 2024"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "RegulationDateTextTwo": "June 30, 2025",
                "RegulationDateTextThree": "June 30, 2025",
                "AcademicYearTextFour": "Fall 2024 or Spring 2025"
            };
        }
    }

    if (FormName == "STUDENT_W2_STATEMENT") {
        var tableHeadingVal = "";
        var cellOneVal = "";
        var cellTwoVal = "";
        var cellThreeVal = "";
        var cellFourVal = "";
        var cellFiveVal = "";
        var cellSixVal = "";
        var checkBoxOneSubCheckBoxOne = "";
        var checkBoxOneSubCheckBoxTwoVisibility = "";
        if (AidYear == "2022") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return?";
            cellOneVal = "$12,200 if parents claimed you as dependent";
            cellTwoVal = "$12,200 if single";
            cellThreeVal = "$18,350 if head of household";
            cellFourVal = "$24,400 if married, filing jointly";
            cellFiveVal = "$5.00 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of at least $400.00";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040 or 1040A, enter the value listed on line 7:";
            checkBoxOneSubCheckBoxTwoVisibility = "visible";
        } else if (AidYear == "2023") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return?";
            cellOneVal = "$12,400 if parents claimed you as dependent";
            cellTwoVal = "$12,400 if single";
            cellThreeVal = "$18,650 if head of household";
            cellFourVal = "$24,800 if married, filing jointly";
            cellFiveVal = "$5.00 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of at least $400.00";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040 or 1040A, enter the value listed on line 7:";
            checkBoxOneSubCheckBoxTwoVisibility = "visible";
        } else if (AidYear == "2024") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return? (gross 2021 income)";
            cellOneVal = "$12,550 if parents claimed you as dependent";
            cellTwoVal = "$12,550 if single";
            cellThreeVal = "$18,800 if head of household";
            cellFourVal = "$25,100 if married, filing jointly";
            cellFiveVal = "$5 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of at least $400 or more";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040, enter the value listed on line 1:";
            checkBoxOneSubCheckBoxTwoVisibility = "hidden";
        } else if (AidYear == "2025") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return? (gross 2022 income)";
            cellOneVal = "$12,950 if parents claimed you as dependent";
            cellTwoVal = "$12,950 if single";
            cellThreeVal = "$19,400 if head of household";
            cellFourVal = "$25,900 if married, filing jointly";
            cellFiveVal = "$5 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of $400 or more";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040, enter the value listed on line 1:";
            checkBoxOneSubCheckBoxTwoVisibility = "hidden";
        }
        resultantValue = {
            "TableHeadingKey": tableHeadingVal,
            "CellOneKey": cellOneVal,
            "CellTwoKey": cellTwoVal,
            "CellThreeKey": cellThreeVal,
            "CellFourKey": cellFourVal,
            "CellFiveKey": cellFiveVal,
            "CellSixKey": cellSixVal,
            "CheckBoxOneSubCheckBoxOneKey": checkBoxOneSubCheckBoxOne,
            "CheckBoxOneSubCheckBoxTwoPresenceKey": checkBoxOneSubCheckBoxTwoVisibility
        };

    }

    if (FormName == "PARENT_VERIFICATION_OF_NON_FILING_LETTER") {
        if (AidYear == "2022") {
            resultantValue = "2018";
        } else if (AidYear == "2023") {
            resultantValue = "2019";
        } else if (AidYear == "2024") {
            resultantValue = "2021";
        } else if (AidYear == "2025") {
            resultantValue = "2022";
        }
    }

    if (FormName == "VERIFICATION_OF_INDEPENDENT_HOME") {
        var headingInstructionVal = "";
        var checkBoxOneVal = "";
        var checkBoxTwoVal = "";
        var checkBoxThreeVal = "";
        if (ExtraValue == "CDA") {
            if (AidYear == "2022") {
                headingInstructionVal = "June 30, 2020";
                checkBoxOneVal = "June 30, 2020";
                checkBoxTwoVal = "June 30, 2020";
                checkBoxThreeVal = "June 30, 2020";
            } else if (AidYear == "2023") {
                headingInstructionVal = "June 20, 2021";
                checkBoxOneVal = "June 30, 2021";
                checkBoxTwoVal = "June 30, 2021";
                checkBoxThreeVal = "June 30, 2021";
            } else if (AidYear == "2024") {
                headingInstructionVal = "June 19, 2022";
                checkBoxOneVal = "June 30, 2022";
                checkBoxTwoVal = "June 30, 2022";
                checkBoxThreeVal = "June 30, 2022";
            } else if (AidYear == "2025") {
                headingInstructionVal = "June 19, 2023";
                checkBoxOneVal = "June 28, 2023";
                checkBoxTwoVal = "June 30, 2023";
                checkBoxThreeVal = "June 30, 2023";
            }
        }
        if (ExtraValue == "FAFSA") {
            if (AidYear == "2022") {
                headingInstructionVal = "June 29, 2020";
                checkBoxOneVal = "June 29, 2020";
                checkBoxTwoVal = "June 29, 2020";
                checkBoxThreeVal = "June 29, 2020";
            } else if (AidYear == "2023") {
                headingInstructionVal = "June 29, 2021";
                checkBoxOneVal = "June 29, 2021";
                checkBoxTwoVal = "June 29, 2021";
                checkBoxThreeVal = "June 29, 2021";
            } else if (AidYear == "2024") {
                headingInstructionVal = "June 28, 2022";
                checkBoxOneVal = "June 28, 2022";
                checkBoxTwoVal = "June 28, 2022";
                checkBoxThreeVal = "June 28, 2022";
            } else if (AidYear == "2025") {
                headingInstructionVal = "June 28, 2023";
                checkBoxOneVal = "June 28, 2023";
                checkBoxTwoVal = "June 28, 2023";
                checkBoxThreeVal = "June 28, 2023";
            }
        }
        resultantValue = {
            "HeadingInstructionKey": headingInstructionVal,
            "CheckBoxOneKey": checkBoxOneVal,
            "CheckBoxTwoKey": checkBoxTwoVal,
            "CheckBoxThreeKey": checkBoxThreeVal
        };

    }

    if(FormName == "UNIT_CAP_APPEAL"){
        if (AidYear == "2022") {
            resultantValue = "(Deadline to appeal for Fall 2021 is 10/28/21; Deadline to appeal for Spring 2022 is 04/7/2022)";
        } else if (AidYear == "2023") {
            resultantValue = "(Deadline to appeal for Fall 2022 is 10/27/22; Deadline to appeal for Spring 2023 is 04/6/2023)";
        } else if (AidYear == "2024") {
            resultantValue = "(Deadline to appeal for Fall 2023 is 10/26/23; Deadline to appeal for Spring 2024 is 04/04/24)";
        } else if (AidYear == "2025") {
            resultantValue = "(Deadline to appeal for Fall 2023 is 10/26/24; Deadline to appeal for Spring 2024 is 04/04/25)";
        }
    }

    if (FormName == "FEDERAL_DIRECT_GRAD_PLUS_LOAN") {

       if (AidYear == "2021") {
            resultantValue = {
                "DeclarationTextOne": "21/22",
                "ApplicationDate1": "December 3, 2021",
                "ApplicationDate2": "April 29, 2022",
                "ApplicationDate3": "April 29, 2022",
                "ApplicationDate4": "July 21, 2022"
            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "DeclarationTextOne": "22/23",
                "ApplicationDate1": "December 2, 2022",
                "ApplicationDate2": "April 28, 2023",
                "ApplicationDate3": "April 28, 2023",
                "ApplicationDate4": "July 20, 2023"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "DeclarationTextOne": "23/24",
                "ApplicationDate1": "December 1, 2023",
                "ApplicationDate2": "April 26, 2024",
                "ApplicationDate3": "April 26, 2024",
                "ApplicationDate4": "July 18, 2024"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "DeclarationTextOne": "24/25",
                "ApplicationDate1": "December 2, 2024",
                "ApplicationDate2": "May 2, 2025",
                "ApplicationDate3": "May 2, 2025",
                "ApplicationDate4": "in April. Deadline varies based on summer session.Form must be submitted 2 weeks prior to end of session."
            };
        }
    } 

    if (FormName == "FEDERAL_DIRECT_LOAN_REQUEST") {
        if (AidYear == "2022") {
            resultantValue = "Fall Only – December 3, 2021; Academic year or Spring Only – April 29, 2022";
        } else if (AidYear == "2023") {
            resultantValue = "Fall Only – December 2, 2022; Academic year or Spring Only – April 28, 2023";
        } else if (AidYear == "2024") {
            resultantValue = "Fall Only – December 1, 2023; Academic year or Spring Only – April 26, 2024";
        } else if (AidYear == "2025") {
            resultantValue = "Fall Only – December 1, 2024; Academic year or Spring Only – April 26, 2025";
        }
    }

    if (FormName == "FEDERAL_DIRECT_PLUS_APPLICATION") {

       if (AidYear == "2022") {
            resultantValue = {
                "FirstParentPlusText": "21/22",
                "DeadlineDate1": "3,2021",
                "DeadlineDate2": "29, 2022",
                "SummerYear": "Summer 2022"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "FirstParentPlusText": "22/23",
                "DeadlineDate1": "2,2022",
                "DeadlineDate2": "28, 2023",
                "SummerYear": "Summer 2023"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "FirstParentPlusText": "23/24",
                "DeadlineDate1": "1, 2023",
                "DeadlineDate2": "26, 2024",
                "SummerYear": "Summer 2024"
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "FirstParentPlusText": "24/25",
                "DeadlineDate1": "1, 2024",
                "DeadlineDate2": "26, 2025",
                "SummerYear": "Summer 2025"
            };
        }
    } 

    if (FormName == "AWARD_ADJUSTMENT_APPEAL") {

       if (AidYear == "2021") {
            resultantValue = {
                "YearOne": "'21",
                "YearTwo": "'22"
            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "YearOne": "'22",
                "YearTwo": "'23"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "YearOne": "'23",
                "YearTwo": "'24"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "YearOne": "'24",
                "YearTwo": "'25"
            };
        }
    }

    if (FormName == "DEPENDENCY_OVRRIDE_RENEWAL") {
        if (AidYear == "2021") {
            resultantValue = {
                "TestText": "1997",
                "DiffYearText": "2020-2021"
            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "TestText": "1998",
                "DiffYearText": "2022-2023"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TestText": "1999",
                "DiffYearText": "2023-2024"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TestText": "1999",
                "DiffYearText": "2024-2025"
            };
        }

    }

    if (FormName == "STUDENT_BUDGET_ADJUSTMENT_APPEAL") {
        if (AidYear == "2021") {
            resultantValue = {
                "ApplicationDateYear1": "August 21,2021",
                "ApplicationDateYear2": "May 6,2022",
                "SummerYear": "21/22"
            };
        } else if (AidYear == "2022") {
            resultantValue = {
                "ApplicationDateYear1": "August 19,2022",
                "ApplicationDateYear2": "May 5,2023",
                "SummerYear": "22/23"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "ApplicationDateYear1": "August 18,2023",
                "ApplicationDateYear2": "May 3,2024",
                "SummerYear": "23/24"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "ApplicationDateYear1": "August 1,2024",
                "ApplicationDateYear2": "May 2,2025",
                "SummerYear": "24/25"
            };
        }

    }

    if (FormName == "CONCURRENT_ENROLLMENT_FALL") {
        if (AidYear == "2022") {
            resultantValue = {
                "TextTwo": "December 4th",
                "TextThree": "Sept.20, 2021",
                "DateChange": "Sept.20,",

            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextTwo": "December 2nd",
                "TextThree": "Sept.19, 2022",
                "DateChange": "Sept.19,",
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextTwo": "December 1st",
                "TextThree": "Sept.18, 2023",
                "DateChange": "Sept.18,",
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "TextTwo": "December 1st",
                "TextThree": "Sept.18, 2024",
                "DateChange": "Sept.18,",
            };
        }
    }

    if (FormName == "CONCURRENT_ENROLLMENT_SPRING") {
        if (AidYear == "2022") {
            resultantValue = {
                "TextTwo": "<ul><li>Completely fill out the <b>student section</b>. </li><li>Obtain certification from the <b>Registrar’s Office and the Financial Aid Office </b>at the other school you are attending.</li><li>Return form to&nbsp;<b> CSU, Fullerton, Office of Financial Aid.</b></li><li>Allow&nbsp; <b>3- 4 weeks</b>&nbsp; for your request to be processed</li><li>Must submit 1 week prior to the end of semester.</li><li>Form submitted after <b>December 3rd</b> will not be accepted.</li></ul>",
                "TextThree": "Feb.15, 2022",
                "DateChange": "Feb.15,"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextTwo": "<ul><li>Completely fill out the <b>student section</b>.</li><li>Obtain certification from the <b>Registrar’s Office and the Financial Aid Office </b>at the other school you are attending.</li><li>Return form to&nbsp;<b> CSU, Fullerton, Office of Financial Aid.</b></li><li>Allow&nbsp; <b>3- 4 weeks</b>&nbsp; for your request to be processed</li><li>Must submit 1 week prior to the end of semester.</li></ul>",
                "TextThree": "Feb.21, 2023",
                "DateChange": "Feb.21,"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextTwo": "<ul><li>Completely fill out the <b>student section</b>.</li><li>Obtain certification from the <b>Registrar’s Office and the Financial Aid Office </b>at the other school you are attending.</li><li>Return form to&nbsp;<b> CSU, Fullerton, Office of Financial Aid.</b></li><li>Allow&nbsp; <b>3- 4 weeks</b>&nbsp; for your request to be processed</li><li>Must submit 1 week prior to the end of semester.</li></ul>",
                "TextThree": "Feb.12, 2024",
                "DateChange": "Feb.12,"
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "TextTwo": "<ul><li>Completely fill out the <b>student section</b>.</li><li>Obtain certification from the <b>Registrar’s Office and the Financial Aid Office </b>at the other school you are attending.</li><li>Return form to&nbsp;<b> CSU, Fullerton, Office of Financial Aid.</b></li><li>Allow&nbsp; <b>3- 4 weeks</b>&nbsp; for your request to be processed</li><li>Must submit 1 week prior to the end of semester.</li></ul>",
                "TextThree": "Feb.12, 2025",
                "DateChange": "Feb.12,"
            };
        }
    }

    if (FormName == "STATE_UNIV_GRANT_APPEAL") {
        if (AidYear == "2022") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2021 is 10/28/21; Deadline to appeal for Spring 2022 is 04/7/2022)",
                "AwardYearText": "21/22"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2022 is 10/27/22; Deadline to appeal for Spring 2023 is 04/6/2023)",
                "AwardYearText": "22/23"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2023 is 10/26/23; Deadline to appeal for Spring 2024 is 04/4/2024)",
                "AwardYearText": "23/24"
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "TextOne": "(Deadline to appeal for Fall 2024 is 10/24/24; Deadline to appeal for Spring 2025 is 04/3/2025)",
                "AwardYearText": "24/25"
            };
        }
    }

    if (FormName == "HOUSING_UPDATE") {
        if (AidYear == "2022") {
            resultantValue = "21/22";
        } else if (AidYear == "2023") {
            resultantValue = "22/23";
        } else if (AidYear == "2024") {
            resultantValue = "23/24";
        } else if (AidYear == "2025") {
            resultantValue = "24/25";
        }
    }

     if (FormName == "PARENT_FEDERAL_TAX_RETURN") {
        if (AidYear == "2022") {
            resultantValue = {
                "TextOne": "2019 or during 2020.",
                "TextTwo": "spouse's 2019 U.S. IRS Tax Transcript.",
                "TextThree": "confirmation"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextOne": "2020 or during 2021.",
                "TextTwo": "spouse's 2020 U.S. IRS Tax Transcript.",
                "TextThree": "confirmation"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextOne": "2021 or during 2022, or 2023.",
                "TextTwo": "parent's spouse's 2021 U.S. IRS Tax Transcript.",
                "TextThree": "verification"
            };
        }
    }

    if (FormName == "STUDENT_FEDERAL_TAX_RETURN") {
        if (AidYear == "2022") {
            resultantValue = {
                "TextOne": "2019 or during 2020.",
                "TextThree": "confirmation"
            };
        } else if (AidYear == "2023") {
            resultantValue = {
                "TextOne": "2020 or during 2021.",
                "TextThree": "confirmation"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextOne": "2021 or during 2022, or 2023.",
                "TextThree": "verification"
            };
        }
    }

    if (FormName == "PARENT_W2_STATEMENT") {
        var tableHeadingVal = "";
        var cellOneVal = "";
        var cellTwoVal = "";
        var cellThreeVal = "";
        var cellFourVal = "";
        var cellFiveVal = "";
        var cellSixVal = "";
        var checkBoxOneSubCheckBoxOne = "";
        var checkBoxOneSubCheckBoxTwoVisibility = "";
        if (AidYear == "2022") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return?";
            cellOneVal = "$12,200 if parents claimed you as dependent";
            cellTwoVal = "$12,200 if single";
            cellThreeVal = "$18,350 if head of household";
            cellFourVal = "$24,400 if married, filing jointly";
            cellFiveVal = "$5.00 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of at least $400.00";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040 or 1040A, enter the value listed on line 7:";
            checkBoxOneSubCheckBoxTwoVisibility = "visible";
        } else if (AidYear == "2023") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return?";
            cellOneVal = "$12,400 if parents claimed you as dependent";
            cellTwoVal = "$12,400 if single";
            cellThreeVal = "$18,650 if head of household";
            cellFourVal = "$24,800 if married, filing jointly";
            cellFiveVal = "$5.00 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of at least $400.00";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040 or 1040A, enter the value listed on line 7:";
            checkBoxOneSubCheckBoxTwoVisibility = "visible";
        } else if (AidYear == "2025") {
            tableHeadingVal = "Who is required to file a U.S. Federal Income Tax Return? (gross 2022 income)";
            cellOneVal = "$12,950 if parents claimed you as dependent";
            cellTwoVal = "$12,950 if single";
            cellThreeVal = "$19,400 if head of household";
            cellFourVal = "$25,900 if married, filing jointly";
            cellFiveVal = "$5 if married, filing separately";
            cellSixVal = "You had net earnings from self-employment of $400 or more";
            checkBoxOneSubCheckBoxOne = "If you filed an IRS form 1040, enter the value listed on line 1:";
            checkBoxOneSubCheckBoxTwoVisibility = "hidden";
        }
        resultantValue = {
            "TableHeadingKey": tableHeadingVal,
            "CellOneKey": cellOneVal,
            "CellTwoKey": cellTwoVal,
            "CellThreeKey": cellThreeVal,
            "CellFourKey": cellFourVal,
            "CellFiveKey": cellFiveVal,
            "CellSixKey": cellSixVal,
            "CheckBoxOneSubCheckBoxOneKey": checkBoxOneSubCheckBoxOne,
            "CheckBoxOneSubCheckBoxTwoPresenceKey": checkBoxOneSubCheckBoxTwoVisibility
        };

    }

    if (FormName == "STUDENT_INCOME_APPEAL") {
       if (AidYear == "2023") {
            resultantValue = {
                "TextDeadline1": "November 1",
                "TextDeadline2": "April 11"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextDeadline1": "November 5",
                "TextDeadline2": "April 7"
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "TextDeadline1": "November 5",
                "TextDeadline2": "April 7"
            };
        }
    }

    if (FormName == "PARENT_INCOME_APPEAL") {
       if (AidYear == "2023") {
            resultantValue = {
                "TextDeadline1": "November 1",
                "TextDeadline2": "April 11"
            };
        } else if (AidYear == "2024") {
            resultantValue = {
                "TextDeadline1": "November 5",
                "TextDeadline2": "April 7"
            };
        } else if (AidYear == "2025") {
            resultantValue = {
                "TextDeadline1": "November 5",
                "TextDeadline2": "April 7"
            };
        }
    }


    return resultantValue;
}