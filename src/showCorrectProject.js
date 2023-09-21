import { allProjects } from ".";
import generateId from "./generateId";
// import { allTasks } from ".";

// ** Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

export let selectedProject  // Send selected project to addNewTask
let listOptionSelected;

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

    let allTasks = [];

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

}

// ** Show tasks that are in this week
function showThisWeekTasks() {

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

// ** Create HTML for task
export function createTaskHTML(task) {

    let taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    let taskDate = document.createElement('span');
    taskDate.classList.add('task-date');
    taskDate.innerText = task.date;

    let taskTitle = document.createElement('h4');
    taskTitle.classList.add('task-title');
    taskTitle.innerText = task.title;

    let taskDescription = document.createElement('span');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;

    let taskBtns = document.createElement('div');
    taskBtns.classList.add('tasks-btns');

    let editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('edit-task');
    editTaskBtn.innerText = 'pen';

    let deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('delete-task');
    deleteTaskBtn.innerText = 'trash-can'

    taskBtns.appendChild(editTaskBtn);
    taskBtns.appendChild(deleteTaskBtn);

    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskBtns);

    return taskContainer;

    // !! Color changes based on priority of the task
}   

// !! Bug: ne prikaze title novo dodanog projekta (listOptions u index fajlu vjv pravi problem, ucita se samo jednom i onda ne dobije nove projekte)
// TODO: Zavrsit funkcije za today i this week, kad se napravi dodavanje zadatka (zbog datuma)