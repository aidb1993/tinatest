const facilities_close = document.querySelectorAll('.modal-close');
const facilities_x = document.querySelectorAll('.modal-x');
const facilities_modals = document.querySelectorAll('.modal__facilities');
const facilities_toggler = document.querySelectorAll('.facilities__tech-card');
const modalArray = Array.from(facilities_modals);
let facilities_index = 0;



function facCloser() {
    const xArray = Array.from(facilities_x);
    const closeArray = Array.from(facilities_close);

    xArray.forEach(element => {
        element.addEventListener('click' , () => {
            modalArray[facilities_index].classList.toggle('modal--active');
        })
    });
    closeArray.forEach(element => {
        element.addEventListener('click' , () => {
            modalArray[facilities_index].classList.toggle('modal--active');
        })
    });
}


function facSeter() {
    const newArray = Array.from(facilities_toggler)
        newArray.forEach(element => {
        element.addEventListener('click' , () => {
            facilities_index = newArray.indexOf(element);
            modalArray[facilities_index].classList.add('modal--active');
        })
    });
}


facSeter();
facCloser();



