// ** Hide tasks content and set menu content visible when clicked on hamburger menu
export function setMenuContentVisibility() {

    let container = document.querySelector('.container');

    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');


    container.classList.toggle('color-cde9ff');
    tasksContainer.classList.toggle('display-none');
    menuContainer.classList.toggle('display-block');


}

export function removeMenuContentVisibility() {
    
    let container = document.querySelector('.container');

    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');

    container.classList.remove('color-cde9ff');
    tasksContainer.classList.remove('display-none');
    menuContainer.classList.remove('display-block');

}

// ** If window width is bigger than 730px set correct display

export function setCorrectDisplay(windowWidth) {

    // let windowWidth = window.screen.width;
    let width = windowWidth; 

    // console.log(width);

    let container = document.querySelector('.container');

    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');

    tasksContainer.classList.add('.task-container-normal-display');

        // menuContainer.style.display = 'block';
    
 
    // console.log(menuContainer.style.display);

}