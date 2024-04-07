// ** Check if input is valid
export function validateTask(task) {

    let taskOk = true;
  
    let errorMsgSpan = document.querySelector('.error-task-validation-message');
    let errorMsg = '';

    // console.log(task);
    // ** Valid task name, about 15 characters, everything should be alowed
    if (task.title.length < 1) {
        errorMsg = 'Task name can\'t be empty.';
    }

    if (task.title.length > 30) {
        errorMsg = 'Task name can\'t be longer than 30 characters.';
    }

    console.log(task.date);
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

    // !! BUG: Na update task izgleda ko da je updatean iako ima gresku, na refresh izgubi novu vrednost
    return taskOk;
}