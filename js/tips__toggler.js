const drawer_toggler = document.querySelectorAll(".drawer-toggler");
const drawer_content = document.querySelectorAll(".drawer__content");
const drawer_active = document.querySelector(".drawer__content--active");
let togglerArray = Array.from(drawer_toggler);
let drawerArray = Array.from(drawer_content);

function drawerReset() {
  drawerArray.forEach(element => {
    element.classList.remove("drawer__content--active");
  });
}

function togglerIconReset() {
  togglerArray.forEach(element => {
    element.children[1].innerHTML = "keyboard_arrow_down";
  });
}

function setDrawer(drawerI) {
  drawerReset();
  togglerIconReset();
  drawer_content[drawerI].classList.toggle("drawer__content--active");
}

function enable() {
  togglerArray.forEach(element => {
    element.addEventListener("click", () => {
      const drawerI = togglerArray.indexOf(element);
      drawerIndex = drawerI;
      setDrawer(drawerI);
      element.children[1].innerHTML = "keyboard_arrow_up";
    });
  });
}

enable();
