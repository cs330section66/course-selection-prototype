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



let listof_courses = [
   { name: "Comp_Sci 214", prereq: "Comp_Sci211", description: "data structure is good"},
   { name: "Comp_Sci 213", prereq: "Comp_Sci211", description: "systems is kinda hard"},
   { name: "Sociol 110", prereq: "None", description: "Sociology is a field of stufy that examines how people and groups interact."},
   { name: "Comp_Sci 348", prereq: "Comp_Sci 111, Comp_Sci 214", description: "Core Techniques and applications of artificial intelligence."},
   { name: "IEMS 201", prereq: "Math 234", description: "Collecting, summarizing, and displaying data. Drawing conclusions and making decisions"},
   { name: "ECON 202-0", prereq: "None", description: "Economics is the study of ..."},
   { name: "Comp_Sci212", prereq: "Comp_Sci 111", description: "Fundamental concepts and tools in discrete math."},
   { name: "ECON 210-0", prereq: "None", description: "An intro to economics with an emphasis of macroeconomics."},
   { name: "Civ_Env 216", prereq: "Gen_Eng 205-2", description: "Analytical and experimental study of stresses and deformations and their application."},
   { name: "Comp_Sci 371", prereq: "Comp_Sci 348", description: "Principles and practices of knowledge representation, including logics and ontologies."},
   { name: "Mat_Sci 201", prereq: "Chem 131", description: "Introduces the core topis and basic concepts of Material Science"},
   { name: "Psych 201-0", prereq: "Psych 110", description: "The analysis of data, using computer software and a conceptual approach."},
   { name: "Comp_Eng 205", prereq: "None", description: "Basics of assembly language programming. Macros, Systems, Stack, and procedure calls."},
   { name: "PSYCH 110-0", prereq: "None", description: "The purpose of this course is to present an overview of the field of psychology"},
   { name: "Comp_Sci 349", prereq: "Comp_Sci 214", description: "The study of algorithms that improve automatically."},
   { name: "PSYCH 215-0", prereq: "PSYCH 110", description: "Covers predominant theories in personalities psychology"}

];

function submitButtonClicked() {
   //move on to classes page
   loadSearchList(listof_courses);
   console.log("hello")
}

function loadSearchList(listof_courses) {
   let template = `<div class="courseListings"></div>`;
   document.getElementsByClassName("filters")[0].innerHTML = template;
   for (course of listof_courses) {
      let template = `
         <a class="list-group-item">
            <div class="coursesItem">
               <h2>${course.name}</h2>
               <h3>pre-req:${course.prereq}</h3>
               <p>Description:${course.description}</p>
            </div>
         </a>`;

      document.getElementsByClassName("courseListings")[0].innerHTML += template;
   }
}
