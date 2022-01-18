const background = document.querySelector('.background');
const navbar = document.querySelector('.header__navbar');
const menuButton = document.querySelector('.header__menu-button');
const closeButton = document.querySelector('.navbar__close-icon')
const headerTitle = document.querySelector('.header__title')

menuButton.addEventListener('click', handleNavbar);
closeButton.addEventListener('click', handleNavbar);
background.addEventListener('click', handleNavbar);

function handleNavbar(event) {
    navbar.classList.toggle('header__navbar--open');
    background.classList.toggle('background--show');
}

headerTitle.addEventListener('click', ()=>document.location = "https://nestjs.com/")