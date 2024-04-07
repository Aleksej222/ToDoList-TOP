// ** Check if input is valid
export function validateTask(task) {

    let taskOk = true;
  
    let errorMsgSpan = document.querySelector('.error-task-validation-message');
    let errorMsg = '';

    // ** Valid task name, about 15 characters, everything should be alowed
    if (task.title.length < 1) {
        errorMsg = 'Task name can\'t be empty.';
    }

    if (task.title.length > 30) {
        errorMsg = 'Task name can\'t be longer than 30 characters.';
    }

    if (task.date == '') {
        errorMsg = 'Task date can\'t be empty.';
    }

    if (task.description.length > 300) {
        errorMsg = 'Task description can\'t be longer than 300 characters.';
    }

    taskOk = (errorMsg == '');

    if (!taskOk) {
        errorMsgSpan.textContent = errorMsg;

    } else {
        errorMsgSpan.textContent = '';    

    }

    return taskOk;
}