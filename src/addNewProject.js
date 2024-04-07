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
}

// ** Create HTML for new project
function drawNewProjectHTML() {

    newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');

    // ** Create a simple input field
    let input = document.createElement('input');
    input.classList.add('input-field');
    input.setAttribute('maxLength', 25);
    // input.setAttribute('required','');
    input.addEventListener('keypress', function(e) {

        if (e.key == 'Enter') {
            createProject();
        }

    });

    let errorMsg = document.createElement('span');
    errorMsg.classList.add('error-message');
    errorMsg.innerText = '';

    let btnAddProject = document.createElement('button');
    btnAddProject.classList.add('btn');
    btnAddProject.innerText = 'Add project';
    btnAddProject.addEventListener('click', createProject);

    let btnCancel = document.createElement('button');
    btnCancel.classList.add('btn');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', deleteNewProjectHTML);

    newProjectContainer.appendChild(input);
    newProjectContainer.appendChild(errorMsg);
    newProjectContainer.appendChild(btnAddProject);
    newProjectContainer.appendChild(btnCancel);

    return newProjectContainer;
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
        location.reload();  // To avoid bug, where you can't click on the newly created project
        deleteNewProjectHTML();
    }

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
    
    numberOfTasks.innerText = "         " + project.tasks.length;  // TODO: Fix format later (using css)

    createdProject.appendChild(numberOfTasks);

    projectsList.appendChild(createdProject);
    projectsHtml.appendChild(projectsList);
}

// ** Check if new project has a valid name
export function checkIfProjectValid(newProjectTitle) {

    let isValid = false;
    
    let errorMsg = document.querySelector('.error-message');
    let errorMsgText = '';

    let isDuplicate = projectTitleDuplicate(newProjectTitle);
    if (isDuplicate) {
        errorMsgText = 'Project with that name already exists.';
    }

    let isEmpty = projectTitleEmpty(newProjectTitle);
    if (isEmpty) {
        errorMsgText = 'Project name can\'t be empty.';
    }    

    let isTooLong = projectTitleTooLong(newProjectTitle);
    if (isTooLong) {
        errorMsgText = 'Project name is too long.';
    }

    let isMainOption = projectTitleIsMainOption(newProjectTitle);
    if (isMainOption) {
        errorMsgText = "Project name can't be the same as the main option name.";
    }

    errorMsg.innerText = errorMsgText;

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