const hamburgue = document.querySelector('.hamburgue'), 
      menu = document.querySelector('.menu-navegacion');
      
hamburgue.addEventListener('click', () => {
    menu.classList.toggle('spread');
});

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburgue){
        menu.classList.toggle('spread');
    }
});