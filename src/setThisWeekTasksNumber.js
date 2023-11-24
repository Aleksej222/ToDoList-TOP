import { getThisWeekTasks } from "./getThisWeekTasks";

// ** Set this week number of tasks in html
export function setThisWeekTasksNumber() {

    let thisWeekTasksArr = getThisWeekTasks();
    let thisWeekNumberOfTasksHtml = document.querySelector('.this-week-tasks-number-of-tasks');
    thisWeekNumberOfTasksHtml.textContent = thisWeekTasksArr.length;

}