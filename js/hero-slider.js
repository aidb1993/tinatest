const hero = document.querySelector('.hero');
const heroArrows = document.querySelectorAll('.hero-arrows i')
const heroSlidersAmount = 1;
let heroIndex = 0;

function heroReset() {
    hero.classList.remove(`hero-slider-${heroIndex}`)
}

function heroChanger() {
    hero.classList.add(`hero-slider-${heroIndex}`)
}

function heroArrowsSetter() {
    // Left arrow
    heroArrows[0].addEventListener('click', ()=> {
        if (heroIndex != 0) {
            heroReset()
            heroIndex--
            heroChanger();
            console.log(heroIndex)
        }
        else {
            heroReset()
            heroIndex = heroSlidersAmount;
            heroChanger();
            console.log(heroIndex)
        }
    })
    // right arrow
    heroArrows[1].addEventListener('click', ()=> {
        if (heroIndex < heroSlidersAmount) {
            heroReset()
            heroIndex++
            heroChanger();
            console.log(heroIndex)
        }
        else {
            heroReset()
            heroIndex = 0;
            heroChanger();
            console.log(heroIndex)
        }
    })
}


// Currently set for 2 slides in case of more simply change heroSliderAmount.
setInterval(() => {
    if(heroIndex<heroSlidersAmount) {
        heroReset();
        heroIndex++;
        heroChanger();
    } else {
        heroReset();
        heroIndex = 0;
        heroChanger();
    }
}, 10000);

heroArrowsSetter()
