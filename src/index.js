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


let buttonAddProject = document.querySelector('.btn-addProject');
buttonAddProject.addEventListener('click', addNewProject);

let listOptions = document.querySelectorAll('.menu-options > li');

// ?? Mozda napissat funkciju u posebnom file-u
listOptions.forEach(option => {

    option.addEventListener('click', showCorrectProject);

});

function showCorrectProject() {

    // ** Deo za prve tri opcije napisat odvojeno, tj malo drukcije
    console.log(this);

}

// let tasksContainer = document.querySelector('.tasks-container');

let btnTestFnc = document.querySelector('.edit-task');

btnTestFnc.addEventListener('click', testThis);

function testThis() {
    console.log(allProjects);
}

// ** Lepo rasporedit kod po fajlovima, za dodavanje projekta u jedan, za brisanje u drugi, za edit u treci (primjer)
// ?? Di ide kod za prve tri opcije (all tasks....), kako to izvest
