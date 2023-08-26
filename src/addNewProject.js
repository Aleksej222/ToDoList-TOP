import { Project } from "./Project";

let newProjectContainer;
let projectsHtml = document.querySelector('.projects');

export function addNewProject() {

    // ** Call function only if new project html doesn't exist in DOM
    if (document.querySelector('.new-project-container') == null) {
        projectsHtml.appendChild(drawNewProjectHTML());
    }

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

    newProjectContainer = document.createElement('div');
    newProjectContainer.classList.add('new-project-container');

    // ** Kreirat simple input field i kvacicu pored u listi (vidit dizajn na TOP primjeru)
    let input = document.createElement('input');

    let btnAddProject = document.createElement('button');
    btnAddProject.innerText = 'Add project';
    btnAddProject.addEventListener('click', createProject);

    let btnCancel = document.createElement('button');
    btnCancel.innerText = 'Cancel';
    btnCancel.addEventListener('click', deleteNewProjectHTML);

    newProjectContainer.appendChild(input);
    newProjectContainer.appendChild(btnAddProject);
    newProjectContainer.appendChild(btnCancel);

    return newProjectContainer;

    // TODO: Dodat klase i stajling, i sta sve treba na elemente
}

function deleteNewProjectHTML() {

    // newProjectContainer = document.querySelector('.new-project-container');
    newProjectContainer.outerHTML = '';
}

let allProjects = [];
function createProject() {

    let newProjectCreated = false;

    let inputText = newProjectContainer.querySelector('input').value;
    // console.log(inputText);

    let newProject = new Project(inputText, []);
    allProjects.push(newProject);
    newProjectCreated = true;

    // console.log(allProjects);

    if (newProjectCreated) {
        appendProjectToDOM(newProject); 
    }

    deleteNewProjectHTML();
}

function appendProjectToDOM(project) {

    console.log(project);

    let createdProject = document.createElement('li');
    createdProject.innerText = project.title;
    createdProject.setAttribute('id', project.title);

    // ?? Da li deo sa zadacima treba ici vamo (postavit broj zadataka samo kad projekat ima zadatke u sebi)
    let numberOfTasks = document.createElement('span');
    numberOfTasks.classList.add('.number-of-tasks');
    numberOfTasks.innerText = project.tasks.length;
    createdProject.appendChild(numberOfTasks);

    projectsHtml.appendChild(createdProject);

}

// ?? Kako dohvatit allProjects arr (kako napravit taj deo), ili mozda napravit array allTasks pa odma tamo pushat (razmislit jos o ovom djelu)
// TODO: Funkcija za provjeravanje projekt imena (ne smju bit isti)