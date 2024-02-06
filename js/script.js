function setSearchFocus(e){
    let searchDiv = e.target;

    // Temporarly disable the click on this element disable:    
    searchDiv.style.pointerEvents = 'none';

    // Set the focus on the search input element
    searchDiv.itsInput.focus();

    // Re-enable the click event:
    searchDiv.style.pointerEvents = 'auto'; 
}

function toggleSetStatus(e){
    e.target.classList.toggle('set');
}

function toggleNavStatus(e){
    toggleSetStatus(e);
    e.target.itsDashboard.classList.toggle('showNav');
}

function initNavStatus(navToggle){
    navToggle.classList.add('set');
    navToggle.itsDashboard.classList.add('showNav');
}

function init(){
    let searchDiv = document.querySelector('.header-actions-1 .search');
    searchDiv.itsInput = document.querySelector('.header-actions-1 .search input');
    searchDiv.addEventListener('click',setSearchFocus);


    let notificationsDiv = document.querySelector('.header-actions-1 .notifications');
    notificationsDiv.addEventListener('click',toggleSetStatus);

    let likeDivs = document.querySelectorAll('.main-itm-project .like');
    likeDivs.forEach((itm) => itm.addEventListener('click',toggleSetStatus));

    let watchDivs = document.querySelectorAll('.main-itm-project .watch');
    watchDivs.forEach((itm) => itm.addEventListener('click',toggleSetStatus));

    let navToggle = document.querySelector('.nav-branding-with-toggle');
    navToggle.itsDashboard = document.querySelector('.dashboard');
    initNavStatus(navToggle);
    navToggle.addEventListener('click',toggleNavStatus);   
}


init();
