import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";
import { showCorrectProject } from "./showCorrectProject";
import { addNewTask } from "./addNewTask";

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

let listOptions = document.querySelectorAll('.menu-options > li');
let listOptionSelected = listOptions[0];  // Default All tasks as selected option 

listOptions.forEach(option => {
    
    option.addEventListener('click', showCorrectProject);
    
});

// ** Simulate click event, so that a function for showing tasks inside a project is called
listOptionSelected.click();


// !! Test part
// let selectedProject = allProjects[0];

// let testTask = new Task('First task', 'This is first task created that belongs to the project.', '07.09.2023','low');
// selectedProject.tasks.push(testTask);
// let anotherTask = new Task('Random task', 'This task belongs to the same project.', '07.09.2023','medium');
// selectedProject.tasks.push(anotherTask);

// selectedProject = allProjects[1];
// let anotherProjectTask = new Task('Different project', 'This task belongs to the different project.', '07.09.2023','medium');
// selectedProject.tasks.push(anotherProjectTask);
// !! End test part

let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

let buttonAddTask = document.querySelector('.btn-add-task');
buttonAddTask.addEventListener('click', addNewTask);


// let btnTestFnc = document.querySelector('.edit-task');
// btnTestFnc.addEventListener('click', testThis);

// function testThis() {
//     // console.log(allProjects);

//     console.log(selectedProject);

    
// }

// ** Lepo rasporedit kod po fajlovima, za dodavanje projekta u jedan, za brisanje u drugi, za edit u treci (primjer)

// !! Kako dobit allTasks, popravit kad se napravi funkcija za dodavanje zadataka