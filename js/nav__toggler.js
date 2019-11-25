const toggler = document.querySelector('.toggle')
const navLinks = document.querySelector('.nav__links')

toggler.addEventListener("click", () => {
    navLinks.classList.toggle('active')
});