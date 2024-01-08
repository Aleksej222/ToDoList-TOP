// ** Set task background color based on task prioritu
export function setTaskBackgroundColor(taskPriority, taskId) {
    
    let taskClassColor;
    let taskHtml = document.querySelector(`.task[id="${taskId}"]`);

    console.log(taskHtml);

    switch (taskPriority) {
        case 'low':
            taskClassColor = 'task-priority-low';  // Green
            break;
    
        case 'medium':
            taskClassColor = 'task-priority-medium';  // Yellow
            break;

        case 'high':
            taskClassColor = 'task-priority-high';  // Red
            break;
    }
 
    taskHtml.classList.add(taskClassColor);
    let allTasks = document.querySelectorAll('.task');
    // console.log(allTasks); 
}

// ?? Boja bude samo na jednom zadatku
// TODO: Morace se mijenjat pristup (.task ne postoji u index.js)
// ?? Kako postavit boju na svakom zadatku na onload