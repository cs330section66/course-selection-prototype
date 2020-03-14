//shows selectedButton page when the button is pressed, disables other page page and edits the layout
function pageButtonsPressed(selectedButton) {
   document.getElementById("welcome").style.display = "none"
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
   enableAcademicReq(major)
}

//displays the course filter the user selects
function courseFilterSelected(filterName) {
   if (filterName !== "None") {
      document.getElementById("classNoInput").disabled = false
   }
   document.getElementById("courseFilter").innerHTML = filterName
}

//displays the academic requirement selected
function academicReqSelected(req) {
   document.getElementById("reqButton").innerHTML = req
}

let listof_courses = [
   { name: "Comp_Sci 214", prereq: "Comp_Sci211", status: "open", description: "data structure is good", academicreq: ["Core Courses"], times: [{ day: 2, start: 16, end: 17.5 }, { day: 4, start: 16, end: 17.5 }] },
   { name: "Comp_Sci 213", prereq: "Comp_Sci211", status: "open", description: "systems is kinda hard", academicreq: ["Core Courses"], times: [{ day: 2, start: 12.5, end: 14 }, { day: 4, start: 12.5, end: 14 }] },
   { name: "Sociol 110", prereq: "None", status: "open", description: "Sociology is a field of stufy that examines how people and groups interact.", academicreq: ["Theme Social Science"], times: [{ day: 1, start: 12.5, end: 14 }, { day: 3, start: 12.5, end: 14 }] },
   { name: "Comp_Sci 348", prereq: "Comp_Sci 111, Comp_Sci 214", status: "open", description: "Core Techniques and applications of artificial intelligence.", academicreq: ["Breadth Courses", "Depth Courses"], times: [{ day: 1, start: 15, end: 16 }, { day: 3, start: 15, end: 16 }, { day: 5, start: 15, end: 16 }] },
   { name: "IEMS 201", prereq: "Math 234", status: "open", description: "Collecting, summarizing, and displaying data. Drawing conclusions and making decisions", academicreq: ["Basic Engineering"], times: [{ day: 2, start: 12.5, end: 14 }, { day: 4, start: 12.5, end: 14 }] },
   { name: "ECON 202-0", prereq: "None", status: "open", description: "Economics is the study of ...", academicreq: ["Theme Social Science"], times: [{ day: 1, start: 11, end: 12 }, { day: 3, start: 11, end: 12 }, { day: 5, start: 11, end: 12 }] },
   { name: "Comp_Sci 212", prereq: "Comp_Sci 111", status: "open", description: "Fundamental concepts and tools in discrete math.", academicreq: ["Core Courses"], times: [{ day: 1, start: 4, end: 5 }, { day: 3, start: 4, end: 5 }, { day: 5, start: 4, end: 5 }] },
   { name: "ECON 210-0", prereq: "None", status: "open", description: "An intro to economics with an emphasis of macroeconomics.", academicreq: ["Theme Social Science"], times: [{ day: 1, start: 13, end: 14 }, { day: 3, start: 13, end: 14 }, { day: 5, start: 13, end: 14 }] },
   { name: "Civ_Env 216", prereq: "Gen_Eng 205-2", status: "open", description: "Analytical and experimental study of stresses and deformations and their application.", academicreq: ["Basic Engineering"], times: [{ day: 1, start: 11, end: 12 }, { day: 3, start: 11, end: 12 }, { day: 5, start: 11, end: 12 }] },
   { name: "Comp_Sci 371", prereq: "Comp_Sci 348", status: "open", description: "Principles and practices of knowledge representation, including logics and ontologies.", academicreq: ["Breadth Courses", "Depth Courses"], times: [{ day: 2, start: 14, end: 15.5 }, { day: 4, start: 14, end: 15.5 }] },
   { name: "Mat_Sci 201", prereq: "Chem 131", status: "open", description: "Introduces the core topis and basic concepts of Material Science", academicreq: ["Basic Engineering"], times: [{ day: 1, start: 10, end: 11 }, { day: 3, start: 10, end: 11 }, { day: 5, start: 10, end: 11 }] },
   { name: "Psych 201-0", prereq: "Psych 110", status: "open", description: "The analysis of data, using computer software and a conceptual approach.", academicreq: ["Theme Social Science"], times: [{ day: 2, start: 12.5, end: 14 }, { day: 4, start: 12.5, end: 14 }] },
   { name: "Comp_Eng 205", prereq: "None", status: "open", description: "Basics of assembly language programming. Macros, Systems, Stack, and procedure calls.", academicreq: ["Basic Engineering"], times: [{ day: 1, start: 14, end: 15 }, { day: 2, start: 14, end: 15 }, { day: 3, start: 14, end: 15 }, { day: 5, start: 14, end: 15 }] },
   { name: "PSYCH 110-0", prereq: "None", status: "open", description: "The purpose of this course is to present an overview of the field of psychology", academicreq: ["Theme Social Science"], times: [{ day: 2, start: 11, end: 12.5 }, { day: 4, start: 11, end: 12.5 }] },
   { name: "Comp_Sci 349", prereq: "Comp_Sci 214", status: "open", description: "The study of algorithms that improve automatically.", academicreq: ["Breadth Courses", "Depth Courses"], times: [{ day: 1, start: 15.5, end: 17 }, { day: 3, start: 15.5, end: 17 }] },
   { name: "PSYCH 215-0", prereq: "PSYCH 110", status: "open", description: "Covers predominant theories in personalities psychology", academicreq: ["Theme Social Science"], times: [{ day: 1, start: 10, end: 11 }, { day: 3, start: 10, end: 11 }] }

];


