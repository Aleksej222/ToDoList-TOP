import { Task } from "./Task";
import { Project } from "./Project";


let tasksContainer = document.querySelector('.tasks-container');
let allProjects = document.querySelectorAll('.projects-list > li');
//let allTasks = new Project('allTasks', []) // ** Vjerovatno nema potrebe za varijablom (korsiti se return value u switch funkciji)


let listOptions = document.querySelectorAll(".menu-options > li");
// TODO: Kako postavit attribute, kasnije ukolnit (postavit odma na all tasks koji pokazuje sve zadatke)
//let currentListOptionSelected = listOptions.querySelector("atribute[active-project]") // projekat u kojem se user nalazi (mogu bit sve opcije)


console.log(listOptions);

listOptions.forEach(option => {

    console.log(option);
    option.addEventListener('click', showOptionCl);

     ////currentListOptionSelected = option // Ili ovdje zadat currentListOptionSelected ili u showOption funkciji
     //option.addEventListener('click', showOption(option))

});


// !! Dobit opciju il sta vec
function showOptionCl(e) {
    // console.log(e.target.querySelector('li'))
}

// Treba prikazat zadatke u odabranoj opciji, a sakrit iz prethodnog odabranog
function showOption(optionSelected) {

    // Dohvatit projekat preko optionSelected
    // ?? Nekako preko optionSelected name
    // Koristit DOM i css za prikazivanje i sakrivanje zadataka

    currentListOptionSelected = optionSelected.name // Mozda ovdje
    let tasksToShow = []

    tasksContainer.innerHtml = "" // Sakrit prethodno prikazane zadatke

    if (optionSelected.name == 'today' || optionSelected.name == 'thisWeek') {

        buttonAddTask.classList.remove('active')  // Dugme se ne vidi ako je odabrana opcija today ili this week

    } else {

        buttonAddTask.classList.add('active')

    }

    switch (currentListOptionSelected) {
        case "allTasks":
            tasksToShow = showAllTasks();
            break;
        
        case "today":
            tasksToShow = showTodayTasks();
            break;

        case "thisWeek":
            tasksToShow = showtThisWeekTasks();
            break;
            
        default:
            //showTasksInTheProject();
            tasksToShow = optionSelected.tasks;
            break;

    }

    tasksContainer.appendhChild(tasksToShow) // Pushat te zadatke u DOM
}