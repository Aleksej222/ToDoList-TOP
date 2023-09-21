import { Project } from "./Project";
import { allProjects } from ".";
import generateId from "./generateId";

let newProjectContainer;
let projectsHtml = document.querySelector('.projects');

// Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

// ** Main function that creates project
export function addNewProject() {

    // ** Call function only if new project html doesn't exist in DOM
    if (document.querySelector('.new-project-container') == null) {
        projectsHtml.appendChild(drawNewProjectHTML());
    }

    //console.log(this);  // 'this' is button that is clicked
}

// ** Create HTML for new project
function drawNewProjectHTML() {

    newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');

    // ** Kreirat simple input field i kvacicu pored u listi (vidit dizajn na TOP primjeru)
    let input = document.createElement('input');
    input.setAttribute('maxLength', 25);
    // input.setAttribute('required','');

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

    let projectId = generateId();
    let inputText = newProjectContainer.querySelector('input').value;

    let newProject = new Project(projectId,inputText, []);

    projectValid = checkIfProjectValid(newProject);
    if (projectValid) {

        newProjectCreated = true;
        allProjects.push(newProject);
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
   
    if (newProjectCreated) {
        appendProjectToDOM(newProject); 
    }

    deleteNewProjectHTML();
}

// ** Append new project to the DOM
export function appendProjectToDOM(project) {

    let projectsList = projectsHtml.querySelector('ul');

    let createdProject = document.createElement('li');
    createdProject.classList.add('project');
    createdProject.innerText = project.title;
    createdProject.setAttribute('id', project.title);

    let numberOfTasks = document.createElement('span');
    numberOfTasks.classList.add('.number-of-tasks');
    // numberOfTasks.innerText = project.tasks.length;
    createdProject.appendChild(numberOfTasks);

    projectsList.appendChild(createdProject)
    projectsHtml.appendChild(projectsList);
}

// ** Check if new project has a valid name
function checkIfProjectValid(newProject) {

    let isValid = false;
    let errorMsg = '';

    let isDuplicate = projectTitleDuplicate(newProject.title);
    if (isDuplicate) {
        errorMsg = 'Project with that name already exists.';
    }

    let isEmpty = projectTitleEmpty(newProject.title);
    if (isEmpty) {
        errorMsg = 'Project name can\'t be empty.';
    }    

    let isTooLong = projectTitleTooLong(newProject.title);
    if (isTooLong) {
        errorMsg = 'Project name is too long.';
    }

    let errorMsgSpan = document.querySelector('.error-message');
    errorMsgSpan.innerText = errorMsg;

    isValid = (isDuplicate == false);
    isValid = isValid && (isEmpty == false);
    isValid = isValid && (isTooLong == false);

    return isValid;
}

// Check if projects array contains project with same title
function projectTitleDuplicate(title) {

    let isDuplicate = false;

    allProjects.map(project => {
        
        if (project.title.toLowerCase() == title.toLowerCase()) {

            isDuplicate = true;
        }
        
    })

    return isDuplicate;
}

function projectTitleEmpty(title) {

    return title.length < 1 ? true : false;
}

function projectTitleTooLong(title) {

    return title.length >= 25 ? true : false;
}

// ?? Kako dohvatit allProjects arr (kako napravit taj deo), ili mozda napravit array allTasks pa odma tamo pushat (razmislit jos o ovom djelu)
// ?? Kako obrisat projekt (Na hover dodat x simbol, pogledat primjer na webu, stajling isto slican napravit)
// ** Brisanje projekta napravit u novom file-u

// TODO: Napravit funkciju za provjeravanje broja zadataka (ne prikazat kad je nula)
// ** Bug (minor): nula se dopise odma do zadatka (nula nebi ni trebala bit, a i treba bit razmak)
// TODO: Omogucit dodavanje projekta na enter tipku 
// ** numberOfTasks.innerText = project.tasks.length; - linija, dodat kasnije na add task, kad se bude mijenjao broj zadataka u projektu
// TODO: Onemogucit imena projekta sa glavne liste (all-tasks...)

// TODO: Uklonit razlicita imena za projekte (bazirano na id) (provjerit za main opcije, dal imaju id, i dodat ako nemaju)