function enableAcademicReq(major) {
   if (major !== "None") {
      document.getElementById("reqButton").disabled = false
   }
   else {
      document.getElementById("reqButton").disabled = true
   }

}


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
   prepareShoppingCart()
   for (var course of listof_cart) {
      addtoShoppingCart(course)
   }
   document.querySelector('#searchInput').onkeyup = (ev) => inputEventListener(ev)
};

function addButtonClicked(name) {
   if (listof_courses.length !== 0) {
      var courseChosen = document.getElementById("ListCourseName").innerHTML
      addtoShoppingCart(name)
      document.getElementById("addButton" + name).disabled = true
      document.getElementById("addButton" + name).innerHTML = "Added to Shopping Cart"

   }
}

// Stores list of class names in shopping cart
var listof_cart = [];
var classesAndIds = {}

function addtoShoppingCart(selected) {
   document.getElementById("shoppingCartBackground").style.display = "none";
   if (listof_cart.indexOf(selected) === -1) {
      listof_cart.push(selected);
   }
   else {
      var cart_button_class = classesAndIds[selected][1]
      document.getElementsByClassName(cart_button_class)[0].innerHTML = selected;
      document.getElementsByClassName(cart_button_class)[0].style.display = "flex";
      document.getElementsByClassName(classesAndIds[selected][1])[0].onclick = function () {
         CartClicked(selected, cart_button_class);
      };
      return
   }
   var done = false
   for (var row = 0; row < 2; row++) {
      if (done) {
         break
      }
      for (var column = 1; column < 6; column++) {
         let cart_div_id = "shoppingCart" + row + "-" + column;
         let cart_button_class = "placeholder" + row + "-" + column
         if (document.getElementsByClassName(cart_button_class)[0].style.display !== "none") {
            continue
         }
         else {
            document.getElementsByClassName(cart_button_class)[0].innerHTML = selected;
            document.getElementsByClassName(cart_button_class)[0].style.display = "flex";
            document.getElementsByClassName(cart_button_class)[0].onclick = function () {
               CartClicked(selected, cart_button_class);
            };
            classesAndIds[selected] = [cart_div_id,cart_button_class]
            done = true
            break
         }
      }
   }
   
}

