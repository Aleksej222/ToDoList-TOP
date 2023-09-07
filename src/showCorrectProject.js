import { allProjects } from ".";

// Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

// let listOptions = document.querySelectorAll('.menu-options > li');
// let listOptionSelected = listOptions[0];  // Default All tasks as selected option 

// ** Get the project that was clicked and show its tasks in the DOM
export function showCorrectProject() {

    
    let listOptionSelected = this.id;
    let selectedProject;

    switch (listOptionSelected) {
        case 'all-tasks':
            selectedProject = showAllTasks();
            break;

        case 'today-tasks':
            selectedProject = showTodayTasks();
            break;
    
        case 'this-week-tasks':
            selectedProject = showThisWeekTasks();
            break;

        default:
            selectedProject = otherProjectTasks(listOptionSelected);
            break;
    }
    

    // console.log(selectedProject);

    displayProjectTasks(selectedProject);

}

// ** Show tasks from every project
function showAllTasks() {

    let allTasksArr = [];

    // Proc kroz sve elemente u listi (projekte) i pushat sve zadatke u glavni array koji ce prikazat te zadatke
    allProjects.forEach(project => {

        project.tasks.forEach(task => {
            
            console.log(task);
            allTasksArr.push(task);

        });
    });

    return allTasksArr;  

}

// ** Show tasks with today's date
function showTodayTasks() {

}

// ** Show tasks that are in this week
function showThisWeekTasks() {

}

// ** Show tasks from project that is not in the main list (all-tasks...)
function otherProjectTasks(listOptionSelected) {

    let selectedProject = allProjects.find(project => {
        return project.title == listOptionSelected;
    });

    return selectedProject;

}

// ** Display selected project tasks in the DOM
function displayProjectTasks(selectedProject) {

    // console.log(selectedProject);

    // console.log(listOptions);

}