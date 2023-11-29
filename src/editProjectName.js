import { allProjects } from ".";
import { selectedProject } from "./showCorrectProject";
import { projectTitleDuplicate } from "./addNewProject";

// ** Edit project title on button click
export function editProjectName() {
    
   createEditHtml();

}

let editProjectNameBtn;
let deleteProjectBtn;
let projectNameInput;
let projectNameText;
let editDoneBtn;
let cancelEditBtn;

// ** Create html for new button, and hide old
function createEditHtml() {

    editProjectNameBtn = document.querySelector('.btn-edit-project');
    deleteProjectBtn = document.querySelector('.btn-delete-project');
    
    editProjectNameBtn.style.display = 'none';
    deleteProjectBtn.style.display = 'none';

    let projectTitleBtns = document.querySelector('.project-title-btns');

    projectNameInput = document.querySelector('.project-name-input-edit');
    projectNameText = document.querySelector('.project-name');

    projectNameInput.style.display = 'block';
    projectNameInput.value = projectNameText.textContent;

    projectNameText.style.display = 'none';

    editDoneBtn = document.createElement('button');
    editDoneBtn.textContent = "Done";

    cancelEditBtn = document.createElement('button');
    cancelEditBtn.textContent = 'Cancel';

    editDoneBtn.addEventListener('click', editProjectNameClicked);
    cancelEditBtn.addEventListener('click', function() {
        cancelEditHtml(false);
    });

    projectTitleBtns.appendChild(editDoneBtn);
    projectTitleBtns.appendChild(cancelEditBtn);

}

// ** Do the logic for project renaming
function editProjectNameClicked() {
    
    let validName = false;
    let saveNewName = false;

    let projectNameInput = document.querySelector('.project-name-input-edit');
    let newName = projectNameInput.value;
    
    let selectedProjectMenu = document.querySelector(`[id="${selectedProject.title}" ]`);
    let numberOfTasks = selectedProjectMenu.querySelector('.number-of-tasks');
    
    let isDuplicate = projectTitleDuplicate(newName);
    validName = (!isDuplicate);
    validName = validName & ((newName.length >= 1) & (newName.length <= 25));
    
    if (validName) {
        saveNewName = true;
        
        selectedProject.title = newName;
        
        selectedProjectMenu.id = newName;
        selectedProjectMenu.textContent = newName;
        
        numberOfTasks.textContent = "         " + String(selectedProject.tasks.length);
        selectedProjectMenu.textContent = selectedProjectMenu.textContent + numberOfTasks.textContent;

        localStorage.setItem('allProjects', JSON.stringify(allProjects));

    } 

    cancelEditHtml(saveNewName);

}

// ** Revert back to the the original html, if save true set new project title
function cancelEditHtml(save) {

    if (save == true) {
        projectNameText.textContent = projectNameInput.value;
    }

    projectNameText.style.display = 'block';
    projectNameInput.style.display = 'none';

    editProjectNameBtn.style.display = 'block';
    deleteProjectBtn.style.display = 'block';

    editDoneBtn.style.display = 'none';
    cancelEditBtn.style.display = 'none';

}


// ?? Kako update-at listu projekata u html
// TODO: Pocet pisat logiku za brisanje i za mijenjanje imena