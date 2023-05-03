$(document).ready(function(){
	var d=300;
                $('#navigation a').each(function(){
                    $(this).stop().animate({
                        'marginTop':'-80px'
                    },d+=150);
                });

                $('#navigation > li').hover(
                function () {
                    $('a',$(this)).stop().animate({
                        'marginTop':'-2px'
                    },200);
                },
                function () {
                    $('a',$(this)).stop().animate({
                        'marginTop':'-80px'
                    },200);
                }
            );
});

// Obtenemos los enlaces del menú
const enlaces = document.querySelectorAll('.menu a');

// Recorremos los enlaces
enlaces.forEach((enlace) => {
  // Agregamos un listener para cuando se haga click en el enlace
  enlace.addEventListener('click', (evento) => {
    // Prevenimos el comportamiento por defecto
    evento.preventDefault();

    // Obtenemos el id del enlace
    const id = enlace.getAttribute('href');

    // Obtenemos el elemento con ese id
    const elemento = document.querySelector(id);

    // Hacemos scroll al elemento
    elemento.scrollIntoView({ behavior: 'smooth' });
  });
});

const menuWrapper = document.querySelector('.menu-wrapper');
const menu = document.querySelector('.menu2');

menuWrapper.addEventListener('mouseover', () => {
  menu.style.display = 'block';
});

menuWrapper.addEventListener('mouseout', () => {
  menu.style.display = 'none';
});



