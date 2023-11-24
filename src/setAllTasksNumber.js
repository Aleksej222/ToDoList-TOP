import { getAllTasks } from "./getAllTasks";

// ** Set total number of tasks in html
export function setAllTasksNumber() {

    let allTasksArr = getAllTasks();
    let totalNumberOfTasksHtml = document.querySelector('.all-tasks-number-of-tasks');
    totalNumberOfTasksHtml.textContent = allTasksArr.length;

}