import { showCorrectProject } from "./showCorrectProject";

// ** When task is deleted call showCorrectProject so it shows updated tasks in the project
export function showTasksInAProject() {
    let projectName = document.querySelector('.project-name').textContent;
    
    let optionSelected = document.querySelector(`[id="${projectName}" ]`);

    optionSelected.addEventListener('click', showCorrectProject);
    optionSelected.click();
}