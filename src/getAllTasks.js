import { allProjects } from ".";

export let allTasks;

// ** Get tasks from every project
export function getAllTasks() {
    allTasks = [];

    // Go through every element in the list (projects) and push all the tasks into the main array that will show those tasks
    allProjects.forEach(project => {

        project.tasks.forEach(task => {
            allTasks.push(task);
            
        });
    });

    return allTasks;  

}

