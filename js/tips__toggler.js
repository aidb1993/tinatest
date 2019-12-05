const drawer_toggler = document.querySelectorAll('.drawer-toggler');
const drawer_content = document.querySelectorAll('.drawer__content');
const drawer_active = document.querySelector('.drawer__content--active');
let togglerArray = Array.from(drawer_toggler);


function setDrawer(drawerI) {
    drawer_content[drawerI].classList.toggle('drawer__content--active')
}
function enable () {
        togglerArray.forEach(element => {
        element.addEventListener('click' , () => {
            const drawerI = togglerArray.indexOf(element);
            setDrawer(drawerI);
        })
    });
}

enable()