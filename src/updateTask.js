import { createModalWindowHTML } from "./modalWindow";

// ** Function for task update
export function updateTask(taskUpdated) {
    // console.log(taskUpdated);
  

    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.appendChild(createModalWindowHTML('update', taskUpdated));

}

// ** Update task button was clicked, update task with new values
export function updateTaskClicked(e) {
    e.preventDefault();  // Prevent from submiting form

    
}


/*
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
        
        changeNumberOfTasks('increase');

    }

    if (newTaskCreated) {

        closeModalWindow();
        tasksList.appendChild(createTaskHTML(newTask));
        localStorage.setItem('allProjects', JSON.stringify(allProjects));
    }
}
*/