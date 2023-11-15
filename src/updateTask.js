import { createModalWindowHTML } from "./modalWindow";
import { allProjects } from ".";
import { showTasksInAProject } from "./showTasksInAProject";

// ** Function for task update
export function updateTask(task) {
    // console.log(task);
  

    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.appendChild(createModalWindowHTML('update', task));

}

// ** Update task button was clicked, update task with new values
export function updateTaskClicked(taskUpdated) {
    
    let taskName = document.querySelector('input.task-name').value;
    let taskDate = document.querySelector('input.task-date').value;
    let taskDescription = document.querySelector('textarea.task-description').value;
    let taskPriority = document.querySelector('select.task-priority').value;

    taskUpdated.title = taskName;
    taskUpdated.date = taskDate;
    taskUpdated.description = taskDescription;
    taskUpdated.priority = taskPriority;

    let validUpdate = true;  // TODO: Fix later

    if (validUpdate) {

        localStorage.setItem('allProjects', JSON.stringify(allProjects));

        showTasksInAProject();

    }    
    
}

// TODO: Prepisat validaciju forme i za update (vjv napravit posebnu funkciju)