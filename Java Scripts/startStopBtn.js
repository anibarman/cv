const startStopBtn = document.getElementById("startStopBtn");
let isRunning = false;

startStopBtn.addEventListener("click", function () {
  if (isRunning) {
    startStopBtn.style.backgroundColor = "green";
    startStopBtn.innerHTML = "Start";
    isRunning = false;
  } else {
    startStopBtn.style.backgroundColor = "red";
    startStopBtn.innerHTML = "Stop";
    isRunning = true;
  }
});
