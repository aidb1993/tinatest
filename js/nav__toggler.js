const toggler = document.querySelector('.toggle')
const navLinks = document.querySelector('.nav__links')
const main = document.querySelector('.main')
toggler.addEventListener("click", () => {
    navLinks.classList.toggle('active')
    main.classList.toggle('active')
});