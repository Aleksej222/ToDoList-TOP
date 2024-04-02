import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";
import { showCorrectProject } from "./showCorrectProject";
import { addNewTask } from "./addNewTask";
import { setAllTasksNumber } from "./setAllTasksNumber";
import { setTodayTasksNumber } from "./setTodayTasksNumber";
import { setThisWeekTasksNumber } from "./setThisWeekTasksNumber";
import { editProjectName } from "./editProjectName";
import { deleteProject } from "./deleteProject";
import { setMenuContentVisibility, setCorrectDisplay } from "./responsiveDesign";

export let allProjects;

// ** Get projects from local storage if they exist
if (localStorage.getItem('allProjects')) {
    
    allProjects = localStorage.getItem('allProjects');
    allProjects = JSON.parse(allProjects);
    showProjects();  // ** Call function if projects exist
}

// ** Call append function for every project in allProjects array
function showProjects() {

    allProjects.forEach(project => {
        appendProjectToDOM(project);

    });
}

// ** Call function for setting all tasks number
setAllTasksNumber();

// ** Call function for setting today tasks number
setTodayTasksNumber();

// ** Call function for setting this week tasks number
setThisWeekTasksNumber()

let listOptions = document.querySelectorAll('.menu-options > li');
let listOptionSelected = listOptions[0];  // Default All tasks as selected option 

listOptions.forEach(option => {
    // console.log(option);
    option.addEventListener('click', showCorrectProject);
    
});


// ** Simulate click event, so that a function for showing tasks inside a project is called
listOptionSelected.click();

// ** Add project on button click
let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

// ** Edit project name on button click
let buttonEditProject = document.querySelector('.btn-edit-project');
buttonEditProject.addEventListener('click', editProjectName);

// ** Delete project on button click
let buttondeleteProject = document.querySelector('.btn-delete-project');
buttondeleteProject.addEventListener('click', deleteProject);

// ** Add task on button click
let buttonAddTask = document.querySelector('.btn-add-task');
buttonAddTask.addEventListener('click', addNewTask);

// ** Hamburger menu design functionality
let buttonHamburgerMenu = document.querySelector("input[type='checkbox']#burger");
// buttonHamburgerMenu.addEventListener('click', setMenuContentVisibility);

buttonHamburgerMenu.addEventListener('click', setMenuContentVisibility);


// ** Function for setting correct display
// let windowWidth = window.screen.width;
// window.addEventListener("resize", function() {
    
//     if (windowWidth > 730) {
//         setCorrectDisplay()
//     }


//     // console.log(windowWidth > 730);
//     // console.log(typeof windowWidth);

// }, true);

// TODO: Kad se dodaje novi projekt popravit error gresku, da kad se klikne add da nestane greska
// TODO: Dodat pravilnu validaciju forme kod dodavanja zadataka
// TODO: Sklonit modal kad se update zadatak