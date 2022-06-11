const hamburgerButton = document.querySelector('.nav__burger-button');
const mobileNav = document.querySelector('.nav__list--mobile');


const toggleMobileNavigation = () => {
    hamburgerButton.classList.toggle("nav__burger-button--active");
    mobileNav.classList.toggle("nav__list--mobile--active");
    document.body.classList.toggle('fixed-body');
}


document.addEventListener("DOMContentLoaded", () => {
    hamburgerButton.addEventListener('click', toggleMobileNavigation);
})