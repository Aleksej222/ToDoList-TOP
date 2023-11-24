import { getTodayTasks } from "./getTodayTasks";

// ** Set today number of tasks in html
export function setTodayTasksNumber() {

    let todayTasksArr = getTodayTasks(); 
    let todayNumberOfTasksHtml = document.querySelector('.today-tasks-number-of-tasks');
    todayNumberOfTasksHtml.textContent = todayTasksArr.length;
    
}