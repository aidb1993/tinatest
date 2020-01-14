// const starsLeft = document.querySelector('#stars-content-left');
// const starsRight = document.querySelector('#stars-content-right');
// const starsCards = document.querySelectorAll('.stars-content-card');
// let starsCardsIndex = 0;

// // function starsCardsReset() {
// //     starsCards.forEach(element => {
// //         element.classList.remove('content-card-disabled')

// //     });
// // }

// function starsCardsArrowsSetter() {
//     const newArray = Array.from(starsCards)
//     starsRight.addEventListener('click' ,() => {
       
//     })

//     starsLeft.addEventListener('click', () =>{
//         if(starsCardsIndex !=0) {
//             starsCardsIndex--
//         } else {
//             starsCardsIndex = (starsCards.length - 1)
//         }
//         console.log(starsCardsIndex)
//     })
    
// }




// function starsCardsInitial () {
//     const newArray = Array.from(starsCards)

//     newArray.forEach(element => {
//         element.style.order = newArray.indexOf(element);
//         console.log( element.style.order)
//     });
// }

// starsCardsInitial();
// starsCardsArrowsSetter();

$(document).ready(() => {
    $('.stars-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      arrows: true,
      fade: true,
    });
  });