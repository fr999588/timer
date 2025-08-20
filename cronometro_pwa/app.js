let timer = 0;
let interval = null;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  timerDisplay.textContent = `${timer}s`;
}

function startTimer() {
  if (!isRunning) {
    interval = setInterval(() => {
      timer++;
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  stopTimer();
  timer = 0;
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopTimer();
  } else {
    startTimer();
  }
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