///* Loads input list of classes *///
function loadSearchList(listof_courses) {
   prepareShoppingCart()
   for (var i = 0; i < listof_cart.length; i++) {
      var className = listof_cart[i]
      addtoShoppingCart(className)
   }
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
      var button = `<button type="button" class="btn btn-primary coursesItem" id="addButton` + course.name + `" 
      onclick="addButtonClicked('`+ course.name + `')" > Add to Shopping Cart 
</button>`
      var disabledButton = `<button type="button" class="btn btn-primary coursesItem" id="addButton` + course.name + `" 
      onclick="addButtonClicked('`+ course.name + `')" disabled > Added to Shopping Cart 
</button>`
      let template = `
         <a class="list-group-item">
            <div class="coursesItem">
               <h2 id = "ListCourseName" >${course.name} </h2>
               <h5>status: ${course.status}</h5>
               <h5>pre-req: ${course.prereq}</h5>
               <p>Description: ${course.description}</p>` + (listof_cart.includes(course.name) ? disabledButton : button) +

         `</div>
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
   for (var hour = 9; hour < 19; hour++) {
      var tempHTML = `<div class="scheduleRow">`
      for (var day = 1; day < 6; day++) {
         tempHTML += `<div class="scheduleCellWhole" name="scheduleCell" id="scheduleCell` + day + `-` + hour + `"> 
         </div>`
      }
      tempHTML += `</div>`
      tempInnerHTML += tempHTML
      var tempHTML = `<div class="scheduleRow">`
      for (var day = 1; day < 6; day++) {
         tempHTML += `<div class="scheduleCellHalf" name="scheduleCell" id="scheduleCell` + day + `-` + (hour + 0.5) + `"> 
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
         tempHTML += `<div class="card scheduleCell" name="shoppingCart" id="shoppingCart` + row + "-" + column + `"> 
         <button class="cartButton btn btn-primary notSelectedCart placeholder` + row + `-` + column + `" data-toggle="modal" data-target="#cartModalCenter" style="font-size: 75%; display: none" onclick="this.blur();"> </div>
         </button>`
      }
      tempHTML += `</div>`
      tempInnerHTML += tempHTML
   }
   tempInnerHTML += `</div>`
   shoppingCart.innerHTML = tempInnerHTML

   for (var course of listof_cart) {
      var id = classesAndIds[course][0]
      var className = classesAndIds[course][1]
      var div = document.getElementById(classesAndIds[course][0])
      var button = `<div class="card scheduleCell" name="shoppingCart" id="` + id + `"> 
      <button class="cartButton btn btn-primary ` + (listof_schedule.includes(course) ? "selectedCart" : "notSelectedCart") + ` ` + className +  `" data-toggle="modal" data-target="#cartModalCenter" style="font-size: 75%; display: none" onclick="CartClicked('${course}', '${className}')"> </div>
      </button>`
      div.innerHTML = button
   }
}


// searches listof courses for class times
// returns class time in usable format
function getClassTimes(class_name) {
   for (course of listof_courses) {
      if (course.name == class_name) {
         // add class time sortable format for adding and , return
         return course.times;
      }
   }
   return None;
}

function getAllClassInfo(class_name) {
   for (course of listof_courses) {
      if (course.name == class_name) {
         // add class time sortable format for adding and , return
         return { prereq: course.prereq, status: course.status, description: course.description, times: course.times };
      }
   }
   return None;
}

// converts day number to name
function dayToName(day) {
   var day_name = "Null"
   switch (day) {
      case 1:
         day_name = "Mo";
         break;
      case 2:
         day_name = "Tu"
         break;
      case 3:
         day_name = "Wed";
         break;
      case 4:
         day_name = "Thu";
         break;
      case 5:
         day_name = "Fri";
         break;
   }
   return day_name
}

// parse time storage [{day: #, start: #, end: #}, ...]
function renderTimes(times) {
   days = ""
   for (session of times) {
      day_name = dayToName(session.day)
      days += day_name
   }
   var intStart = Math.floor(session.start)
   if (intStart - session.start != 0) {
      start = intStart + ":30"
   }
   else {
      start = intStart.toString()
   }

   var intEnd = Math.floor(session.end)
   if (intEnd - session.end != 0) {
      end = intEnd + ":30"
   }
   else {
      end = intEnd.toString()
   }
   document.getElementById("modalTimes").innerHTML = `<h5>Times: ${days + start + "-" + end}</h5>`;
}

//renders the popup information
function renderModal(class_name) {
   let title_div = document.getElementById("modalTitle");
   title_div.innerHTML = class_name;
   let body_div = document.getElementById("modalBody");
   let info_obj = getAllClassInfo(class_name);
   let info_status = info_obj.status;
   let info_prereq = info_obj.prereq;
   let info_description = info_obj.description;
   document.getElementById("modalStatus").innerHTML = `<h5>Status: ${info_status}</h5>`;
   document.getElementById("modalPrereq").innerHTML = `<h5>Prereq: ${info_prereq}</h5>`;
   document.getElementById("modalDescription").innerHTML = `<h5>Description: ${info_description}</h5>`;
   let info_times = info_obj.times;
   renderTimes(info_times);
}

