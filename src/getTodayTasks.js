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

// !! Bug: (od prije) ne prikaze novo dodane zadatke na prvi klik, mora se promjenit selected opcija i onda odabrat ponovo