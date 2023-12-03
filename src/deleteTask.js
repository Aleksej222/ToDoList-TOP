import { allProjects } from ".";
import { changeNumberOfTasksHtml } from "./changeNumberOfTasksHtml";
import { showTasksInAProject } from "./showTasksInAProject";

// ** Function that deletes task on button click
export function deleteTask(taskDeleted) {

    for (let i = 0; i < allProjects.length; i++) {
        let projectTasks = allProjects[i].tasks;

        for (let j = 0; j < projectTasks.length; j++) {
            let task = projectTasks[j];
        
            if (taskDeleted.id == task.id) {
                allProjects[i].tasks.splice(j,1);  // Delete the correct task
                // localStorage.setItem('allProjects', JSON.stringify(allProjects));

                changeNumberOfTasksHtml('decrease', allProjects[i].tasks.length);
            }
        }
    }
    
    showTasksInAProject();
}


// !! Bug: undefined kad se brise zadatak iz all tasks, today i this week opcija