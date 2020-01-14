const coachesModal = document.querySelector('.coaches__program');
const coachestoggler = document.querySelectorAll('.coaches-toggler');
const coachesX = document.querySelector('.coaches-x');

function coachesEnabler() {
    const newArray = Array.from(coachestoggler);

    newArray.forEach(element => {
        element.addEventListener('click', () => {
            coachesModal.classList.add('modal--active')
        })
    });

    coachesX.addEventListener('click', () => {
        coachesModal.classList.toggle('modal--active')
    })
}

coachesEnabler();