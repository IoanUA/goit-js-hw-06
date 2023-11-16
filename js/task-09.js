const body = document.querySelector('body');
const butt = document.querySelector('change-color')
body.style.backgroundColor = 'red';






function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
