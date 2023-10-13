// ** Return today's date
export function getTodayDate() {
    const newDate = new Date();
    
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    const todayDate= year.toString() + '-' + month.toString()+ '-' + day.toString();
    return todayDate;
}

// ** Return last week's date
export function getLastWeekDate() {

    const newDate = new Date(); 
    let lastWeekDate = new Date(newDate.getTime() - 7 * 24 * 60 * 60 * 1000); 

    let year = lastWeekDate.getFullYear();
    let month = lastWeekDate.getMonth() + 1;
    let day = lastWeekDate.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    
    lastWeekDate = year.toString() + '-' + month.toString()+ '-' + day.toString();
    return lastWeekDate;

}