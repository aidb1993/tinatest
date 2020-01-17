const starsLeft = document.querySelector("#stars-content-left");
const starsRight = document.querySelector("#stars-content-right");
const starsCards = document.querySelectorAll(".stars-content-card");
let starsCardsIndex = 0;
let starsCardsMargin = 0;

function starsReset() {
  starsCards.forEach(element => {
    element.classList.remove('stars-content-card--active')
  });
}

function starsArrowsSetter() {
  starsLeft.addEventListener("click", () => {
    if (starsCardsIndex != 0) {
      starsCardsMargin = starsCardsMargin + 384 + 20;
      starsCards[0].style.marginLeft = `${starsCardsMargin}px`;
      starsCardsIndex--;
    } else {
      return;
    }
  });

  starsRight.addEventListener("click", () => {
    if (starsCardsIndex < starsCards.length - 1) {
      starsCardsMargin = starsCardsMargin - 384 - 20;
      starsCards[0].style.marginLeft = `${starsCardsMargin}px`;
      starsCardsIndex++;
    } else {
      return;
    }
  });
}

function starsArrowsSetterMobile() {
  starsLeft.addEventListener('click' , () => {
    if (starsCardsIndex != 0) {
      starsReset();
      starsCardsIndex--
    } else {
      starsReset();
      starsCardsIndex = (starsCards.length - 1);
    }
    starsCards[starsCardsIndex].classList.add('stars-content-card--active')
  })

  starsRight.addEventListener('click', () => {
    if (starsCardsIndex < (starsCards.length - 1)) {
      starsReset();
      starsCardsIndex++
    } else {
      starsReset();
      starsCardsIndex = 0;
    }
    starsCards[starsCardsIndex].classList.add('stars-content-card--active')
  })
}

if (screen.width > 768) {
  starsArrowsSetter();
} else {
  starsArrowsSetterMobile();
};


