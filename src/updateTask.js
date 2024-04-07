import { createModalWindowHTML } from "./modalWindow";
import { allProjects } from ".";
import { showTasksInAProject } from "./showTasksInAProject";
import { validateTask } from "./validateTask";
import { setTaskBackgroundColor } from "./setTaskBackgroundColor";

// ** Function for task update
export function updateTask(task) {
    const tasksContainer = document.querySelector('.tasks-container');
    tasksContainer.appendChild(createModalWindowHTML('update', task));
}

// ** Update task button was clicked, update task with new values
export function updateTaskClicked(taskUpdated) {
    
    let taskName = document.querySelector('input.task-name').value;
    let taskDate = document.querySelector('input.task-date').value;
    let taskDescription = document.querySelector('textarea.task-description').value;
    let taskPriority = document.querySelector('select.task-priority').value;

    let taskValid = false;
    
    taskUpdated.title = taskName;
    taskUpdated.date = taskDate;
    taskUpdated.description = taskDescription;
    taskUpdated.priority = taskPriority;

    taskValid = validateTask(taskUpdated);

    if (taskValid) {   
        localStorage.setItem('allProjects', JSON.stringify(allProjects));

        showTasksInAProject();
        setTaskBackgroundColor(taskPriority, taskUpdated.id);

    }    
}