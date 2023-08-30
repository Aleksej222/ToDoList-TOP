import { Task } from "./Task";
import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";


export let allProjects;

// ** Get projects from local storage if they exist
if (localStorage.getItem('allProjects')) {
    
    allProjects = localStorage.getItem('allProjects');
    allProjects = JSON.parse(allProjects);
    showProjects();  // ** Call function if projects exist
}

function showProjects() {

    allProjects.forEach(project => {

        appendProjectToDOM(project);

    });

}


let tasksContainer = document.querySelector('.tasks-container');

let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

let btnTestFnc = document.querySelector('.edit-task');

btnTestFnc.addEventListener('click', testThis);

function testThis() {
    console.log(allProjects);
}

// ** Lepo rasporedit kod po fajlovima, za dodavanje projekta u jedan, za brisanje u drugi, za edit u treci (primjer)
// ?? Di ide kod za prve tri opcije (all tasks....), kako to izvest
