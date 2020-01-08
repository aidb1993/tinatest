const classesCardTitle = document.querySelectorAll('.classes-card-title');
const titleGroup = document.querySelectorAll('.title-group');
const lessonsBoxes = document.querySelectorAll('.lessons-boxes');
const lessonsSelector = document.querySelectorAll('.lessons-box');
const classespricesDescription = document.querySelector('.classesprices-description p');
const classespricesAges = document.querySelector('.classesprices-description h4');
const classespricesPrice3 = document.querySelector('#price2 h2');
const classespricesTitle3 = document.querySelector('#price2 h3');
const classesPricesBook2 = document.querySelector('.classesprices-book')

const classesDetail = document.querySelector('#classesDetail');
const pricesItem1 = document.querySelector('#prices-item1');
const pricesItem2 = document.querySelector('#prices-item2');
const pricesItem3 = document.querySelector('#prices-item3');
const pricesItem4 = document.querySelector('#prices-item4');
const pricesItem5 = document.querySelector('#prices-item5');
const pricesItem6 = document.querySelector('#prices-item6');
const pricesItem7 = document.querySelector('#prices-item7');
const pricesItem8 = document.querySelector('#prices-item8');

function classespricesChanger(newDesc , newPrice2 , newHref , newTitle2 , newAge , priceItemTitle1, priceItemTitle2,priceItemTitle3, priceItemTitle4, priceItemTitle5, priceItemTitle6 , priceItemTitle7, priceItemTitle8 , priceItemPrice1, priceItemPrice2 , priceItemPrice3, priceItemPrice4, priceItemPrice5,priceItemPrice6, priceItemPrice7, priceItemPrice8) {

    classespricesDescription.innerHTML = newDesc;
    classesDetail.setAttribute('href', newHref);
    classespricesAges.innerHTML = newAge;

    pricesItem1.innerHTML = priceItemTitle1;
    pricesItem2.innerHTML = priceItemTitle2;
    pricesItem3.innerHTML = priceItemTitle3;
    pricesItem4.innerHTML = priceItemTitle4;
    pricesItem5.innerHTML = priceItemTitle5;
    pricesItem6.innerHTML = priceItemTitle6;
    pricesItem7.innerHTML = priceItemTitle7;
    pricesItem8.innerHTML = priceItemTitle8;

    pricesItem1.dataset.price1 = priceItemPrice1;
    pricesItem2.dataset.price1 = priceItemPrice2;
    pricesItem3.dataset.price1 = priceItemPrice3;
    pricesItem4.dataset.price1 = priceItemPrice4;
    pricesItem5.dataset.price1 = priceItemPrice5;
    pricesItem6.dataset.price1 = priceItemPrice6;
    pricesItem7.dataset.price1 = priceItemPrice7;
    pricesItem8.dataset.price1 = priceItemPrice8;

}


function lessonsBoxesHandler(classesCardIndex) {
    const newArray = Array.from(lessonsBoxes);
    lessonsBoxesReset();
    newArray[classesCardIndex].classList.add('lessons-boxes--active');
}

function lessonsBoxesReset() {
    lessonsBoxes.forEach(element => {
        element.classList.remove('lessons-boxes--active')
        
    })
}

function classesCardReset() {
    classesCardTitle.forEach(element => {
        element.classList.remove('classes-card-title--active')
    })
}

function titleGroupReset() {
    titleGroup.forEach(element => {
        element.classList.remove('title-group--active');
    })
}

function lessonsSelectorReset() {
    lessonsSelector.forEach(element => {
        element.classList.remove('lessons-box--active')
    })
}

function classesCardHandler() {
    const newArray = Array.from(classesCardTitle);
    classesCardTitle.forEach(element => {
        element.addEventListener('click' , () => {
            classesCardReset();
            classespricesPrice3.innerHTML= "";
            classespricesTitle3.innerHTML= "";
            element.classList.add('classes-card-title--active')
            classesCardIndex = newArray.indexOf(element);
            lessonsBoxesHandler(classesCardIndex);
        })
    })
}

function titleGroupHandler() {
    titleGroup.forEach(element => {
        element.addEventListener('click', () => {
            titleGroupReset();
            element.classList.add('title-group--active');
        })
    })
}

