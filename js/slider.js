// Variable Declaration
const items = document.querySelectorAll('.slider__item');
const dots__item = document.querySelectorAll('.dots__item');
const cards = document.querySelectorAll('.coaches__card')
const arrow_next = document.querySelector('#arrow--next');
const arrow_prev = document.querySelector('#arrow--prev');
let index = 0;

function globalReset() {
    items.forEach(item => {
        item.classList.remove('item--active')
    })
    dots__item.forEach(item => {
        item.classList.remove('dots--active')
    })
    cards.forEach(item => {
        item.classList.remove('coaches__card--active')
    });
};


function setItems() {
    globalReset();;
    items[index].classList.toggle('item--active')
    dots__item[index].classList.toggle('dots--active')
    cards[index].classList.toggle('coaches__card--active')
}

function Handler(arr) {
    traversalSet(arr)
}



arrow_next.addEventListener('click' , () => {
    if (index != (items.length - 1)) {
        index++
        setItems();
        
    } else {
        index = 0 
        setItems();
        
    }
    
    
})

arrow_prev.addEventListener('click', () => {
    if (index != 0) {
        index-- 
        setItems();
    } else {
        index = (items.length - 1)
        setItems();
    }
})

function traversalSet(arr) {
    const newArr = Array.from(arr)
    newArr.forEach(item => {
        item.addEventListener('click', ()=> {
            index = (newArr.indexOf(item))
            setItems();
        } )
    });
}

Handler(dots__item);
Handler(items);
