var sessionDuration = 1500;
var breakDuration = 300;
var minutes = 0;
var seconds = 0;
var sessionOn = true;
var timerFunction;
var time = sessionDuration;

function startTimer() {
  //var timer = time; // 1500
  timerFunction = setInterval(function() {
    minutes = parseInt(time / 60, 10);
    seconds = parseInt(time % 60, 10);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("timerTime").value = minutes + ":" + seconds;
    //time = timer;
    time--;
    if (time < 0) {
      if (sessionOn) {
        time = breakDuration;
        sessionOn = false;
      } else {
        time = sessionDuration;
        sessionOn = true;
      }
    }
  }, 1000);
}

function pauseTimer() {
  clearTimeout(timerFunction);
}

function resetTimer() {
  clearTimeout(timerFunction);
  time = sessionDuration;
  minutes = parseInt(time / 60, 10);
  seconds = parseInt(time % 60, 10);
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("timerTime").value = minutes + ":" + seconds;
}

function incrementPomodoroTime() {
  clearTimeout(timerFunction);
  sessionDuration += 60;
  time = sessionDuration;
  minutes = parseInt(sessionDuration / 60, 10);
  seconds = parseInt(sessionDuration % 60, 10);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("pomodoroTime").value = minutes + ":" + seconds;
  document.getElementById("timerTime").value = minutes + ":" + seconds;
}

function decrementPomodoroTime() {
  clearTimeout(timerFunction);
  if (sessionDuration >= 120) {
    sessionDuration -= 60;
    time = sessionDuration;
    minutes = parseInt(sessionDuration / 60, 10);
    seconds = parseInt(sessionDuration % 60, 10);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("pomodoroTime").value = minutes + ":" + seconds;
  }
}

function incrementBreakTime() {
  clearTimeout(timerFunction);
  breakDuration += 60;
  time = breakDuration;
  minutes = parseInt(breakDuration / 60, 10);
  seconds = parseInt(breakDuration % 60, 10);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("breakTime").value = minutes + ":" + seconds;
}

function decrementBreakTime() {
  clearTimeout(timerFunction);
  if (breakDuration >= 120) {
    breakDuration -= 60;
    time = breakDuration;
    minutes = parseInt(breakDuration / 60, 10);
    seconds = parseInt(breakDuration % 60, 10);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById("breakTime").value = minutes + ":" + seconds;
  }
}