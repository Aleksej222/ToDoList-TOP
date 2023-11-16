import { getTodayDate } from "./getDate";
import { addTaskClicked } from "./addNewTask";
import { updateTaskClicked } from "./updateTask";

// ** Create HTML content for modal window
export function createModalWindowHTML(action, task) {

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window'); 

    const modalTop = document.createElement('div');
    modalTop.classList.add('modal-top');

    let addTaskTitle = document.createElement('h3');

    if (action == 'add') {
        addTaskTitle.innerText = 'Add New Task';

    } else if (action == 'update') {
        addTaskTitle.innerText = 'Update Task';
    }
    
    let closeTask = document.createElement('span');
    closeTask.classList.add('close-modal');
    closeTask.innerText = '&times;  ';

    modalTop.appendChild(addTaskTitle);
    modalTop.appendChild(closeTask);

    let containerTaskInfo = document.createElement('div');
    containerTaskInfo.classList.add('container-task-info');

    let formTaskInfo = document.createElement('form');
    // TODO: Set attributes later (for everything), look at html example

    let spanRequired = document.createElement('span');  // This span element is used multiple times
    spanRequired.innerText = '*';

    let containerInput1 = document.createElement('div');
    containerInput1.classList.add('container-input');

    let labelTitle = document.createElement('label');
    labelTitle.innerText = 'Title';
    labelTitle.appendChild(spanRequired);

    let inputTitle = document.createElement('input');
    // inputTitle.classList.add('task');
    inputTitle.classList.add('task-name');

    if (action == 'update') {
        inputTitle.value = task.title;
    }

    let spanTitleError = document.createElement('span');
    spanTitleError.classList.add('error-message');
    spanTitleError.appendChild(spanRequired);

    containerInput1.appendChild(labelTitle);
    containerInput1.appendChild(inputTitle);
    containerInput1.appendChild(spanTitleError);
    
    // TODO: Kalendar za datum
    let containerInput2 = document.createElement('div');
    containerInput2.classList.add('container-input');

    let labelDate = document.createElement('label');
    labelDate.innerText = 'Date';
    labelDate.appendChild(spanRequired);

    let inputDate = document.createElement('input');
    inputDate.type = 'date';
    // inputDate.classList.add('task');
    inputDate.classList.add('task-date');

    if (action == 'update') {
        inputDate.value = task.date;

    } else if (action == 'add') {
        let todayDate = getTodayDate();
        inputDate.value = todayDate; // Correct format: '2020-08-01';
    }

    let spanDateError = document.createElement('span');
    spanDateError.classList.add('error-message');
    spanDateError.appendChild(spanRequired);

    containerInput2.appendChild(labelDate);
    containerInput2.appendChild(inputDate);
    containerInput2.appendChild(spanDateError);

    // TODO: Textarea za deskripciju
    let containerInput3 = document.createElement('div');
    containerInput3.classList.add('container-input');

    let labelDescription = document.createElement('label');
    labelDescription.innerText = 'Description';
    labelDescription.appendChild(spanRequired);

    let inputDescription = document.createElement('textarea');
    // inputDescription.classList.add('task');
    inputDescription.classList.add('task-description');

    if (action == 'update') {
        inputDescription.value = task.description;
    }

    let spanDescriptionError = document.createElement('span');
    spanDescriptionError.classList.add('error-message');
    spanDescriptionError.appendChild(spanRequired);

    containerInput3.appendChild(labelDescription);
    containerInput3.appendChild(inputDescription);
    containerInput3.appendChild(spanDescriptionError);
    
    // TODO: Dropdown za priority zadatka
    let containerInput4 = document.createElement('div');
    containerInput4.classList.add('container-input');

    let labelDropdown = document.createElement('label');
    labelDropdown.innerText = 'Priority';
    labelDropdown.appendChild(spanRequired);

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

    let spanDropdownError = document.createElement('span');
    spanDropdownError.classList.add('error-message');
    spanDropdownError.appendChild(spanRequired);

    containerInput4.appendChild(labelDropdown);
    containerInput4.appendChild(inputDropdown);
    containerInput4.appendChild(spanDropdownError);

    let btnSubmit = document.createElement('button');
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
   

    let btnCacnel = document.createElement('button');
    btnCacnel.innerText = 'Cancel';
    btnCacnel.setAttribute('type', 'button');
    btnCacnel.addEventListener('click', closeModalWindow);
    
    formTaskInfo.appendChild(containerInput1);
    formTaskInfo.appendChild(containerInput2);
    formTaskInfo.appendChild(containerInput3);
    formTaskInfo.appendChild(containerInput4);
    formTaskInfo.appendChild(btnSubmit);
    formTaskInfo.appendChild(btnCacnel);

    containerTaskInfo.appendChild(formTaskInfo);

    modalWindow.appendChild(modalTop);
    modalWindow.appendChild(containerTaskInfo);
    // modalContent.appendChild(containerModal);
    // modalWindow.appendChild(modalContent);

    return modalWindow;
}

// ** Close the modal window on button click
export function closeModalWindow() {

    let modalWindow = document.querySelector('.modal-window');
    modalWindow.remove();

}