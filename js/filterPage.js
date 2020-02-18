
//related to Fitler Page, changes the background color of the selected button and vice versa
function upperButtonsSelected(btn) {
    var property = document.getElementById(btn);
    var propertySecond = document.getElementById("selectByClassButton" === btn ? "selectByAcademicRequirementButton" :  "selectByClassButton");
    if (property.name === "notSelected") {
       property.name = "selected"
       property.className = "selectedButton"
       propertySecond.name = "notSelected"
       propertySecond.className = "normalButton"
   }
   if (btn === "selectByClassButton") {
      document.getElementById("searchByClassDiv").className = "searchByClassDiv"
      document.getElementById("searchByAcademicReq").className = "hidden"
   }
   else {
      document.getElementById("searchByClassDiv").className = "hidden"
      document.getElementById("searchByAcademicReq").className = "searchByAcademicReq"
   }
}

function majorDropdownButtonClicked() {
   var property = document.getElementById("classNameMajorDropdownButton");
   if (property.name === "selected") {
      property.name = "notSelected"
      document.getElementById("classNameClassButtonDropdown").className = "hidden"
   }
   else {
      property.name = "selected"
      document.getElementById("classNameClassButtonDropdown").className = "classNameClassButtonDropdown"
   }
}

var selectedMajor = null

function majorButtonClicked(name) {
   var property = document.getElementById("classNameMajorButton" + name);
   if (property.className === "majorButtonSelected") {
      property.className = "majorButtonNotSelected"
      document.getElementById("classNameMajorDropdownButton").innerHTML = "None"
   }
   else {
      property.className = "majorButtonSelected"
      document.getElementById("classNameMajorDropdownButton").innerHTML = name
      if (selectedMajor && name !== selectedMajor) {
         document.getElementById("classNameMajorButton" + selectedMajor).className = "majorButtonNotSelected"
      }
      selectedMajor = name
      document.getElementById("classNameClassButtonDropdown").className = "hidden"
      document.getElementById("classNameMajorDropdownButton").name = "notSelected"
   }
}

function courseNumberDropdownButtonClicked() {
   var property = document.getElementById("classNameCourseNumberButton");
   if (property.name === "selected") {
      property.name = "notSelected"
      document.getElementById("classNameCourseNumberDropdown").className = "hidden"
   }
   else {
      property.name = "selected"
      document.getElementById("classNameCourseNumberDropdown").className = "classNameCourseNumberDropdown"
   }
}

var selectedNumber = null

function courseNumberButtonClicked(name) {
   var property = document.getElementById("classNameCourseNumberDropdown" + name);
   if (property.className === "CourseNumberButtonSelected") {
      property.className = "CourseNumberButtonNotSelected"
      document.getElementById("classNameCourseNumberButton").innerHTML = "None"
   }
   else {
      property.className = "CourseNumberButtonSelected"
      document.getElementById("classNameCourseNumberButton").innerHTML = name
      if (selectedNumber && name !== selectedNumber) {
         document.getElementById("classNameCourseNumberDropdown" + selectedNumber).className = "CourseNumberButtonNotSelected"
      }
      selectedNumber = name
      document.getElementById("classNameCourseNumberDropdown").className = "hidden"
      document.getElementById("classNameCourseNumberButton").name = "notSelected"
   }
}

function academicReqMajorDropdownClicked() {
   var property = document.getElementById("academicReqMajorDropdownButton");
   if (property.name === "selected") {
      property.name = "notSelected"
      document.getElementById("academicReqClassButtonDropdown").className = "hidden"
   }
   else {
      property.name = "selected"
      document.getElementById("academicReqClassButtonDropdown").className = "academicReqMajorButtonDropdown"
   }
}

var selectedMajorAR = null

function arMajorClicked(name) {
   var property = document.getElementById("academicReqMajorButton" + name);
   if (property.className === "academicReqSelected") {
      property.className = "academicReqNotSelected"
      document.getElementById("academicReqMajorDropdownButton").innerHTML = "None"
   }
   else {
      property.className = "academicReqSelected"
      document.getElementById("academicReqMajorDropdownButton").innerHTML = name
      if (selectedMajorAR && name !== selectedMajorAR) {
         document.getElementById("academicReqMajorButton" + selectedMajorAR).className = "academicReqNotSelected"
      }
      selectedMajorAR  = name
      document.getElementById("academicReqClassButtonDropdown").className = "hidden"
      document.getElementById("academicReqMajorDropdownButton").name = "notSelected"
   }
}

function academicReqDropdownClicked() {
   var property = document.getElementById("academicReqDropdownButton");
   if (property.name === "selected") {
      property.name = "notSelected"
      document.getElementById("academicReqButtonDropdown").className = "hidden"
   }
   else {
      property.name = "selected"
      document.getElementById("academicReqButtonDropdown").className = "academicReqButtonDropdown"
   }
}

var selectedReqAR = null

function arReqClicked(name) {
   var property = document.getElementById("academicReqButton" + name.replace(/\s/g, ''));
   if (property.className === "academicReqSelected") {
      property.className = "academicReqNotSelected"
      document.getElementById("academicReqDropdownButton").innerHTML = "None"
   }
   else {
      property.className = "academicReqSelected"
      document.getElementById("academicReqDropdownButton").innerHTML = name
      if (selectedReqAR && name.replace(/\s/g, '') !== selectedReqAR) {
         document.getElementById("academicReqButton" + selectedReqAR).className = "academicReqNotSelected"
      }
      selectedReqAR = name.replace(/\s/g, '')
      document.getElementById("academicReqButtonDropdown").className = "hidden"
      document.getElementById("academicReqDropdownButton").name = "notSelected"
   }
}

function submitButtonClicked() {
   //move on to classes page
}



//document.getElementById("classNameMajorButton").innerHTML = "None"