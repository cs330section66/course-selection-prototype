//shows selectedButton page when the button is pressed, disables other page page and edits the layout
function pageButtonsPressed(selectedButton) {
    var selectClass = document.getElementById(selectedButton);
    var selectMajor = document.getElementById(selectedButton === "selectClass" ? "selectMajor" : "selectClass")
        //"#1579f6" is dark blue
    selectClass.style.background = "#1579f6";
    selectClass.style.color = "white";
    selectMajor.style.background = "white";
    selectMajor.style.color = "#1579f6";

    document.getElementById("pageTitle").innerHTML = selectedButton === "selectClass" ? "Search For Classes Based On Class Filters" : "Search For Classes Based On Academic Requirements"
    document.getElementById(selectedButton === "selectClass" ? "byAcadReq" : "byClass").style.display = "none"
    document.getElementById(selectedButton === "selectClass" ? "byClass" : "byAcadReq").style.display = "flex"
}

//displays the major user selected when the dropdown option is selected
function majorSelected(major, id) {
    document.getElementById(id).innerHTML = major
}

//displays the course filter the user selects
function courseFilterSelected(filterName) {
    document.getElementById("courseFilter").innerHTML = filterName
}

//displays the academic requirement selected
function academicReqSelected(req) {
    document.getElementById("reqButton").innerHTML = req
}
