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
   { name: "Comp_Sci 214", prereq: "Comp_Sci211", status: "open", description: "data structure is good", academicreq: ["Core Courses"] },
   { name: "Comp_Sci 213", prereq: "Comp_Sci211", status: "open", description: "systems is kinda hard", academicreq: ["Core Courses"] },
   { name: "Sociol 110", prereq: "None", status: "open", description: "Sociology is a field of stufy that examines how people and groups interact.", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 348", prereq: "Comp_Sci 111, Comp_Sci 214", status: "open", description: "Core Techniques and applications of artificial intelligence.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "IEMS 201", prereq: "Math 234", status: "open", description: "Collecting, summarizing, and displaying data. Drawing conclusions and making decisions", academicreq: ["Basic Engineering"] },
   { name: "ECON 202-0", prereq: "None", status: "open", description: "Economics is the study of ...", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 212", prereq: "Comp_Sci 111", status: "open", description: "Fundamental concepts and tools in discrete math.", academicreq: ["Core Courses"] },
   { name: "ECON 210-0", prereq: "None", status: "open", description: "An intro to economics with an emphasis of macroeconomics.", academicreq: ["Theme Social Science"] },
   { name: "Civ_Env 216", prereq: "Gen_Eng 205-2", status: "open", description: "Analytical and experimental study of stresses and deformations and their application.", academicreq: ["Basic Engineering"] },
   { name: "Comp_Sci 371", prereq: "Comp_Sci 348", status: "open", description: "Principles and practices of knowledge representation, including logics and ontologies.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "Mat_Sci 201", prereq: "Chem 131", status: "open", description: "Introduces the core topis and basic concepts of Material Science", academicreq: ["Basic Engineering"] },
   { name: "Psych 201-0", prereq: "Psych 110", status: "open", description: "The analysis of data, using computer software and a conceptual approach.", academicreq: ["Theme Social Science"] },
   { name: "Comp_Eng 205", prereq: "None", status: "open", description: "Basics of assembly language programming. Macros, Systems, Stack, and procedure calls.", academicreq: ["Basic Engineering"] },
   { name: "PSYCH 110-0", prereq: "None", status: "open", description: "The purpose of this course is to present an overview of the field of psychology", academicreq: ["Theme Social Science"] },
   { name: "Comp_Sci 349", prereq: "Comp_Sci 214", status: "open", description: "The study of algorithms that improve automatically.", academicreq: ["Breadth Courses", "Depth Courses"] },
   { name: "PSYCH 215-0", prereq: "PSYCH 110", status: "open", description: "Covers predominant theories in personalities psychology", academicreq: ["Theme Social Science"] }

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

function backButtonClicked() {
   var removedList = document.getElementById("courseListingsPage");
   removedList.parentNode.removeChild(removedList);
   document.getElementsByClassName("filters")[0].style.display = "flex";
};

function addButtonClicked (name) {
   console.log("HELLO",name)
   if (listof_courses.length !== 0) {
      var courseChosen = document.getElementById("ListCourseName").innerHTML
      addtoShoppingCart(name)
   }
}

// stores list of class names in shopping cart
listof_cart = [];

function addtoShoppingCart(selected) {
   console.log(selected)
   var done = false
   for (var row = 0; row < 2; row++) {
      if (done) {
         break
      }
      for (var column = 1; column < 6; column++) {
         if (document.getElementsByClassName("placeholder" + row + "-" + column)[0].style.display !== "none") {
            continue
         }
         else {
            document.getElementsByClassName("placeholder" + row + "-" + column)[0].innerHTML = `<div>` + selected + `</div>`
            document.getElementsByClassName("placeholder" + row + "-" + column)[0].style.display = "flex"
            let cart_div_id = "shoppingCart" + (row*2+column);
            document.getElementById("shoppingCart" + (row*2+column)).onclick = function () { CartClicked(cart_div_id); };
            listof_cart.push(selected);
            done = true
            break
         }
      }
   }
}

///* Loads input list of classes *///
function loadSearchList(listof_courses) {
   document.getElementsByClassName("filters")[0].style.display = "none";
   let template = `<div id="courseListingsPage">
                     <button id="backButton" 
                     type="button" 
                     class="btn btn-primary notSelected" 
                     onclick="backButtonClicked()">Back</button>
                     <div class="courseListings"></div>
                  </div>`;
   document.getElementsByClassName("container")[0].innerHTML = template + document.getElementsByClassName("container")[0].innerHTML;
   /*document.getElementsByClassName("filters")[0].innerHTML = template;*/
   if (listof_courses.length == 0) {
      document.getElementsByClassName("courseListings")[0].innerHTML += `<h2 id="noresults">No Results</h2>`;
   };
   for (course of listof_courses) {
      let template = `
         <a class="list-group-item">
            <div class="coursesItem">
               <h2 id = "ListCourseName" >${course.name} </h2>
               <h5>status: ${course.status}</h5>
               <h5>pre-req: ${course.prereq}</h5>
               <p>Description: ${course.description}</p>
               <button type="button" class="btn btn-primary coursesItem" id="addButton"
                        onclick="addButtonClicked('`+ course.name + `')"> Add to Shopping Cart 
               </button>
            </div>
         </a>`;

      document.getElementsByClassName("courseListings")[0].innerHTML += template;
   }
}

// function that sets up the schedule for user with distinct ids
// id of 9am Monday will be "scheduleCell1-9", 10am Monday will be "scheduleCell1-10",
// 9 am Tuesday will be "scheduleCell2-9"

function prepareSchedule() {
   var schedule = document.getElementById("schedule")
   var tempInnerHTML = `<div style="border: solid 2px black;">`
   for (var hour = 9; hour < 19; hour ++) {
      var tempHTML = `<div class="scheduleRow">`
      for (var day = 1; day < 6; day++) {
         tempHTML += `<div class="card scheduleCell" name="scheduleCell" id="scheduleCell` + day + `-` + hour + `"> 
         </div>`
      }
      tempHTML += `</div>`
      tempInnerHTML += tempHTML
   }
   tempInnerHTML += `</div>`
   schedule.innerHTML = tempInnerHTML
}

// function that sets up the shopping cart for user with distinct ids
// ids will be "shoppingCart1", "shoppingCart2", etc.

function prepareShoppingCart() {
   var shoppingCart = document.getElementById("shoppingCart")
   var tempInnerHTML = `<div style="border: solid 2px black;">`
   for (var row = 0; row < 2; row++) {
      var tempHTML = `<div class="scheduleRow">`
      for (var column = 1; column < 6; column++) {
         tempHTML += `<div class="card scheduleCell notSelectedCart" name="shoppingCart" id="shoppingCart` + (row*2+column) + `"> 
         <div class="placeholder` + row + `-` + column + `" style="display: none"> </div>
         </div>`
      }
      tempHTML += `</div>`
      tempInnerHTML += tempHTML
   }
   tempInnerHTML += `</div>`
   shoppingCart.innerHTML = tempInnerHTML
}

// Renders the course color bt selected and unselected

function CartClicked(cart_div_id) {
   console.log(cart_div_id)
   let cart_course_div = document.getElementById(cart_div_id);
   console.log(cart_course_div.classList.contains('notSelectedCart'))
   if (cart_course_div.classList.contains('selectedCart')) {
      cart_course_div.classList.remove('selectedCart');
      cart_course_div.classList.add('notSelectedCart');
   }
   else if (cart_course_div.classList.contains('notSelectedCart')) {
      cart_course_div.classList.remove('notSelectedCart');
      cart_course_div.classList.add('selectedCart');
   }
}

// add the selected classes to the schedule list

function addCartButtonClicked() {
   // for each element in class selectedcourses
      // get innerHTML name
      // looks through the classes object for times
      // call addToSchedule with the class name
      let class_name = document.getElementsByClassName("")[0].innerHTML;
}

// renders the class onto the schedule list

function addToSchedule(course_name) {
   
}

// next time
function deleteCartButtonClicked() {

}

prepareSchedule()
prepareShoppingCart()
