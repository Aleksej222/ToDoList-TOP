
// ** Hide tasks content and set menu content visible when clicked on hamburger menu
export function setMenuContentVisibility() {


    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');
    
    let burgerContainer = document.querySelector('.burger-container');

    if (!menuContainer.style.display || menuContainer.style.display == 'none') {

        menuContainer.style.display = 'block';
        tasksContainer.style.display = 'none';

        burgerContainer.style.backgroundColor = '#cde9ff';


    } else {

        menuContainer.style.display = 'none';
        tasksContainer.style.display = 'block';

        burgerContainer.style.backgroundColor = 'white';

    }
}