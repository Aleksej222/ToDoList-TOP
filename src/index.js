import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";
import { showCorrectProject } from "./showCorrectProject";
import { addNewTask } from "./addNewTask";
import { setAllTasksNumber } from "./setAllTasksNumber";
import { setTodayTasksNumber } from "./setTodayTasksNumber";
import { setThisWeekTasksNumber } from "./setThisWeekTasksNumber";

export let allProjects;
export let totalNumberOfTasks = 0;

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
    option.addEventListener('click', showCorrectProject);
    
});

// ** Simulate click event, so that a function for showing tasks inside a project is called
listOptionSelected.click();

let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

let buttonAddTask = document.querySelector('.btn-add-task');
buttonAddTask.addEventListener('click', addNewTask);