function lessonsSelectorHandler() {
    lessonsSelector.forEach(element => {
        element.addEventListener('click' , () => {

            const newDesc = element.dataset.desc;
            const newPrice2 = element.dataset.price2;
            const newHref = element.dataset.href;
            const newTitle2 = element.dataset.title2;
            const newAge = element.dataset.age;

            const priceItemTitle1 = element.dataset.title1;
            const priceItemTitle2 = element.dataset.title2;
            const priceItemTitle3 = element.dataset.title3;
            const priceItemTitle4 = element.dataset.title4;
            const priceItemTitle5 = element.dataset.title5;
            const priceItemTitle6 = element.dataset.title6;
            const priceItemTitle7 = element.dataset.title7;
            const priceItemTitle8 = element.dataset.title8;

            const priceItemPrice1 = element.dataset.price1;
            const priceItemPrice2 = element.dataset.price2;
            const priceItemPrice3 = element.dataset.price3;
            const priceItemPrice4 = element.dataset.price4;
            const priceItemPrice5 = element.dataset.price5;
            const priceItemPrice6 = element.dataset.price6;
            const priceItemPrice7 = element.dataset.price7;
            const priceItemPrice8 = element.dataset.price8;

            lessonsSelectorReset();
            classespricesPrice3.innerHTML= "";
            classespricesTitle3.innerHTML= "";
            classesPricesBook2.classList.remove('classesprices-book--active');
            element.classList.add('lessons-box--active');
            classespricesChanger(newDesc ,  newPrice2 , newHref ,  newTitle2 , newAge , priceItemTitle1, priceItemTitle2,priceItemTitle3,priceItemTitle4,priceItemTitle5,priceItemTitle6,priceItemTitle7,priceItemTitle8 , priceItemPrice1, priceItemPrice2 ,priceItemPrice3 ,priceItemPrice4 ,priceItemPrice5 ,priceItemPrice6 , priceItemPrice7, priceItemPrice8);

        })
    })
}

function classesInitialSet() {
    const newArray2 = Array.from(lessonsSelector);
    
    const newDesc = newArray2[0].dataset.desc;
    const newPrice2 = newArray2[0].dataset.price2;
    const newHref = newArray2[0].dataset.href;
    const newTitle2 = newArray2[0].dataset.title2;
    const newAge = newArray2[0].dataset.age;

    const priceItemTitle1 = newArray2[0].dataset.title1;
    const priceItemTitle2 = newArray2[0].dataset.title2;
    const priceItemTitle3 = newArray2[0].dataset.title3;
    const priceItemTitle4 = newArray2[0].dataset.title4;
    const priceItemTitle5 = newArray2[0].dataset.title5;
    const priceItemTitle6 = newArray2[0].dataset.title6;
    const priceItemTitle7 = newArray2[0].dataset.title7;
    const priceItemTitle8 = newArray2[0].dataset.title8;

    const priceItemPrice1 = newArray2[0].dataset.price1;
    const priceItemPrice2 = newArray2[0].dataset.price2;
    const priceItemPrice3 = newArray2[0].dataset.price3;
    const priceItemPrice4 = newArray2[0].dataset.price4;
    const priceItemPrice5 = newArray2[0].dataset.price5;
    const priceItemPrice6 = newArray2[0].dataset.price6;
    const priceItemPrice7 = newArray2[0].dataset.price7;
    const priceItemPrice8 = newArray2[0].dataset.price8;

    newArray2[0].classList.add('lessons-box--active');

    classespricesChanger(newDesc ,  newPrice2 , newHref , newTitle2 , newAge , priceItemTitle1, priceItemTitle2,priceItemTitle3,priceItemTitle4,priceItemTitle5,priceItemTitle6,priceItemTitle7,priceItemTitle8 , priceItemPrice1, priceItemPrice2, priceItemPrice3, priceItemPrice4, priceItemPrice5, priceItemPrice6, priceItemPrice7, priceItemPrice8);

}



classesCardHandler();
titleGroupHandler();
lessonsSelectorHandler();
classesInitialSet();
