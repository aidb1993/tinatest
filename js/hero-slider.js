const hero = document.querySelector('.hero');
let heroIndex = 0;

function heroReset() {
    hero.classList.remove(`hero-slider-${heroIndex}`)
}

function heroChanger() {
    hero.classList.add(`hero-slider-${heroIndex}`)
}

// Currently setted for 2 slides in case of more simply change if(heroIndex<X)
setInterval(() => {
    if(heroIndex<1) {
        heroReset();
        heroIndex++;
        heroChanger();
    } else {
        heroReset();
        heroIndex = 0;
        heroChanger();
    }
}, 6000);

