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
    cancelEditBtn.addEventListener('click', cancelEditProjectName);

    projectTitleBtns.appendChild(editDoneBtn);
    projectTitleBtns.appendChild(cancelEditBtn);

}

// ** Do the logic for project renaming
function editProjectNameClicked() {
    
    let projectNameInput = document.querySelector('.project-name-input-edit');
    let newName = projectNameInput.value;



    // ?? Kako pronac pravi projekt
    // ?? Spremit promjene u projektu
    // TODO: Sklonit edit i delete button u main opcijama u listi

}

// ** Cancel edit of project name
export function cancelEditProjectName() {

    projectNameText.style.display = 'block';
    projectNameInput.style.display = 'none';

    editProjectNameBtn.style.display = 'block';
    deleteProjectBtn.style.display = 'block';

    editDoneBtn.style.display = 'none';
    cancelEditBtn.style.display = 'none';

}

// ** Napravit da bude isto ko sa edit task (isto input da bude)