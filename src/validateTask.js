// ** Check if input is valid
export function validateTask(task) {

    let taskOk = true;
    // TODO: Dohvatit errorMsg i mijenjat na osnovu greske u HTML-u
    let errorMsg = '';

    // ** Valid task name, about 15 characters, everything should be alowed
    // TODO: Dodat validaciju i u HTML (ili mozda ne, provjerit jos)
    if (task.title.length < 1) {
        errorMsg = 'Task name can\'t be empty.';
    }

    if (task.title.length > 30) {
        errorMsg = 'Task name can\'t be longer than 30 characters.';
    }

    if (task.description.length > 300) {
        errorMsg = 'Task description can\'t be longer than 300 characters.';
    }

    taskOk = (errorMsg == '');

    if (!taskOk) {
        alert(errorMsg);

    }

    return taskOk;

}