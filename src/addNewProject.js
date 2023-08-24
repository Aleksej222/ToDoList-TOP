export function addNewProject() {

    let projectsHtml = document.querySelector('.projects');

    projectsHtml.appendChild(drawNewProjectHTML());

    
    //console.log(this);  // 'this' is button that is clicked

}

function addNewProjectPseudo() {

    drawNewProjectHTML()

    // ?? Kako dohvatit koje je dugme kliknuto
    if (btnAddProject.clicked) {

    createProject(input.text)

    } else {
    close()
    }
}

function drawNewProjectHTML() {

    // console.log(projectsHtml);

    let newProjectContainer = document.createElement('div');

    // Kreirat simple input field i kvacicu pored u listi (vidit dizajn na TOP primjeru)
    let input = document.createElement('input');

    let btnAddProject = document.createElement('button');
    btnAddProject.innerText = 'Add project';

    let btnCancel = document.createElement('button');
    btnCancel.innerText = 'Cancel';

    newProjectContainer.appendChild(input);
    newProjectContainer.appendChild(btnAddProject);
    newProjectContainer.appendChild(btnCancel);

    return newProjectContainer;

    //** Dodat klase i stajling, i sta sve treba na elemente
}