let listof_schedule = []


// Renders of class information on popup modal
function CartClicked(class_name, cart_button_class) {
   renderModal(class_name);
   // add schedule with the getClassTime outputted time
   // if class is in schedule, hide add button
   if (listof_schedule.indexOf(class_name) >= 0) {
      document.getElementById("cartAddButton").style.display = "none";
   }
   else {
      document.getElementById("cartAddButton").style.display = "flex";
   }
   document.getElementById("cartAddButton").onclick = function () { renderSelectedCartButton(cart_button_class); addSchedule(class_name, cart_button_class); };
   document.getElementById("cartRemoveButton").onclick = function () { removeCart(class_name); removeSchedule(class_name) };

}

// removed all class sesssion of a course if exists
function removeSchedule(class_name) {
   listof_schedule.splice(listof_schedule.indexOf("class_name"), 1);
   let listof_session_div = document.getElementsByClassName("classSession" + class_name);
   if (listof_session_div != []) {
      let length = listof_session_div.length;
      let i = 0;
      while (i < length) {
         listof_session_div[0].parentNode.removeChild(listof_session_div[0]);
         i++;
      }
   }
}

// Renders class infomation on popup modal and update onclick response
function ScheduleClicked(class_name, cart_button_class) {
   renderModal(class_name);
   // if class is in schedule, hide add button
   if (listof_schedule.indexOf(class_name) >= 0) {
      document.getElementById("cartAddButton").style.display = "none";
   }
   else {
      document.getElementById("cartAddButton").style.display = "flex";
   }
   document.getElementById("cartRemoveButton").onclick = function () { renderSelectedCartButton(cart_button_class); removeSchedule(class_name); };
}


// renders selected/notselected shopping cart button
function renderSelectedCartButton(cart_button_class) {
   let cart_course_button = document.getElementsByClassName(cart_button_class)[0]
   if (cart_course_button.classList.contains('selectedCart')) {
      cart_course_button.classList.remove('selectedCart');
      cart_course_button.classList.add('notSelectedCart');
   }
   else if (cart_course_button.classList.contains('notSelectedCart')) {
      cart_course_button.classList.remove('notSelectedCart');
      cart_course_button.classList.add('selectedCart');
   }
}
// add to button def below
// reponds to classSession button click hide addtoschedule button and modifies onclick like CartClicked()
//function classSessionClicked()
//removebutton onclick unhides add to schedule


// response to addSchedule button click
// adds button to schedule div
// use overflow and padding to create .5 hour blocks
function addSchedule(class_name, cart_button_class) {
   listof_schedule.push(class_name);
   let listof_class_times = getClassTimes(class_name);
   for (session of listof_class_times) {
      // if blocks conflict, style="width1/2"
      var session_start = session.start;
      var start_offset = 0
      var scheduleCell_div = document.getElementById("scheduleCell" + session.day + "-" + session_start);
      var session_length = session.end - session.start;
      var block_size = 200 * session_length;  // block height determined by end - start
      var template = `
         <button type="button" class="classSession${class_name} btn btn-primary classSession" onclick="ScheduleClicked('${class_name}', '${cart_button_class}')" data-toggle="modal" data-target="#cartModalCenter" style="height:${block_size}%;">${class_name}</button>
      `;
      //scheduleCell_div.style = `padding-top: ${start_offset}vh;`;
      scheduleCell_div.innerHTML = template;

   }
}

// --------!!!-------
// removes item from cart and if selected, removed from schedule
function removeCart(name) {
   listof_cart.splice(listof_cart.indexOf(name), 1)
   try {
      document.getElementById("addButton" + name).disabled = false
      document.getElementById("addButton" + name).innerHTML = "Add To Shopping Cart"
   }
   catch (e) {}
   prepareShoppingCart()
   for (var i = 0; i < listof_cart.length; i++) {
      var className = listof_cart[i]
      addtoShoppingCart(className)
   }

}

