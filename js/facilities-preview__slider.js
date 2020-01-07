const facilities_preview = document.querySelectorAll('.facilities__preview');
const facilities_preview_right = document.querySelectorAll('.facilities__preview-arrow-right');
const facilities_preview_left = document.querySelectorAll('.facilities__preview-arrow-left');
const facilities_container = document.querySelector('.facilities__container');

function facilities_previewHanddler(index) {
    facilities_preview.forEach(element => {
        element.classList.remove('facilities__preview--active')
    });
    facilities_preview[index].classList.add('facilities__preview--active')
}

function facilities_previewSetter() {
    index = 0;

    facilities_preview_right.forEach(element => {
        element.addEventListener('click', ()=> {
            if ( index < facilities_preview.length - 1) {
                index++
                facilities_previewHanddler(index)
                facilities_container.style.background='url(/images/biltmore.jpg)';
                facilities_container.style.backgroundSize = 'cover';
                facilities_container.style.backgroundRepeat = 'no-repeat';
                
                
             } else {
                 index = 0;
                 facilities_previewHanddler(index)
                 facilities_container.style.background='url(/images/facilities-bg.png)';
                 facilities_container.style.backgroundSize = 'cover';
                 facilities_container.style.backgroundRepeat = 'no-repeat';
                 
             }
        })
        
    })

    facilities_preview_left.forEach(element => {
        element.addEventListener('click', ()=> {
            if ( index > 0) {
                index--
                facilities_previewHanddler(index)
                facilities_container.style.background='url(/images/facilities-bg.png)';
                facilities_container.style.backgroundSize = 'cover';
                facilities_container.style.backgroundRepeat = 'no-repeat';
            } else {
                index = (facilities_preview.length - 1)
                facilities_container.style.background='url(/images/biltmore.jpg)';
                facilities_container.style.backgroundSize = 'cover';
                facilities_container.style.backgroundRepeat = 'no-repeat';
                facilities_previewHanddler(index)
            }
        })
    })
}

facilities_previewSetter()

