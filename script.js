/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}; 

/* scroll reveal */
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.inicio-contenido, .heading', { origin: 'top' });
ScrollReveal().reveal('.inicio-img, .habilidades-container, .portafolio-box, .contacto form', { origin: 'bottom' });
ScrollReveal().reveal('.inicio-contenido h1, .sobre-img',  { origin: 'left' });
ScrollReveal().reveal('.inicio-contenido p, .sobre-contenido',  { origin: 'right' });

/* typed js */
var typed = new Typed('#multiple-text', {
    strings: ["Eficiencia","Efectividad", "Innovación Tecnológica"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
