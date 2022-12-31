function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let bodyBackgroundTimerID = null;
let isBodyBackgroundIntervalWorks = false;
const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  if (isBodyBackgroundIntervalWorks) {
    return;
  }

  bodyBackgroundTimerID = setInterval(changeBodyBackground, 1000);
  isBodyBackgroundIntervalWorks = true;
  //   console.log('Started');
}

function onStopBtnClick() {
  clearInterval(bodyBackgroundTimerID);
  isBodyBackgroundIntervalWorks = false;
  //   console.log('Stoppped');
}

function changeBodyBackground() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
