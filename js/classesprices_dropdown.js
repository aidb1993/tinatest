const classesDropdownItems = document.querySelectorAll('.prices-dropdown-items h4');
const classespricesPrice2 = document.querySelector('#price2 h2');
const classespricesTitle2 = document.querySelector('#price2 h3');

function classesDropdownSetter(newPrice, newTitle) {
    classespricesPrice2.innerHTML = newPrice;
    classespricesTitle2.innerHTML =newTitle;
}

function classesDropdownHandler() {
    classesDropdownItems.forEach(element => {
        element.addEventListener('click' , () => {
            const newTitle = element.innerHTML;
            const newPrice = element.dataset.price1;
            classesDropdownSetter(newPrice, newTitle);
        })
    });
}

classesDropdownHandler();