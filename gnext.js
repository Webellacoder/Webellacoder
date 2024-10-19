
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Use scrollY instead of scroll
    navbar.classList.add('scroll');
    } else {
    navbar.classList.remove('scroll');
    }
    });
    

const navSlide = () => {
const navMobile = document.querySelector('.navbar-toggler');
const navBar = document.querySelector('#navbarNav');
const navLinks = document.querySelectorAll('.nav-item');

navMobile.addEventListener('click', () => {
navBar.classList.toggle('nav-active');

navLinks.forEach((link, index) => {
if (link.style.animation) {
link.style.animation = '';
} else {
link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
}
});
});
};

navSlide();

document.addEventListener('DOMContentLoaded', function() {
var options = {
strings: ['Welcome to GNEXT Technologies', '...Trusted Solutions', 'Digital Transformation'],
typeSpeed: 70,
backSpeed: 55,
loop: true
};
var typed = new Typed("#typed", options);
});

let slideIndex = 0;

function showSlides(n) {
const slides = document.querySelectorAll('.slide');
if (n >= slides.length) { slideIndex = 0; }
if (n < 0) { slideIndex = slides.length - 1; }
slides.forEach((slide, index) => {
slide.style.transform = `translateX(${-slideIndex * 100}%)`;
});
}

function plusSlides(n) {
showSlides(slideIndex += n);
}

document.addEventListener('DOMContentLoaded', () => {
showSlides(slideIndex);
});


