// MENU VARIABLES

const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');
const links = document.querySelectorAll('#menu a');

/****************************** ABRIR MENU ******************************/

menuButton.addEventListener('click', ()=>{
    menuItems.classList.toogle('hidden');                // Al hacer click, se coloca y saca la clase
});