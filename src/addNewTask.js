import { Task } from "./Task";
import { selectedProject } from "./showCorrectProject";
import { allProjects } from ".";
import generateId from "./generateId";
import { updateTask } from "./updateTask";
import { deleteTask } from "./deleteTask";
import { changeNumberOfTasksHtml } from "./changeNumberOfTasksHtml";
import { createModalWindowHTML, closeModalWindow } from "./modalWindow";
import { validateTask } from "./validateTask";

// ** Main function that creates task
export function addNewTask() {
    
    openModalWindow();
}

// ** Open modal window on add task button click
function openModalWindow() {

    const tasksContainer = document.querySelector('.tasks-container');

    // TODO: Dodat position absolute (tako nekako), pravilno pozicionirat modal window
    tasksContainer.appendChild(createModalWindowHTML('add', null));

}

// ** Add task on button click
export function addTaskClicked(e) {
    e.preventDefault();  // Prevent from submiting form

    let taskId = generateId();
    let taskName = document.querySelector('input.task-name').value;
    let taskDate = document.querySelector('input.task-date').value;
    let taskDescription = document.querySelector('textarea.task-description').value;
    let taskPriority = document.querySelector('select.task-priority').value;
    
    let tasksContainer = document.querySelector('.tasks-container');
    let tasksList = tasksContainer.querySelector('.tasks-list');

    let newTaskCreated = false;
    let taskValid = false;

    let newTask = new Task(taskId, taskName, taskDescription, taskDate, taskPriority);

    // console.log(newTask);
    taskValid = validateTask(newTask);

    // console.log(selectedProject);
    
    if (taskValid) {
        newTaskCreated = true;
        selectedProject.tasks.push(newTask);
        
        console.log(selectedProject.tasks.length);
        changeNumberOfTasksHtml('increase', selectedProject.tasks.length);

    }

    if (newTaskCreated) {
        closeModalWindow();
        tasksList.appendChild(createTaskHTML(newTask));
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
}



// ** Create HTML for task
export function createTaskHTML(task) {

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    let taskDate = document.createElement('span');
    taskDate.classList.add('task-date');
    taskDate.innerText = task.date;

    let taskTitle = document.createElement('h4');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = task.title;

    let taskDescription = document.createElement('span');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;

    let taskBtns = document.createElement('div');
    taskBtns.classList.add('tasks-btns');

    let editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('btn-edit-task');
    editTaskBtn.innerText = 'pen';

    editTaskBtn.addEventListener('click', function() {
        updateTask(task);
    });

    let deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('btn-delete-task');
    deleteTaskBtn.innerText = 'trash-can';
    
    deleteTaskBtn.addEventListener('click', function() {
        deleteTask(task);
    });

    taskBtns.appendChild(editTaskBtn);
    taskBtns.appendChild(deleteTaskBtn);

    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskBtns);

    return taskContainer;

    // !! Color changes based on priority of the task
}  


// !! Bug: Required znak * prikaze samo na zadnjem polju
// ** Bug: Sprecit visestruko pojavljivanje add task html (napravit pravilan modal window)
// TODO: Dodat broj zadataka pored projekt imena u HTML-u
// ** Bug: Na update broja zadataka izbrise razmak (popravit sa css stajlingom)
// TODO: Dodat da na klik izvan modala zatvori modal window automatski (zato sto se modal prenese u sledeci projekt)
// TODO: Napravit decrease task funckciju, kad se izbirse zadatak da se pokaze ispravno u html

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