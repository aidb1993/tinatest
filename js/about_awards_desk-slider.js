const daw_boxes = document.querySelectorAll('.awards-boxes');
const daw_dots = document.querySelectorAll('.boxes-desk-dot');
let daw_index = 0;

function dawSetter() {
    const newArray = Array.from(daw_boxes);
    newArray.forEach(element => {
        element.classList.remove('awards-boxes--active');
        newArray[daw_index].classList.add('awards-boxes--active');
    });

    const newArray2 = Array.from(daw_dots)
    newArray2.forEach(element => {
        element.classList.remove('boxes-desk-dot--active');
        newArray2[daw_index].classList.add('boxes-desk-dot--active')
    });
}

function dawEnabler() {
    const newArray = Array.from(daw_dots)
    newArray.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.remove('boxes-desk-dot--active');
            daw_index = newArray.indexOf(element);
            dawSetter();
            newArray[daw_index].classList.add('boxes-desk-dot--active');
        })
    });
}

dawEnabler();

setInterval(() => {
    if (daw_index < (aw_dots.length - 1)) {
        daw_index++;
        dawSetter()
    } else {
        daw_index = 0;
        dawSetter();
    }
}, 3000);