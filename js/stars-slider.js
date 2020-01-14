const starsLeft = document.querySelector('#stars-content-left');
const starsRight = document.querySelector('#stars-content-right');
const starsCards = document.querySelectorAll('.stars-content-card');
let starsCardsIndex = 1;
let starsCardsMargin = 0;


function starsArrowsSetter() {
  starsLeft.addEventListener('click', () => {
    if(starsCardsIndex < starsCards.length - 1){
    starsCardsMargin = starsCardsMargin - 384;
    starsCards[0].style.marginLeft = `${starsCardsMargin}px`;
    starsCardsIndex++;
    } else {
      return
    }
  })

  starsRight.addEventListener('click', () => {
    if ( starsCardsIndex != 0) {
    starsCardsMargin = starsCardsMargin + 384;
    starsCards[0].style.marginLeft = `${starsCardsMargin}px`;
    starsCardsIndex--;
    } else {
      return
    }
  })
}

starsArrowsSetter()




