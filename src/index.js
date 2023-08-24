import { Task } from "./Task";
import { Project } from "./Project";
import { addNewProject } from "./addNewProject";

let tasksContainer = document.querySelector('.tasks-container');


let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);


// TODO: Projekti ne mogu imat isto ime (zbog id konflikta)