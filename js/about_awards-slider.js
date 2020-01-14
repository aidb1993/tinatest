const aw_boxes = document.querySelectorAll('.box-mobile');
const aw_dots = document.querySelectorAll('.boxes-dot');
let aw_index = 0;

function awSetter() {
    const newArray = Array.from(aw_boxes);
    newArray.forEach(element => {
        element.classList.remove('box--active');
        newArray[aw_index].classList.add('box--active');
    });

    const newArray2 = Array.from(aw_dots);
    newArray2.forEach(element => {
        element.classList.remove('boxes-dot--active');
        newArray2[aw_index].classList.add('boxes-dot--active')
    });
}

function awEnabler() {
    const newArray = Array.from(aw_dots);
    newArray.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.remove('boxes-dot--active');
            aw_index = newArray.indexOf(element);
            awSetter();
            newArray[aw_index].classList.add('boxes-dot--active');
        })
    });
}

awEnabler();

setInterval(() => {
    if (aw_index < (aw_dots.length - 1)) {
        aw_index++;
        awSetter()
    } else {
        aw_index = 0;
        awSetter();
    }
}, 3000);