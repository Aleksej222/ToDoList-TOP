import { allTasks } from "./getAllTasks";
import { getTodayDate } from "./getDate";

// ** Get tasks with today's date
export function getTodayTasks() {

    let todayTasks = [];
    let todayDate = getTodayDate();

    allTasks.forEach(task => {

        if (task.date == todayDate) {
            todayTasks.push(task);
        }

    });

    return todayTasks;
}