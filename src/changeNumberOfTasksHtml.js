import { selectedProject } from "./showCorrectProject";
import { totalNumberOfTasks } from ".";
import { setAllTasksNumber } from "./setAllTasksNumber";
import { setTodayTasksNumber } from "./setTodayTasksNumber";
import { setThisWeekTasksNumber } from "./setThisWeekTasksNumber";

// ** Set tasks number inside of a project on task added/deleted
export function changeNumberOfTasksHtml(action, numberOfTasks) {

    // console.log(selectedProject);
    // if (!selectedProject) return;

    let selectedProjectMenu = document.querySelector(`[id="${selectedProject.title}" ]`);
    let numberOfTasksHtml = selectedProjectMenu.querySelector('.number-of-tasks');


    //if (!selectedProject) {

        // let projectName = document.querySelector('.project-name').textContent;
        // let optionSelected = document.querySelector(`[id="${projectName}" ]`);
    //}

    numberOfTasksHtml.textContent = numberOfTasks;

    if (action == 'increase') {
        totalNumberOfTasks++;
        
    } else if (action == 'decrease') {
        totalNumberOfTasks--;
    }

    updateNumberOfTasksHtml();  // Update html for all tasks

    return numberOfTasksHtml;

}

// ** Update all main options tasks number in html
function updateNumberOfTasksHtml() {

    setAllTasksNumber();
    setTodayTasksNumber();
    setThisWeekTasksNumber()

}