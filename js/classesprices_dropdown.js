const classesDropdownItems = document.querySelectorAll('.prices-dropdown-items h4');
const classespricesPrice2 = document.querySelector('#price2 h2');
const classespricesTitle2 = document.querySelector('#price2 h3');
const classespricesToggle = document.querySelector('.prices-dropdown h3');
const classesDropdownContainer = document.querySelector('.prices-dropdown-items');
const classesPricesBook = document.querySelector('.classesprices-book');

function classesDropdownSetter(newPrice, newTitle) {
    classespricesPrice2.innerHTML = newPrice;
    classespricesTitle2.innerHTML =newTitle;
}

function classesDropdownToggler() {
    classespricesToggle.addEventListener('click', () => {
        
        classesDropdownContainer.classList.toggle('prices-dropdown-items--active');
        
    })
}

function classesDropdownHandler() {
    classesDropdownItems.forEach(element => {
        element.addEventListener('click' , () => {
            const newTitle = element.innerHTML;
            const newPrice = element.dataset.price1;
            classesDropdownSetter(newPrice, newTitle);
            classesDropdownContainer.classList.toggle('prices-dropdown-items--active');
            classesPricesBook.classList.add('classesprices-book--active');
            classespricesToggle.parentElement.style.top = "0";
        })
    });
}

classesDropdownHandler();
classesDropdownToggler();