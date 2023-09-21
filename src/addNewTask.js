import { Task } from "./Task";
import { selectedProject } from "./showCorrectProject";
import { createTaskHTML } from "./showCorrectProject";
import generateId from "./generateId";

// ** Main function that creates task
export function addNewTask() {
    
    console.log(selectedProject);

    // TODO: Saznat u kom se projektu nalazi user, i pushat zadatak u taj projekt

    // ** Dodat u selectedProject projekt zadatak
    openModalWindow();
}

// ** Open modal window on add task button click
function openModalWindow() {

    const tasksContainer = document.querySelector('.tasks-container');

    // TODO: Dodat position absolute (tako nekako), pravilno pozicionirat modal window
    tasksContainer.appendChild(createModalWindowHTML());

}

// ** Add task on button click
function addTaskClicked(e) {

    e.preventDefault();  // Prevent from submiting form

    let taskId = generateId();
    let taskName = document.querySelector('input.task-name').value;
    let taskDate = document.querySelector('input.task-date').value;
    let taskDescription = document.querySelector('textarea.task-description').value;
    let taskPriority = document.querySelector('select.task-priority').value;
    

    let newTaskCreated = false;
    let taskValid = false;

    let newTask = new Task(taskId, taskName, taskDescription, taskDate, taskPriority);

    console.log(newTask);
    taskValid = validateTask(newTask);

    if (taskValid) {

        newTaskCreated = true;
        // allProjects.push(newProject);
        // localStorage.setItem('allProjects', JSON.stringify(allProjects));

    }

    if (newTaskCreated) {

        // appendProjectToDOM(newProject);

    }
}

// ** Check if input is valid
function validateTask(task) {

    let taskOk = true;
    // TODO: Dohvatit errorMsg i mijenjat na osnovu greske
    let errorMsg = '';

    // ?? Pravilno ime za zadatk, otprilike 15 charactera, ostalo bi sve trebalo bit dozvoljeno
    // TODO: Dodat validaciju i u HTML (ili mozda ne, provjerit jos)
    if (task.title.length < 1) {
        // taskOk = false;
        errorMsg = 'Task name can\'t be empty.';
    }

    if (task.title.length > 15) {
        // taskOk = false;
        errorMsg = 'Task name can\'t be longer than 15 characters.';
    }

    // Promjenit na 150
    if (task.description.length > 15) {
        // taskOk = false;
        errorMsg = 'Task description can\'t be longer than 150 characters.';
    }

    // console.log(errorMsg);
    taskOk = (errorMsg == '');  // ?? Mozda je ovakva provjera ok
    // console.log(taskOk);

    return taskOk;

}

// ** Create HTML content for modal window
function createModalWindowHTML() {

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

// ** 
function getTodayDate() {
    const newDate = new Date();
    
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    const todayDate= year.toString() + '-' + month.toString()+ '-' + day.toString();
    return todayDate;
}

// !! Bug: Required znak * prikaze samo na zadnjem polju
// ** Bug: Sprecit visestruko pojavljivanje add task html (napravit pravilan modal window)

/*

<div id="myModal" class="modal">

    <!-- Modal content -->
    <div class="modal-content">
        <div class="container-modal">
            <div class="modal-top">
                <h3 class="add-book-title">Add New Book</h3>
                <span class="close">&times;</span>
            </div>

            <!-- Put required back later -->
            <div class="container-book-info">
                <form id="book-info-form" action="" method="post">
                   
                    <div class="container-input">
                        <label for="title">Title<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="title" placeholder="Title" minlength="2">
                        <span class="error-message"><span aria-label="required">*</span> Book title is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="author">Author<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="author" placeholder="Author" minlength="2" maxlength="20">
                        <span class="error-message"><span aria-label="required">*</span> Book author is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="numOfPages">Pages<span aria-label="required">*</span></label>
                        <input data-form-field type="number" name="numOfPages" placeholder="Number of pages"
                            min="0">
                        <span class="error-message"><span aria-label="required">*</span> Number of pages is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="language">Language<span aria-label="required">*</span></label>
                        <input data-form-field type="text" name="language" placeholder="Language"
                            minlength="2" maxlength="20">
                        <span class="error-message"><span aria-label="required">*</span> Book language is
                            required</span>
                    </div>

                    <div class="container-input">
                        <label for="read">Read<span aria-label="required">*</span></label>
                        <select data-form-field name="read">
                            <option value="" disabled selected>Did you read the book?</option>
                            <option value=true>Read</option>
                            <option value=false>Didn't read</option>
                        </select>
                        <span class="error-message"><span aria-label="required">*</span> Reading status is
                            required</span>
                    </div>

                    <div class="container-btn-submit">
                        <button id="submit-book" type="submit" class="btn btn-submit">Submit</button>
                    </div>

                </form>
            </div>

        </div>

    </div>

</div>
*/