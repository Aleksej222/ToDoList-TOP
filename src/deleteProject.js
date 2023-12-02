import { allProjects } from ".";
import { selectedProject } from "./showCorrectProject";


// ** Delete the whole project, and all of its tasks
export function deleteProject() {

    // console.log('test');

    // let deleteBool = openConfirmationModal();
    openConfirmationModal();

}

let confirmationModal;
let confirmationContainer;

// ** Create html for confirmation modal window
function openConfirmationModal() {

    let taskContainer = document.querySelector('.tasks-container');

    confirmationModal = document.createElement('div');
    confirmationModal.classList.add('confirmation-modal');

    confirmationContainer = document.createElement('div');
    confirmationContainer.classList.add('confirmation-container');
    
    let messageText = document.createElement('span');
    messageText.textContent = 'Are you sure that you want to delete the whole project?'; 

    let btnConfirm = document.createElement('button');
    btnConfirm.textContent = 'Yes';
    btnConfirm.addEventListener('click', deleteProjectConfirmed);

    let btnDeny = document.createElement('button');
    btnDeny.textContent = 'No';
    btnDeny.addEventListener('click', cancelDelete);

    confirmationContainer.appendChild(messageText);
    confirmationContainer.appendChild(btnConfirm);
    confirmationContainer.appendChild(btnDeny);

    confirmationModal.appendChild(confirmationContainer);
    taskContainer.insertAdjacentElement('beforebegin',confirmationModal);

}

// ** Function that deletes the selected project
function deleteProjectConfirmed() {

}

// ** Cancel delete of project, delete modal window html
function cancelDelete() {
    confirmationModal.style.display = 'none';

}


// TODO: Dodat stajling za confirmation modal

// TODO: Postavit confirmation modal window, prije brisanja, sa upozorenjem
// TODO: Napravit refresh kad se obrise cijeli projekt (najlakse)