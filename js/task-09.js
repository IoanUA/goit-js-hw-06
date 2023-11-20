const body = document.querySelector('body');
const butt = document.querySelector('.change-color')
const span = document.querySelector('.color')



function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

butt.addEventListener("click", function () {
  var randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});

