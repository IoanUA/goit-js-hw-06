const body = document.querySelector('body');
const butt = document.querySelector('.change-color')
const span = document.querySelector('.color')

butt.addEventListener('click', onChangeBackground)


function getRandomHexColor() {
 
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}

function onChangeBackground(){
  span.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
}