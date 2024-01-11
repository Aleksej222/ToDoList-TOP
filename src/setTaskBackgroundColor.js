// ** Set task background color based on task prioritu
export function setTaskBackgroundColor(taskPriority, taskId) {
    
    let taskClassColor;
    let taskHtml = document.querySelector(`.task[id="${taskId}"]`);

    switch (taskPriority) {
        case 'low':
            taskClassColor = 'task-priority-low';  // Grey
            break;
    
        case 'medium':
            taskClassColor = 'task-priority-medium';  // Yellow
            break;

        case 'high':
            taskClassColor = 'task-priority-high';  // Red
            break;
    }
 
    taskHtml.classList.add(taskClassColor); 
}
