import { allProjects } from ".";

// ** Function that deletes task on button click
export function deleteTask(taskDeleted) {

    // console.log(allProjects);

    allProjects.forEach(project => {

        // console.log(project);

        project.tasks.forEach(task => {

            if (task.id == taskDeleted.id) {
                // console.log(taskDeleted);

                let index = project.tasks.indexOf(taskDeleted);

                // console.log(index);

            }
            // console.log(task == taskDeleted);
            // console.log(task);

        });

    });

    for (let i = 0; i < allProjects.length; i++) {

        let projectTasks = allProjects[i].tasks;
        // console.log(projectTasks);

        for (let j = 0; j < projectTasks.length; j++) {

            let task = projectTasks[j];
            // console.log(task);

            // Zadaci bez id daju gresku (tj sve ih pokupi), treba ih se svejedno izbrisat
            if (taskDeleted.id == task.id) {

                // console.log(task);
                // console.log(taskDeleted);

                // console.log(i, j);
                // console.log(projectTasks[j]);
                // console.log(allProjects[i].tasks[j]);

                allProjects[i].tasks.splice(0,1);  // Delete the correct task

                console.log(allProjects[i]);

            }

        }

    }

}

// !! Kako uklonit html zadatka