// renders user profile page
function renderUserProfile(username) {
   var profilePage = `
      <div id="profileBack">
         <button type="button" class="btn btn-primary notSelected" id="profileBackButton">
            back 
         </button>
      </div>
      <div id="profilePageInfo">
         <i class="fas fa-user-circle fa-6x"></i>
         <h1 style="font-size: 10vh;">${username}</h1>
         <h2 class="profilePageInfoLabels" style="font-size: 6vh;">Major: </h2>
            <p style="font-size: 4vh;">${user_info[username]["major"]}</p>
         <h2 class="profilePageInfoLabels" style="font-size: 6vh;">Academic Requirements: </h2>
            <ul id="requirementselem" class="list-group" style="font-size: 4vh;">Null</ul>
      </div>
   `;
   document.getElementById("accessPage").innerHTML = profilePage;
   document.getElementById("accessPage").id = "profilePage";
   document.getElementById("profileBackButton").onclick = function () {profileBackClicked(username)};
   var requirements_dict = user_info[username]["requirements"]
   var tempreq = ``;
   for (var key in requirements_dict) {
      var value = requirements_dict[key]
      tempreq += `<li class="list-group-item reqListItem">${key}: ${value}</li>`
   }
   document.getElementById("requirementselem").innerHTML = tempreq;
}

function profileBackClicked(username) {
   document.getElementById("profilePage").id = "accessPage";
   accessGranted(username);
}


var accessPage = null

function prepareLoginPage() {
   accessPage = document.getElementById("notAccessed").innerHTML
   document.getElementById("notAccessed").innerHTML = `<section class="loginPage" style="background-image: url('building.jpg')">
   <div class="loginPageCard">
       <h1 style="margin-left: 10%">Welcome to new CAESAR!</h1>
       <img src="northwestern-logo.jpeg" style="height: 50%; margin-left: 30%">
   </div>
   <div class="loginPageCard" id="personalInfo">
       <h1 style="margin-left: 10%; font-size: 5vh;">Please login to access your account</h1>
       <div class="loginPageCardInner">
           NetID:
           <input type="search" class="form-control innerFilterElement" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-sm" id="netID" placeholder="Your NetID">
       </div>
       <div class="loginPageCardInner">
           Password:
           <input type="password" class="form-control innerFilterElement" aria-label="Sizing example input"
               aria-describedby="inputGroup-sizing-sm" id="password" placeholder="Password">
       </div>
   </div>
</section>`
   document.querySelector('#password').onkeyup = (ev) => loginEventListener(ev)
}

function signout() {
   console.log("hello")
   document.getElementById("accessPage").id = "notAccessed"
   prepareLoginPage()
}

// stores different classes for diff users
user_info = {"Section66": {classes:["Comp_Sci 348", "Comp_Sci 213"], major: "Computer Science", requirements: {"Technical electives": 2, "Basic engineering": 1, "Social sciences theme": 2, "AI breadth": 1}}, "Section67":{classes:[], major: "Computer Engineering", requirements: {"Technical electives": 3, "AI breadth": 1}}}

// renders page based on user
function accessGranted(username) {
   document.getElementById("accessPage").innerHTML = accessPage
   prepareSchedule()
   prepareShoppingCart()
   document.querySelector('#searchInput').onkeyup = (ev) => inputEventListener(ev)
   classes = user_info[username]["classes"]
   for (course of classes) {
      addtoShoppingCart(course);
   }
   document.getElementById("profileName").innerHTML = username
   document.getElementById("profileButton").onclick = function () {
         renderUserProfile(username);
      };
}

function inputEventListener(ev) {
   if (ev.keyCode === 13) {
      loadSearchList(filterCourses(listof_courses))
   }
}

var loginFailed = false;

function loginEventListener(ev) {
   var netID = document.getElementById("netID").value
   var password = document.getElementById("password").value
   if (ev.keyCode === 13) {
      if (netID === "Section66" && password === "Section66") {
         document.getElementById("notAccessed").id = "accessPage"
         accessGranted("Section66")
      }
      else if (netID === "Section67" && password === "Section67") {
         document.getElementById("notAccessed").id = "accessPage"
         accessGranted("Section67")
      }
      else {
         if (!loginFailed) {
            document.getElementById("personalInfo").innerHTML += `<div class="loginPageCardInner" style="color: red"> 
            Your NetID and Password didn't match anyone in our records
            </div>`
            loginFailed = true
         }
         document.querySelector('#password').onkeyup = (ev) => loginEventListener(ev)
      }
   }
}

prepareLoginPage()



