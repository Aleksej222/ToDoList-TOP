// ** Set task background color based on task prioritu
export function setTaskBackgroundColor(taskPriority, taskId) {
    
    let taskHtml = document.querySelector(`.task[id="${taskId}"]`);
    let backgorundColor = '#beeb9f';  // Green

    switch (taskPriority) {
        case 'low':
            backgorundColor = '#beeb9f';  // Green
            break;
    
        case 'medium':
            backgorundColor = '#ffff9d';  // Yellow
            break;

        case 'high':
            backgorundColor = '#ff6138';  // Red
            break;
    }

    console.log(backgorundColor);
    taskHtml.style.backgroundColor = backgorundColor; 
}

// ?? Boja bude samo na jednom zadatku
// TODO: Morace se mijenjat pristup (.task ne postoji u index.js)
// ?? Kako postavit boju na svakom zadatku na onload