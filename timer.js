// Timer App

var ctime = "1∶00";
if (!sessionStorage['time']) {
  sessionStorage.setItem('time', ctime);
}

var tset = sessionStorage.getItem('time');
var xset = tset.split(/[∶]+/);
var stop = 0;

document.getElementById('timer').innerHTML = xset[0] + "∶" + xset[1];

function initTimer () {
   var test = document.getElementById('timer').innerHTML;
   toggleText("startbutton");
   if (test != tset) {
      stop = 1;
   }
   else {
      startTimer();
   }
}


function startTimer() {
  var audio = new Audio('wecker.mp3');
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[∶]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if (m == 0 && s == 00) {
    audio.play();
    toggleText("startbutton");
  }
  if (m < 0 || stop == 1) {
     stop = 0;
     var tset = sessionStorage.getItem('time');
     var xset = tset.split(/[∶]+/);
     document.getElementById('timer').innerHTML = xset[0] + "∶" + xset[1];
     return;
  }
  document.getElementById('timer').innerHTML = m + "∶" + s;
  setTimeout(startTimer, 1000);
}


function checkSecond(sec) {

  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


function toggleText(button_id)  {
   var text = document.getElementById(button_id).firstChild;
   text.data = text.data == "Start" ? "Reset" : "Start";
}

