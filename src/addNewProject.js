import { Project } from "./Project";
import { allProjects } from ".";

let newProjectContainer;
let projectsHtml = document.querySelector('.projects');

export function addNewProject() {

    // ** Call function only if new project html doesn't exist in DOM
    if (document.querySelector('.new-project-container') == null) {
        projectsHtml.appendChild(drawNewProjectHTML());
    }

    //console.log(this);  // 'this' is button that is clicked
}

function addNewProjectPseudo() {

    drawNewProjectHTML()

    // ?? Kako dohvatit koje je dugme kliknuto
    if (btnAddProject.clicked) {

    createProject(input.text)

    } else {
    close()
    }
}

// ** Create HTML for new project
function drawNewProjectHTML() {

    newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');

    // ** Kreirat simple input field i kvacicu pored u listi (vidit dizajn na TOP primjeru)
    let input = document.createElement('input');

    let btnAddProject = document.createElement('button');
    btnAddProject.innerText = 'Add project';
    btnAddProject.addEventListener('click', createProject);

    let btnCancel = document.createElement('button');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', deleteNewProjectHTML);

    newProjectContainer.appendChild(input);
    newProjectContainer.appendChild(btnAddProject);
    newProjectContainer.appendChild(btnCancel);

    return newProjectContainer;

    // TODO: Dodat klase i stajling, i sta sve treba na elemente
}

// ** Delete HTML that is created on add project button
function deleteNewProjectHTML() {

    newProjectContainer.outerHTML = '';
}

// ** Create new project if it's valid and push it to the allProjects array
function createProject() {

    let newProjectCreated = false;
    let projectValid = false;

    let inputText = newProjectContainer.querySelector('input').value;
    // console.log(inputText);

    let newProject = new Project(inputText, []);

    projectValid = checkIfProjectValid(newProject);
    if (projectValid) {

        allProjects.push(newProject);
        newProjectCreated = true;

    }
   
    if (newProjectCreated) {
        appendProjectToDOM(newProject); 
    }

    deleteNewProjectHTML();
}

// ** Append new project to the DOM
function appendProjectToDOM(project) {

    let projectList = projectsHtml.querySelector('ul');
    let createdProject = document.createElement('li');
    createdProject.innerText = project.title;
    createdProject.setAttribute('id', project.title);

    // ?? Da li deo sa zadacima treba ici vamo (postavit broj zadataka samo kad projekat ima zadatke u sebi)
    let numberOfTasks = document.createElement('span');
    numberOfTasks.classList.add('.number-of-tasks');
    numberOfTasks.innerText = project.tasks.length;
    createdProject.appendChild(numberOfTasks);

    projectList.appendChild(createdProject)
    projectsHtml.appendChild(projectList);

}

// ** Check if new project has a valid name
function checkIfProjectValid(newProject) {

    // console.log(newProject);

    let bool = false;
    bool = true;
    // newProject.title = '';
     
    // TODO: Proc kroz sve projekte i usporedit imena, ne smje bit isto
    // TODO: Ime projekta ne moze bit prazno

    return bool;
}

// ?? Kako dohvatit allProjects arr (kako napravit taj deo), ili mozda napravit array allTasks pa odma tamo pushat (razmislit jos o ovom djelu)
// ?? Kako obrisat projekt (Na hover dodat x simbol, pogledat primjer na webu, stajling isto slican napravit)

// TODO: Dodat local storage kod kreiranja projekta (kad bude uspjesno obrisat test projekte u html)
// TODO: Napravit funkciju za provjeravanje broja zadataka (ne prikazat kad je nula)