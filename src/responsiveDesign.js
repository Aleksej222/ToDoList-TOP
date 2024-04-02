// ** Hide tasks content and set menu content visible when clicked on hamburger menu
export function setMenuContentVisibility() {

    let container = document.querySelector('.container');

    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');

    if (!menuContainer.style.display || menuContainer.style.display == 'none') {
        
        menuContainer.style.display = 'block';
        tasksContainer.style.display = 'none';
        
        container.style.backgroundColor = '#cde9ff';
        
    } else {
        
        menuContainer.style.display = 'none';
        tasksContainer.style.display = 'block';
        
        container.style.backgroundColor = 'white';
        
    }

}


// ** If window width is bigger than 730px set correct display

export function setCorrectDisplay() {

    let windowWidth = window.screen.width;

    let container = document.querySelector('.container');

    let tasksContainer = document.querySelector('.tasks-container');
    let menuContainer = document.querySelector('.menu-container');

    if (windowWidth > 730) {
        
        // console.log('dipslay');
        // menuContainer.style.display = 'block';
    }
 
    // console.log(menuContainer.style.display);

}