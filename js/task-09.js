const body = document.querySelector('body');
const butt = document.querySelector('.change-color')
const span = document.querySelector('.color')

butt.addEventListener('click', getRandomHexColor)


function getRandomHexColor() {
 
 const ColorCode = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  span.textContent = ColorCode;
  body.style.backgroundColor = ColorCode;
 
}

