const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};
let timerId = null;

refs.btnStart.addEventListener('click', onBtnStartClick);

refs.btnStop.addEventListener('click', () => {
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function onBtnStartClick(e) {
  if (timerId !== null) {
    clearInterval(timerId);
  }
  const value = getRandomHexColor();
  document.body.style.backgroundColor = value;
  timerId = setInterval(onBtnStartClick, 1000);
}
