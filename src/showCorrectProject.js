import { allProjects } from ".";
import { createTaskHTML } from "./addNewTask";
import { getTodayDate } from "./getDate";
import { getLastWeekDate } from "./getDate";
import generateId from "./generateId";
// import { allTasks } from ".";

// ** Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

export let selectedProject  // Send selected project to addNewTask
let listOptionSelected;
let allTasks;

// ** Get the project that was clicked and show its tasks in the DOM
export function showCorrectProject() {

    listOptionSelected = this.id;
    let selectedProjectTasks;

    let previousOptionSelected = document.querySelector('.project-name').innerText;

    if (previousOptionSelected !== listOptionSelected) {

        switch (listOptionSelected) {
            case 'All tasks':
                selectedProjectTasks = showAllTasks();
                break;
    
            case 'Today':
                selectedProjectTasks = showTodayTasks();
                break;
        
            case 'This week':
                selectedProjectTasks = showThisWeekTasks();
                break;
    
            default:
                selectedProjectTasks = otherProjectTasks(listOptionSelected);
                break;
        }
        
        clearTasksHTML();
        displayProjectTasks(listOptionSelected, selectedProjectTasks);
    }
    
}

// ** Show tasks from every project
function showAllTasks() {

    allTasks = [];
    // console.log(allTasks);

    // Go through every element in the list (projects) and push all the tasks into the main array that will show those tasks
    allProjects.forEach(project => {

        project.tasks.forEach(task => {
            allTasks.push(task);
            
        });
    });

    return allTasks;  
}

// ** Show tasks with today's date
function showTodayTasks() {

    let todayTasks = [];
    let todayDate = getTodayDate();

    allTasks.forEach(task => {

        if (task.date == todayDate) {
            todayTasks.push(task);

        }

    });

    return todayTasks;

}

// ** Show tasks that are in this week
function showThisWeekTasks() {

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

// ** Show tasks from project that is not in the main list (all-tasks...)
function otherProjectTasks(listOptionSelected) {

    let selectedProjectTasks = allProjects.find(project => {
        return project.title == listOptionSelected;
    });

    selectedProject = selectedProjectTasks;  // Don't understand why is selectedProjectTasks the whole project object

    return selectedProjectTasks.tasks;
}

// ** Display selected project tasks in the DOM
function displayProjectTasks(listOptionSelected, selectedProjectTasks) {

    let tasksContainer = document.querySelector('.tasks-container');
    let projectName = tasksContainer.querySelector('.project-name');
    let tasksList = tasksContainer.querySelector('.tasks-list');

    projectName.innerText = listOptionSelected;

    selectedProjectTasks.forEach(task => {
        
        tasksList.appendChild(createTaskHTML(task));

    });

    let addTaskBtn = document.querySelector('.btn-add-task');

    // Hide button if selected project is one of the main options
    if (listOptionSelected == 'All tasks' || listOptionSelected == 'Today' || listOptionSelected == 'This week') {
        addTaskBtn.style.display = 'none';
    }
    else {
        addTaskBtn.style.display = 'block';
    }

}

// ** Delete HTML content (tasks) to avoid same tasks on the same project
function clearTasksHTML() {

    let tasksList = document.querySelector('.tasks-list');
    tasksList.innerHTML = '';
}

//  return selectedProject;

// !! Bug: ne prikaze title novo dodanog projekta (listOptions u index fajlu vjv pravi problem, ucita se samo jednom i onda ne dobije nove projekte)
// !! Bug: ne prikaze zadatak koji je tek dodan u all tasks, today tasks i this week tasks (bez refresh-a stranice)