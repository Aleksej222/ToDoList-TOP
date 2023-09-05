let listOptions = document.querySelectorAll('.menu-options > li');
let listOptionSelected = listOptions[0];  // Default All tasks as selected option 

// ** Get the project that was clicked and show its tasks in the DOM
export function showCorrectProject() {

    // ** Deo za prve tri opcije napisat odvojeno, tj malo drukcije
    // console.log(this);

    listOptionSelected = this.id; 

    let selectedProject = allProjects.find(project => {
        return project.title == listOptionSelected;
    });

    // console.log(selectedProject);

    displayProjectTasks(selectedProject);

}

// ** Display selected project tasks in the DOM
function displayProjectTasks(selectedProject) {

    console.log(selectedProject);

    console.log(listOptions);

}


// !! BUG: sa query selectorom (taj bug je vec prije bio, ima nacin da se popravi, sa loadom skripte, probat nac) (import ne radi)