/*****slider****/

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("myslides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

/****/
function pulsado() {
    divCookies.style.display = 'none'; //quita el mensaje de las cookies
}

function menuOculto() {
    var elemento = document.getElementById("navMenu");

    if (elemento.classList.contains('oculto')) {
        elemento.classList.remove('oculto');
    } else {
        elemento.classList.add('oculto');
    }
}

function headerOculto() {
    var elemento = document.getElementById("header");

    if (elemento.classList.contains('oculto1')) {
        elemento.classList.remove('oculto1');
    } else {
        elemento.classList.add('oculto1');
    }
}



function headerShowScroll() {
    var lastScrollTop = 0; //al hacer scroll hacia arriba aparece el menu y hacia abajo desaparece
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // bajar
            document.getElementById("header").style.display = "none"
        } else {
            // subir
            document.getElementById("header").style.display = "block"
        }
        lastScrollTop = st;
    });
}


function flechaShowScroll() {
    var lastScrollTop = 0; 
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // bajar
            document.getElementById("flecha").style.display = "none"
        } else {
            // subir
            document.getElementById("flecha").style.display = "block"
        }
        lastScrollTop = st;
    });
}


$(document).ready(function () {


    headerOculto();

    headerShowScroll();
    flechaShowScroll();

    showSlides(slideIndex);


    $('.inicio').click(function () {
        //var position = scrollTop: $("#art4").offset().top //var si lo quiero usar en + sitios, si no, let
        $('body, html').animate({
            scrollTop: $("#home").offset().top //scrollTop: position

        }, 400);
        menuOculto();
        headerOculto();

    });

    $('.quienes_somos').click(function () {
        $('body, html').animate({
            scrollTop: $("#about").offset().top

        }, 400);

        menuOculto();
        headerOculto();

    });

    $('.ofertas').click(function () {
        $('body, html').animate({
            scrollTop: $("#sales").offset().top

        }, 400);

        menuOculto();
        headerOculto();

    });

    $('.donde_estamos').click(function () {
        $('body, html').animate({
            scrollTop: $("#location").offset().top

        }, 400);

        menuOculto();
        headerOculto();

    });

    $('.contacto').click(function () {
        $('body, html').animate({
            scrollTop: $("#contacto").offset().top

        }, 400);
        menuOculto();
        headerOculto();

    });


    $('.barras').click(function () {

        menuOculto();

    });


    $('.flecha').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        }, 400);
    });

});