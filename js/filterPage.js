
//related to Fitler Page, changes the background color of the selected button and vice versa
function setClass(btn) {
    var property = document.getElementById(btn);
    var propertySecond = document.getElementById("selectByClassButton" === btn ? "selectByAcademicRequirementButton" :  "selectByClassButton");
    if (property.name === "notSelected") {
       property.name = "selected"
       property.className = "selectedButton"
       propertySecond.name = "notSelected"
       propertySecond.className = "normalButton"
    }
 }