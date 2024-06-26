import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";
import { showCorrectProject } from "./showCorrectProject";
import { addNewTask } from "./addNewTask";
import { setAllTasksNumber } from "./setAllTasksNumber";
import { setTodayTasksNumber } from "./setTodayTasksNumber";
import { setThisWeekTasksNumber } from "./setThisWeekTasksNumber";
import { editProjectName } from "./editProjectName";
import { deleteProject } from "./deleteProject";
import { setMenuContentVisibility, removeMenuContentVisibility } from "./responsiveDesign";

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
let listOptionSelected = listOptions[0];  // Default 'All tasks' as selected option 

listOptions.forEach(option => {
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
buttonHamburgerMenu.addEventListener('click', setMenuContentVisibility);

// ** Remove displaying menu over the whole screen if width is > 730px
window.addEventListener("resize", function () {
    let windowWidth = window.screen.width;
    
    if (windowWidth > 730) {
        removeMenuContentVisibility();
    }
});


// !! Bug: on updating tasks, number of tasks doesn't change if the date is set to today, but the task appears in the 'Today' project option.
// !! Bug: on adding/deleting tasks, number changes but there is no space between the project name and the number of tasks.
// !! Bug: on editing project name, works the first time, but can't edit again.
// !! Bug: on resizing window, hamburger menu icon doesn't revert to original state

// TODO: Code optimization.
// TODO: Add dark mode styling.
// TODO: Remove modal window when task update is complete.
// TODO: Fix design when adding/removing tasks. (number issue)
// TODO: Add confirmation modal when deleting tasks.