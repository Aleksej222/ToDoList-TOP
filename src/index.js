import { Task } from "./Task";
// import { Project } from "./Project";
import { addNewProject } from "./addNewProject";

let tasksContainer = document.querySelector('.tasks-container');


let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

export let allProjects = [];


let btnTestFnc = document.querySelector('.edit-task');

btnTestFnc.addEventListener('click', testThis);

function testThis() {
    console.log(allProjects);
}

// TODO: Projekti ne mogu imat isto ime (zbog id konflikta)