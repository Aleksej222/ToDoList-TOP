import { Task } from "./Task";
import { addNewProject } from "./addNewProject";
import { appendProjectToDOM } from "./addNewProject";

//export let allProjects = [];  // !! Ako bude bug sa varijablom
let allProjects = localStorage.getItem('allProjects');
allProjects = JSON.parse(allProjects);

function showProjects() {

    allProjects.forEach(project => {

        appendProjectToDOM(project);

    });

}

// ** Show all projects from allProjects array in the DOM when the page is loaded
showProjects();

let tasksContainer = document.querySelector('.tasks-container');

let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

let btnTestFnc = document.querySelector('.edit-task');

btnTestFnc.addEventListener('click', testThis);

function testThis() {
    console.log(allProjects);

    showProjects();
}

// TODO: funkcija showProjects() (poziva se samo jednom, na otvaranju stranice)

// !! Vazan bug: ako je localStorage prazan bice bug sa varijablom i parserom (smislit kako bi se to popravilo)