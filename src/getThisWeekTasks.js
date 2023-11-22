import { allTasks } from "./getAllTasks";
import { getTodayDate } from "./getDate";
import { getLastWeekDate } from "./getDate";

// ** Show tasks that are in this week
export function getThisWeekTasks() {

    let thisWeekTasks = [];
    let todayDate = getTodayDate();
    let lastWeekDate = getLastWeekDate();
   
    allTasks.forEach(task => {

        if (task.date <= todayDate && task.date >= lastWeekDate) {
            thisWeekTasks.push(task);
        }

    });

    return thisWeekTasks;

}