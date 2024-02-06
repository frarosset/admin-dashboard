function setSearchFocus(e){
    let searchDiv = e.target;

    // Temporarly disable the click on this element disable:    
    searchDiv.style.pointerEvents = 'none';

    // Set the focus on the search input element
    let searchInput = document.querySelector('.header-actions-1 .search input');
    searchInput.focus();

    // Re-enable the click event:
    searchDiv.style.pointerEvents = 'auto'; 
}


function toggleSetStatus(e){
    e.target.classList.toggle('set');
}



function init(){
    let searchDiv = document.querySelector('.header-actions-1 .search');
    searchDiv.addEventListener('click',setSearchFocus);


    let notificationsDiv = document.querySelector('.header-actions-1 .notifications');
    notificationsDiv.addEventListener('click',toggleSetStatus);
}


init();
