import { allProjects } from ".";
import { showCorrectProject } from "./showCorrectProject";

// ** Function that deletes task on button click
export function deleteTask(taskDeleted) {

    for (let i = 0; i < allProjects.length; i++) {
        let projectTasks = allProjects[i].tasks;

        for (let j = 0; j < projectTasks.length; j++) {
            let task = projectTasks[j];
        
            if (taskDeleted.id == task.id) {
                allProjects[i].tasks.splice(j,1);  // Delete the correct task
                localStorage.setItem('allProjects', JSON.stringify(allProjects));
            }
        }
    }
    
    showTasksInAProject()
}

// ** When task is deleted call showCorrectProject so it shows updated tasks in the project
function showTasksInAProject() {
    let projectName = document.querySelector('.project-name').textContent;
    
    let optionSelected = document.querySelector(`[id="${projectName}" ]`);

    optionSelected.addEventListener('click', showCorrectProject);
    optionSelected.click();
}



// ?? Da se dobije broj zadataka u main opcijama (all tasks...) uzet ukupan broj u html (pr. tasks.length, children.length) sa queryselector all, pogodit element