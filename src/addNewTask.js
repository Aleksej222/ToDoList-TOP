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

    let doneTaskBtn = document.createElement('i');
    doneTaskBtn.classList.add('btn-done-task');
    doneTaskBtn.classList.add('fa');
    doneTaskBtn.classList.add('fa-check');
    
    doneTaskBtn.addEventListener('click', function() {
        deleteTask(task);  // Call delete function for now
    });


    let editTaskBtn = document.createElement('i');
    editTaskBtn.classList.add('btn-edit-task');
    editTaskBtn.classList.add('fa');
    editTaskBtn.classList.add('fa-edit');

    editTaskBtn.addEventListener('click', function() {
        updateTask(task);
    });

    let deleteTaskBtn = document.createElement('i');
    deleteTaskBtn.classList.add('btn-delete-task');
    deleteTaskBtn.classList.add('fa');
    deleteTaskBtn.classList.add('fa-trash');
    
    deleteTaskBtn.addEventListener('click', function() {
        deleteTask(task);
    });

    taskBtns.appendChild(doneTaskBtn);
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
// TODO: Na update broja zadataka izbrise razmak (popravit sa css stajlingom)
