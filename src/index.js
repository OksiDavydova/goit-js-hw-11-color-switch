import './sass/style.scss';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector(['[data-action="start"]']); 
const stopBtn = document.querySelector(['[data-action="stop"]']);
const body = document.querySelector('body');
let changeColorId = null;

startBtn.addEventListener('click', changeColorHandler);
stopBtn.addEventListener('click', stopChangeColorHandler)

function changeColorHandler() {
  changeColorId = setInterval(() => {
    const randomColor = randomIntegerFromInterval(0,colors.length); 
    document.body.style.backgroundColor = colors[randomColor];
  }, 1000);
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
}

function stopChangeColorHandler() {
  clearInterval(changeColorId);
  document.body.style.backgroundColor = colors[0];

  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
}
