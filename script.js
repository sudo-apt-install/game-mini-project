var words = ["variable", "array", "modulus", "object", "function", "string", "boolean", "number", "null"];

// timer function
var timeEl = document.querySelector(".timer-count");
console.log(timeEl)
timeEl.textContent = secondsLeft;

var secondsLeft = 11;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1000);
}

setTime();