import { allProjects } from ".";
import { changeNumberOfTasksHtml } from "./changeNumberOfTasksHtml";
import { selectedProject } from "./showCorrectProject";
import { showTasksInAProject } from "./showTasksInAProject";

// ** Function that deletes task on button click
export function deleteTask(taskDeleted) {

    for (let i = 0; i < allProjects.length; i++) {
        let projectTasks = allProjects[i].tasks;

        for (let j = 0; j < projectTasks.length; j++) {
            let task = projectTasks[j];
        
            if (taskDeleted.id == task.id) {
                allProjects[i].tasks.splice(j,1);  // Delete the correct task
                localStorage.setItem('allProjects', JSON.stringify(allProjects));

                selectedProject = allProjects[i];  // Set selected project, so it picks correct value if tasks is deleted from main option
                changeNumberOfTasksHtml('decrease', allProjects[i].tasks.length);

            }
        }
    }
    
    showTasksInAProject();
}

// TODO: Dodat confirmation modal za brisanje zadatka