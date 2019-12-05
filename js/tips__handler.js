const video_tips = document.getElementById('tips-video');
const tips_text = document.getElementById('tips-description')
const tips_changers = document.querySelectorAll('.tips-changer');

function changeVideoTips(newSrc, newDesc) {
    video_tips.src= newSrc;
    tips_text.innerText= newDesc;
}

function change() {
  const  changerArray = Array.from(tips_changers);
  changerArray.forEach(element => {
      element.addEventListener('click', () => {
        const newSrc = element.dataset.src;
        const newDesc = element.dataset.desc;
        changeVideoTips(newSrc , newDesc);
      })
  });
}

change();