import { getTodayDate } from "./getDate";

// ** Create HTML content for modal window, send 'create' or 'update'
export function createModalWindow(action) {

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal-window');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const containerModal = document.createElement('div');
    containerModal.classList.add('container-modal');   

    const modalTop = document.createElement('div');
    modalTop.classList.add('modal-top');

    let addTaskTitle = document.createElement('h3');
    addTaskTitle.innerText = 'Add New Task';
    
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

    let todayDate = getTodayDate();
    inputDate.value = todayDate; // Correct format: '2020-08-01';

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

    let spanDropdownError = document.createElement('span');
    spanDropdownError.classList.add('error-message');
    spanDropdownError.appendChild(spanRequired);

    containerInput4.appendChild(labelDropdown);
    containerInput4.appendChild(inputDropdown);
    containerInput4.appendChild(spanDropdownError);

    let btnSubmit = document.createElement('button');
    btnSubmit.innerText = 'Add task';
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.addEventListener('click', addTaskClicked);
    
    formTaskInfo.appendChild(containerInput1);
    formTaskInfo.appendChild(containerInput2);
    formTaskInfo.appendChild(containerInput3);
    formTaskInfo.appendChild(containerInput4);
    formTaskInfo.appendChild(btnSubmit);

    containerTaskInfo.appendChild(formTaskInfo);

    containerModal.appendChild(modalTop);
    containerModal.appendChild(containerTaskInfo);
    modalContent.appendChild(containerModal);
    modalWindow.appendChild(modalContent);

    return modalWindow;
}
