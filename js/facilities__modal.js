const facilities_close = document.querySelectorAll('.modal-close');
const facilities_x = document.querySelectorAll('.modal-x');
const facilities_modals = document.querySelectorAll('.modal__facilities');
const facilities_toggler = document.querySelectorAll('.facilities__tech-card');
const modalArray = Array.from(facilities_modals);
let facilities_index = 0;

function facClickOutside() {
    document.addEventListener('click' , (e) => {
       let isClickedInside = facilities_toggler[facilities_index].contains(e.target)
       if ( isClickedInside || facilities_modals[facilities_index].contains(e.target)) {
           return
       } else {
        modalArray[facilities_index].classList.remove('modal--active');
       }
    } )
}

function facReset() {
    modalArray.forEach(element => {
        element.classList.remove('modal--active')
    });
}

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
    const newArray = Array.from(facilities_toggler);
        newArray.forEach(element => {
        element.addEventListener('click' , () => {
            facReset()
            facilities_index = newArray.indexOf(element);
            modalArray[facilities_index].classList.add('modal--active');
            
        })
    });
}


facSeter();
facCloser();
facClickOutside()




