import { allProjects } from ".";

// ** Set allProjects array as an empty array if it doesn't exist in local storage
if (!allProjects) {

    allProjects = [];
}

// let listOptions = document.querySelectorAll('.menu-options > li');
// let listOptionSelected = listOptions[0];  // Default All tasks as selected option 

// ** Get the project that was clicked and show its tasks in the DOM
export function showCorrectProject() {

    
    let listOptionSelected = this.id;
    let selectedProjectTasks;

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
    
    displayProjectTasks(listOptionSelected, selectedProjectTasks);
}

// ** Show tasks from every project
function showAllTasks() {

    let allTasksArr = [];

    // Go through every element in the list (projects) and push all the tasks into the main array that will show those tasks
    allProjects.forEach(project => {

        project.tasks.forEach(task => {
            
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

    let selectedProjectTasks = allProjects.find(project => {
        return project.title == listOptionSelected;
    });

    return selectedProjectTasks.tasks;
}

// ** Display selected project tasks in the DOM
function displayProjectTasks(listOptionSelected, selectedProjectTasks) {

    // console.log(selectedProjectTasks);

    let tasksContainer = document.querySelector('.tasks-container');
    let projectName = tasksContainer.querySelector('.project-name');
    let tasksList = tasksContainer.querySelector('.tasks-list');

    projectName.innerText = listOptionSelected;

    selectedProjectTasks.forEach(task => {
        
        tasksList.appendChild(createTaskHTML(task));

    });


}

function createTaskHTML(task) {

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

    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskTitle);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskBtns);

    return taskContainer;

    // !! Color changes based on priority of the task
}   

/* 
<div class="task">
<span class="task-date">22/08/23</span>
<h4 class="task-title">Study math</h4>
<span class="task-description">Go through all the tasks in the book.</span>
<div class="task-btns">
    <button class="edit-task">pen</button>
    <button class="delete-task">trash-can</button>
</div>
</div>

*/
// !! Bug ne prikaze title novo dodanog projekta