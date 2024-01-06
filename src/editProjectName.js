import { allProjects } from ".";
import { selectedProject } from "./showCorrectProject";
import { checkIfProjectValid } from "./addNewProject";

// ** Edit project title on button click
export function editProjectName() {

    // createEditHtml();
    openEditProjectModal();

}

let projectNameInput;
let projectNameText;

let updateModal;
let updateContainer;

// ** Do the logic for project renaming
function editProjectNameClicked() {
    
    let validName = false;
    let saveNewName = false;

    let projectNameInput = document.querySelector('.project-name-input-edit');
    let newName = projectNameInput.value;
    
    let selectedProjectMenu = document.querySelector(`[id="${selectedProject.title}" ]`);
    let numberOfTasks = selectedProjectMenu.querySelector('.number-of-tasks');
    
    validName = checkIfProjectValid(newName);
    
    if (validName) {
        saveNewName = true;
        
        selectedProject.title = newName;
        
        selectedProjectMenu.id = newName;
        selectedProjectMenu.textContent = newName;
        
        numberOfTasks.textContent = "         " + String(selectedProject.tasks.length);
        selectedProjectMenu.textContent = selectedProjectMenu.textContent + numberOfTasks.textContent;

        localStorage.setItem('allProjects', JSON.stringify(allProjects));

        deleteModal();

    } 

    cancelEditHtml(saveNewName);

}

// ** Revert back to the the original html, if save true set new project title
function cancelEditHtml(save) {

    if (save == true) {
        projectNameText.textContent = projectNameInput.value;
    }

    projectNameText.style.display = 'block';

}

// ** Create html for edit project modal window
function openEditProjectModal() {

    let taskContainer = document.querySelector('.tasks-container');

    updateModal = document.createElement('div');
    updateModal.classList.add('confirmation-modal');

    updateContainer = document.createElement('div');
    updateContainer.classList.add('confirmation-container');

    let modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Edit project name';
    
    projectNameInput = document.createElement('input');
    projectNameInput.classList.add('input-field');
    projectNameInput.classList.add('project-name-input-edit');
    projectNameInput.setAttribute('type','text');
    
    projectNameText = document.querySelector('.project-name');
    projectNameInput.value = projectNameText.textContent;

    let errorMsg = document.createElement('span');
    errorMsg.classList.add('error-message');
    errorMsg.innerText = '';

    let btnsContainer = document.createElement('div');
    btnsContainer.classList.add('confirmation-buttons-container');

    let btnConfirm = document.createElement('button');
    btnConfirm.classList.add('btn');
    btnConfirm.textContent = 'Update';
    btnConfirm.addEventListener('click', editProjectNameClicked);

    let btnDeny = document.createElement('button');
    btnDeny.classList.add('btn');
    btnDeny.textContent = 'Cancel';
    btnDeny.addEventListener('click', deleteModal);

    btnsContainer.appendChild(btnConfirm);
    btnsContainer.appendChild(btnDeny);

    updateContainer.appendChild(modalTitle);
    updateContainer.appendChild(projectNameInput);
    updateContainer.appendChild(errorMsg);
    updateContainer.appendChild(btnsContainer);

    updateModal.appendChild(updateContainer);
    taskContainer.insertAdjacentElement('beforebegin',updateModal);

}

function deleteModal() {
    updateModal.style.display = 'none';
}


// TODO: Sve modal windowse prebacit u jednu funkciju (za brisanje modala obavezno)