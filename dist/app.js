// MENU VARIABLES

const menuButton = document.querySelector('#menu-button');
const menuItems = document.querySelector('#menu');
const menuButtonSpans = document.querySelectorAll('#menu-button span');     // querySelectorAll porque son 3 spans 
const links = document.querySelectorAll('#menu a');

/****************************** ABRIR MENU ******************************/

menuButton.addEventListener('click', () => {
    menuItems.classList.toogle('hidden');                // Al hacer click, se despliega el menu hamburguesa. Cuando se clickea nuevamente, se oculta el menu
    menuButtonSpans.forEach((span) => {
        span.classList.toogle('animado');
    });
});

/****************************** Cerrar menu al hacer click en alguno de los enlaces ******************************/

links.forEach((link)=>{
    link.addEventListener('click', () => {
        menuItems.classList.add('hidden');                // Se cierra el menu
        menuButtonSpans.forEach((span) =>{
            span.classList.remove('animado');             // Para cada span, se elimina la clase animado 
        });
    });
});

/****************************** Cerrar menu cuando se maximiza la ventana ******************************/

window.onresize = function () {
    let w = window.outerWidth;
    if(w > 768){
        // menuItems.classList.add('hidden');
        menuButtonSpans.forEach((span) => {
            span.classList.remove('animado');
        });
    }
};

/****************************** DARK MODE ******************************/

const darkButton = document.querySelector('#darkButton');

darkButton.addEventListener('click', function() {
    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

/****************************** VARIABLES JOB SECTION ******************************/

const jobSection = document.querySelector('#jobSection');
const articles = document.querySelectorAll('#jobSection article');

jobSection.addEventListener('click', (event)=>{
    const id = event.target.dataset.id; // Representa elementos sobre el cual hagamos click (cuando se hace click en cada trabajo, eso representa un event target)

    // Enlazar id con la descripcion del trabajo 
    if(id){
        articles.forEach((article)=>{
            article.classList.add('hidden'); // Ocultamiento de secciones porque solo se necesita mostrar una 
        });
        // Que descripcion hay que mostrar 
        const element = document.getElementById(id);
        element.classList.remove('hidden');
    }
});

/* Sacar estilos al hacer click en cada empresa */

const jobLinks = document.querySelectorAll('#jobSection button');
const firstLink = document.querySelector('#link-one');

jobLinks.forEach((link) => {
    link.addEventListener('click', () => {
        firstLink.classList.remove('border-outstanding', 'bg-white', 'dark:bg-slate-700');
    });
});
