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

    projectValid = checkIfProjectValid(newProject.title);
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
    numberOfTasks.classList.add('number-of-tasks');
    
    // if (project.tasks.length > 0) {
        numberOfTasks.innerText = "         " + project.tasks.length;  // TODO: Fix format later (kasnije koristit css)
    // }

    createdProject.appendChild(numberOfTasks);

    projectsList.appendChild(createdProject)
    projectsHtml.appendChild(projectsList);
}

// ** Check if new project has a valid name
export function checkIfProjectValid(newProjectTitle) {

    let isValid = false;
    let errorMsg = '';

    let isDuplicate = projectTitleDuplicate(newProjectTitle);
    if (isDuplicate) {
        errorMsg = 'Project with that name already exists.';
    }

    let isEmpty = projectTitleEmpty(newProjectTitle);
    if (isEmpty) {
        errorMsg = 'Project name can\'t be empty.';
    }    

    let isTooLong = projectTitleTooLong(newProjectTitle);
    if (isTooLong) {
        errorMsg = 'Project name is too long.';
    }

    let isMainOption = projectTitleIsMainOption(newProjectTitle);
    if (isMainOption) {
        errorMsg = "Project name can't be the same as the main option name.";
    }

    let errorMsgSpan = document.querySelector('.error-message');
    errorMsgSpan.innerText = errorMsg;

    isValid = (isDuplicate == false);
    isValid = isValid && (isEmpty == false);
    isValid = isValid && (isTooLong == false);
    isValid = isValid && (isMainOption == false);

    return isValid;
}

//** Check if projects array contains project with same title
function projectTitleDuplicate(title) {

    let isDuplicate = false;

    allProjects.map(project => {
        
        if (project.title.toLowerCase() == title.toLowerCase()) {

            isDuplicate = true;
        }
        
    })

    return isDuplicate;
}

// ** Project title can't be empty
function projectTitleEmpty(title) {

    return title.length < 1 ? true : false;
}

// ** Project title can't be longer than 25 characters
function projectTitleTooLong(title) {

    return title.length >= 25 ? true : false;
}

// ** Project title can't have the same name as one of the main options
function projectTitleIsMainOption(title) {

    let isMainOption = (title.toLowerCase() == 'all tasks');
    isMainOption = isMainOption || (title.toLowerCase() == 'today');
    isMainOption = isMainOption || (title.toLowerCase() == 'this week')

    return isMainOption;
}




// TODO: Omogucit dodavanje projekta na enter tipku 
// !! Bug: Ne moze se otvorit projekt koji je tek dodan
// !! Bug: sa razmakom kod broja zadataka
// TODO: Popravit dizajn (3 taba razmaka) kod broja zadataka u projektu
