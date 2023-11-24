import { selectedProject } from "./showCorrectProject";
import { totalNumberOfTasks } from ".";
import { setAllTasksNumber } from "./setAllTasksNumber";
import { setTodayTasksNumber } from "./setTodayTasksNumber";
import { setThisWeekTasksNumber } from "./setThisWeekTasksNumber";

// ** Set tasks number inside of a project on task added/deleted
export function changeNumberOfTasksHtml(action, numberOfTasks) {

    let selectedProjectMenu = document.querySelector(`[id="${selectedProject.title}" ]`);
    let numberOfTasksHtml = selectedProjectMenu.querySelector('.number-of-tasks');

    numberOfTasksHtml.textContent = numberOfTasks;

    // console.log(selectedProjectMenu);
    // console.log(numberOfTasksHtml);

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

// TODO: Get today and this week tasks
// ?? Probat napravit zasebnu funkciju za today i this week odvojit i exportat broj zadataka, i onda samo pozvat na klik da prikaze zadatke