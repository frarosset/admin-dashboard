function setSearchFocusOnClick(e){
    let searchDiv = e.target;

    console.log(e)
    console.log(searchDiv)

    // Temporarly disable the click on this element disable:    
    searchDiv.style.pointerEvents = 'none';

    // Set the focus on the search input element
    let searchInput = document.querySelector('.header-actions-1 .search input');
    searchInput.focus();

    // Re-enable the click event:
    searchDiv.style.pointerEvents = 'auto'; 
}


function init(){
    let searchDiv = document.querySelector('.header-actions-1 .search');

    console.log(searchDiv);

    searchDiv.addEventListener('click',setSearchFocusOnClick);

}


init();
