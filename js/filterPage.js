//shows selectedButton page when the button is pressed, disables other page page and edits the layout
function pageButtonsPressed(selectedButton) {
   var selectedDiv = document.getElementById(selectedButton);
   var unselectedDiv = document.getElementById(selectedButton === "selectClass" ? "selectMajor" : "selectClass")
   //"#1579f6" is dark blue
   selectedDiv.style.background = "#1579f6";
   selectedDiv.style.color = "white";
   unselectedDiv.style.background = "white";
   unselectedDiv.style.color = "#1579f6";

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
   { name: "Comp_Sci 214", prereq: "Comp_Sci211", description: "data structure is good", academicreq: ["Core Courses"] },
   { name: "Comp_Sci 213", prereq: "Comp_Sci211", description: "systems is kinda hard", academicreq: ["Core Courses"] },
   { name: "Sociol 110", prereq: "None", description: "Sociology is a field of stufy that examines how people and groups interact.", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 348", prereq: "Comp_Sci 111, Comp_Sci 214", description: "Core Techniques and applications of artificial intelligence.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "IEMS 201", prereq: "Math 234", description: "Collecting, summarizing, and displaying data. Drawing conclusions and making decisions", academicreq: ["Basic Engineering"] },
   { name: "ECON 202-0", prereq: "None", description: "Economics is the study of ...", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 212", prereq: "Comp_Sci 111", description: "Fundamental concepts and tools in discrete math.", academicreq: ["Core Courses"] },
   { name: "ECON 210-0", prereq: "None", description: "An intro to economics with an emphasis of macroeconomics.", academicreq: ["Theme Social Science"] },
   { name: "Civ_Env 216", prereq: "Gen_Eng 205-2", description: "Analytical and experimental study of stresses and deformations and their application.", academicreq: ["Basic Engineering"] },
   { name: "Comp_Sci 371", prereq: "Comp_Sci 348", description: "Principles and practices of knowledge representation, including logics and ontologies.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "Mat_Sci 201", prereq: "Chem 131", description: "Introduces the core topis and basic concepts of Material Science", academicreq: ["Basic Engineering"] },
   { name: "Psych 201-0", prereq: "Psych 110", description: "The analysis of data, using computer software and a conceptual approach.", academicreq: ["Theme Social Science"] },
   { name: "Comp_Eng 205", prereq: "None", description: "Basics of assembly language programming. Macros, Systems, Stack, and procedure calls.", academicreq: ["Basic Engineering"] },
   { name: "PSYCH 110-0", prereq: "None", description: "The purpose of this course is to present an overview of the field of psychology", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 349", prereq: "Comp_Sci 214", description: "The study of algorithms that improve automatically.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "PSYCH 215-0", prereq: "PSYCH 110", description: "Covers predominant theories in personalities psychology", academicreq: ["Theme Social Science"] }

];

function submitButtonClicked() {
   //move on to classes page
   var temp_list_of_courses = filterCourses(listof_courses)
   loadSearchList(temp_list_of_courses);
}

function filterCourses(listof_courses) {
   var filterType = document.getElementById("byAcadReq").style.display === "none" ? "selectClass" : "selectMajor"
   var filteredClassList = []
   if (filterType === "selectClass") {
      var keyword = document.getElementById("searchInput").value
      var choosenMajor = document.getElementById("majorButtonClass").innerHTML
      var courseNoEquality = document.getElementById("courseFilter").innerHTML
      var courseNocontraint = document.getElementById("classNoInput").value


      for (var i = 0; i < listof_courses.length; i++) {
         var className = listof_courses[i].name
         var PreRequisite = listof_courses[i].prereq
         var CourseDescription = listof_courses[i].description
         var classNameUpper = className.toUpperCase()
         if (keyword.length !== 0) {
            var keywordUpper = keyword.toUpperCase()
            var boolean = classNameUpper.includes(keywordUpper)
            if (!boolean) {
               continue
            }
         }
         if (!choosenMajor.includes("None")) {
            var MajorName = choosenMajor.split(' ')[0]
            var CourseMajor = classNameUpper.split(' ')[0]
            if (MajorName !== CourseMajor) {
               continue
            }
         }

         if (courseNoEquality !== "None" && courseNocontraint !== null) {
            var CourseNoTemp = classNameUpper.split(' ')[1]
            var CourseNo = CourseNoTemp.substr(0, 3)

            if (courseNoEquality === "is exactly") {
               if (CourseNo !== courseNocontraint) {
                  continue
               }
            }

            if (courseNoEquality === "less") {
               if (CourseNo > courseNocontraint) {
                  continue
               }
            }

            if (courseNoEquality === "greater") {
               if (CourseNo < courseNocontraint) {
                  continue
               }
            }

            if (courseNoEquality === "contains") {
               if (!(CourseNo.includes(courseNocontraint)) && !(PreRequisite.includes(courseNocontraint)) && !(CourseDescription.includes(courseNocontraint))) {
                  continue
               }
            }
         }
         filteredClassList.push(listof_courses[i])

      }
   }
   else {
      var choosenMajor = document.getElementById("majorButtonReq").innerHTML
      var AcademicReq = document.getElementById("reqButton").innerHTML
      for (var i = 0; i < listof_courses.length; i++) {
         var className = listof_courses[i].name
         var AcademicRequirements = listof_courses[i].academicreq
         if (!(AcademicRequirements.includes(AcademicReq))) {
            continue
         }
         filteredClassList.push(listof_courses[i])
      }

   }


   return (filteredClassList)


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
