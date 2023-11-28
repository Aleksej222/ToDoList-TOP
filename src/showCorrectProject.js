import { allProjects } from ".";
import { createTaskHTML } from "./addNewTask";
import { getAllTasks } from "./getAllTasks";
import { getTodayTasks } from "./getTodayTasks";
import { getThisWeekTasks } from "./getThisWeekTasks";

export let selectedProject  // Send selected project to addNewTask
let listOptionSelected;

// ** Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

// ** Get the project that was clicked and show its tasks in the DOM
export function showCorrectProject() {

    let projectNameText = document.querySelector('.project-name');
    if (projectNameText.style.display == 'none') return;  // If edit of project is in process stop function from showing project

    listOptionSelected = this.id;
    let selectedProjectTasks;

    switch (listOptionSelected) {
        case 'All tasks':
            selectedProjectTasks = getAllTasks();
            break;

        case 'Today':
            selectedProjectTasks = getTodayTasks();
            break;
    
        case 'This week':
            selectedProjectTasks = getThisWeekTasks();
            break;

        default:
            selectedProjectTasks = otherProjectTasks(listOptionSelected);
            break;
    }
    
    clearTasksHTML();
    displayProjectTasks(listOptionSelected, selectedProjectTasks);
    
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
    let editProjectNameBtn = document.querySelector('.btn-edit-project');
    let deleteProjectBtn = document.querySelector('.btn-delete-project');

    // Hide button if selected project is one of the main options
    if (listOptionSelected == 'All tasks' || listOptionSelected == 'Today' || listOptionSelected == 'This week') {
        addTaskBtn.style.display = 'none';
        editProjectNameBtn.style.display = 'none';
        deleteProjectBtn.style.display = 'none';
    }
    else {
        addTaskBtn.style.display = 'block';
        editProjectNameBtn.style.display = 'block';
        deleteProjectBtn.style.display = 'block';
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