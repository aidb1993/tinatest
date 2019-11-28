const items = document.querySelectorAll('.slider__item');
const arrow_next = document.querySelector('#arrow--next');
const arrow_prev = document.querySelector('#arrow--prev');
let index = 0;


arrow_next.addEventListener('click' , () => {
   if (index !=(items.length - 1)) {
    items[index].classList.toggle('item--active')
    items[index].nextElementSibling.classList.toggle('item--active')
    index++
   }
   else {
       items[index].classList.toggle('item--active')
       items[0].classList.toggle('item--active')
       index = 0;
   }
});

arrow_prev.addEventListener('click' , () => {
    if (index !=0) {
    items[index].classList.toggle('item--active')
    items[index].previousElementSibling.classList.toggle('item--active')
    index--
    }
    else {
        items[0].classList.toggle('item--active')
        items[(items.length-1)].classList.toggle('item--active')
        index = (items.length-1)
    }
});



