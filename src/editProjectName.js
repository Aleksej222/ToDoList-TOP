// ** Edit project title on button click
export function editProjectName() {
    
   createEditHtml();

}

function createEditHtml() {

    let projectTitleContainer = document.querySelector('.project-title-container');

    let projectNameInput = document.querySelector('.project-name-input-edit');
    let projectNameText = document.querySelector('.project-name');

    projectNameInput.style.display = 'block';
    projectNameInput.value = projectNameText.textContent;

    projectNameText.style.display = 'none';

    let editDoneBtn = document.createElement('button');
    editDoneBtn.textContent = "Check";

    editDoneBtn.addEventListener('click', editProjectNameClicked);

    projectTitleContainer.insertAdjacentElement('afterbegin', editDoneBtn);

}

function editProjectNameClicked() {
    
    let projectNameInput = document.querySelector('.project-name-input-edit');
    let newName = projectNameInput.value;

    // ?? Kako pronac pravi projekt
    // ?? Spremit promjene u projektu
    // TODO: Sklonit edit i delete button u main opcijama u listi

}

// ** Napravit da bude isto ko sa edit task (isto input da bude)