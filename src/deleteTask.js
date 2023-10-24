import { allProjects } from ".";

export function deleteTask(taskDeleted) {
    
    // console.log(task);
    // console.log(allProjects);

    allProjects.forEach(project => {

        // console.log(project);

        project.tasks.forEach(task => {

            if (task.id == taskDeleted.id) {
                console.log(taskDeleted);

                let index = project.tasks.indexOf(taskDeleted);

                console.log(index);

            }
            // console.log(task == taskDeleted);

        });

    });

}


// ?? Kako dobit pravilni index zadatka, tj. kako otrkit koji je pravi, i kako dobit poziciju.
// ?? Kako izbrisat zadatak iz arraya