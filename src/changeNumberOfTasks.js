import { selectedProject } from "./showCorrectProject";

// ** Change tasks number inside of a project on task added/deleted
export function changeNumberOfTasks(action) {

    let selectedProjectMenu = document.querySelector(`[id="${selectedProject.title}" ]`);
    let numberOfTasksHtml = selectedProjectMenu.querySelector('.number-of-tasks');
    
    let numberOfTasks = Number(numberOfTasksHtml.textContent) + 1;

    if (action == 'increase') {
        numberOfTasks++;
    } else if (action == 'decrease') {
        numberOfTasks--;
    }

    console.log(numberOfTasks);
    numberOfTasksHtml.textContent = String(numberOfTasks);

    return numberOfTasksHtml;

}