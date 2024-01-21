import { getTodayDate } from "./getDate";
import { addTaskClicked } from "./addNewTask";
import { updateTaskClicked } from "./updateTask";

let confirmationModal;

// ** Create HTML content for modal window
export function createModalWindowHTML(action, task) {

    confirmationModal = document.createElement('div');
    confirmationModal.classList.add('confirmation-modal');

    let modalWindow = document.createElement('div');
    modalWindow.classList.add('confirmation-container');
    modalWindow.classList.add('modal-window'); 

    const modalTop = document.createElement('div');
    modalTop.classList.add('modal-top');

    let addTaskTitle = document.createElement('h3');

    if (action == 'add') {
        addTaskTitle.innerText = 'Add New Task';

    } else if (action == 'update') {
        addTaskTitle.innerText = 'Update Task';
    }

    modalTop.appendChild(addTaskTitle);

    let containerTaskInfo = document.createElement('div');
    containerTaskInfo.classList.add('container-task-info');

    let formTaskInfo = document.createElement('form');
    // TODO: Set attributes later (for everything), look at html example

    let containerInput1 = document.createElement('div');
    containerInput1.classList.add('container-input');

    let labelTitle = document.createElement('label');
    labelTitle.innerText = 'Title';

    let inputTitle = document.createElement('input');
    inputTitle.classList.add('input-field');
    // inputTitle.classList.add('task');
    inputTitle.classList.add('task-name');

    if (action == 'update') {
        inputTitle.value = task.title;
    }

    containerInput1.appendChild(labelTitle);
    containerInput1.appendChild(inputTitle);
    
    // TODO: Kalendar za datum
    let containerInput2 = document.createElement('div');
    containerInput2.classList.add('container-input');

    let labelDate = document.createElement('label');
    labelDate.innerText = 'Date';

    let inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.classList.add('input-field');
    // inputDate.classList.add('task');
    inputDate.classList.add('task-date');

    if (action == 'update') {
        inputDate.value = task.date;

    } else if (action == 'add') {
        let todayDate = getTodayDate();
        inputDate.value = todayDate; // Correct format: '2020-08-01';
    }

    containerInput2.appendChild(labelDate);
    containerInput2.appendChild(inputDate);

    // TODO: Textarea za deskripciju
    let containerInput3 = document.createElement('div');
    containerInput3.classList.add('container-input');

    let labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description';

    let inputDescription = document.createElement('textarea');
    // inputDescription.classList.add('task');
    inputDescription.classList.add('task-description');

    if (action == 'update') {
        inputDescription.value = task.description;
    }

    containerInput3.appendChild(labelDescription);
    containerInput3.appendChild(inputDescription);
    
    // TODO: Dropdown za priority zadatka
    let containerInput4 = document.createElement('div');
    containerInput4.classList.add('container-input');

    let labelDropdown = document.createElement('label');
    labelDropdown.innerText = 'Priority';

    let inputDropdown = document.createElement('select');
    inputDropdown.classList.add('task-priority');
    
    let optionLow = document.createElement('option');
    optionLow.innerText = 'Low';
    optionLow.setAttribute('value', 'low');
    optionLow.setAttribute('selected', 'selected');

    let optionMedium = document.createElement('option');
    optionMedium.innerText = 'Medium';
    optionMedium.setAttribute('value', 'medium');
    
    let optionHigh = document.createElement('option');
    optionHigh.innerText = 'High';
    optionHigh.setAttribute('value', 'high');

    inputDropdown.appendChild(optionLow);
    inputDropdown.appendChild(optionMedium);
    inputDropdown.appendChild(optionHigh);

    if (action == 'update') {
        inputDropdown.value = task.priority;
    }

    containerInput4.appendChild(labelDropdown);
    containerInput4.appendChild(inputDropdown);

    let errorMsgSpan = document.createElement('span');
    errorMsgSpan.classList.add('error-task-validation-message');
    errorMsgSpan.textContent = '';

    let containerButtons = document.createElement('div');
    containerButtons.classList.add('container-buttons');

    let btnSubmit = document.createElement('button');
    btnSubmit.classList.add('btn');
    btnSubmit.classList.add('btn-modal');
    btnSubmit.setAttribute('type', 'submit');
   
    if (action == 'add') {
        
        btnSubmit.innerText = 'Add task';
        btnSubmit.addEventListener('click', addTaskClicked);

    } else if (action == 'update') {
        // btnSubmit.setAttribute('type', 'submit');
        btnSubmit.innerText = 'Update task';
        btnSubmit.addEventListener('click', function(e) {
            e.preventDefault();
            updateTaskClicked(task);
        });
    }
    
    let btnCancel = document.createElement('button');
    btnCancel.innerText = 'Cancel';
    btnCancel.classList.add('btn');
    btnCancel.classList.add('btn-modal');
    btnCancel.setAttribute('type', 'button');
    btnCancel.addEventListener('click', closeModalWindow);

    containerButtons.appendChild(btnSubmit);
    containerButtons.appendChild(btnCancel);
    
    formTaskInfo.appendChild(containerInput1);
    formTaskInfo.appendChild(containerInput2);
    formTaskInfo.appendChild(containerInput3);
    formTaskInfo.appendChild(containerInput4);

    formTaskInfo.appendChild(errorMsgSpan);
    
    formTaskInfo.appendChild(containerButtons);

    containerTaskInfo.appendChild(formTaskInfo);

    modalWindow.appendChild(modalTop);
    modalWindow.appendChild(containerTaskInfo);
    // modalContent.appendChild(containerModal);
    // modalWindow.appendChild(modalContent);

    confirmationModal.appendChild(modalWindow);

    // return modalWindow;
    return confirmationModal;
}

// ** Close the modal window on button click
export function closeModalWindow() {

    let modalWindow = document.querySelector('.modal-window');
    modalWindow.remove();

    confirmationModal.style.display = 'none';

}