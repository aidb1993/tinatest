// Declarations
const testimonial_cards = document.querySelectorAll('.testimonials__card');
const testimonial_dots = document.querySelectorAll('.quotes__dots__item');
let testimonial_index = 0;



// Global Reset
function testReset() {
    testimonial_cards.forEach(item => {
        item.classList.remove('testimonials__card--active')
    });
    testimonial_dots.forEach(item => {
        item.classList.remove('dots--active')
    });
}

function setTest() {
    
    testimonial_dots[testimonial_index].classList.toggle('dots--active');
    testimonial_cards[testimonial_index].classList.toggle('testimonials__card--active')
}

function traverseDots () {
    const newArr = Array.from(testimonial_dots);
    newArr.forEach(item => {
        item.addEventListener('click' , () => {
            testimonial_index= (newArr.indexOf(item));
            testReset();
            setTest();
        })
    });
}

setInterval(() => {
    if (testimonial_index < testimonial_dots.length -1) {
        testimonial_index++;
        
    } else {
        testimonial_index = 0;
    }
        testReset();
        setTest();
}, 4000);


traverseDots();




