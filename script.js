function modalpop(){
    document.getElementById('modal-pop').style.display='block';
    $('#container').css("pointer-events", "none");
    $('#container').css("opacity", "0.4");
}

function modalclose(){
    document.getElementById('modal-pop').style.display='none';
    $('#container').css("pointer-events", "visible");
    $('#container').css("opacity", "1");
}
var seconds;
function startTime() {
    document.querySelector('form').addEventListener('submit', function() {
        event.preventDefault();
    var h = this.elements.hour.value;
    var m = this.elements.min.value;
    var s = this.elements.sec.value;
    h=checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    modalclose();
    var hms =$("#txt").text();
    var a = hms.split(':');
     seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
   // console.log(seconds);
   var display = document.querySelector('#txt');
 //   console.log(display);
    startTimer(seconds, display);
    // document.getElementById('start-btn').style.display='none';
    // document.getElementById('stop-btn').style.display='block';
});
}
  
function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

//startTime();

var timer;
var interval;
function startTimer(duration, display) {
    timer = duration;
    var hours,minutes, seconds;
    
    interval= setInterval(function () {
        $("#startBtn").hide();
        $("#stopBtn").show();
        $("#reset").show();
        $("#settime").hide();
        var hours = Math.floor(timer / 3600);
        var minutes = Math.floor(timer % 3600 / 60);
        var seconds = Math.floor(timer % 3600 % 60);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            document.getElementById('txt').innerHTML = "00:00:00";
            $("#startBtn").show();
            $("#stopBtn").hide();
            $("#settime").show();
            
        }
    }, 1000);
}

function reset(){
   timer=seconds;
        var h = Math.floor(timer / 3600);
        var m = Math.floor(timer % 3600 / 60);
        var s = Math.floor(timer % 3600 % 60);
        h=checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
   document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
   stop();
   
  
   
}

function start(){
//console.log(timer);
var stardisplay = document.querySelector('#txt');
//console.log(stardisplay);
startTimer(timer, stardisplay);
    $("#startBtn").hide();
    $("#stopBtn").show();
}

function stop(){
    console.log(timer,interval);
    clearInterval(interval);
    $("#startBtn").show();
    $("#stopBtn").hide();

}


var selecthour = '';
for (i=0;i<=100;i++){
    selecthour += '<option val=' + i + '>' + i + '</option>';
}
$('#hour').html(selecthour);

var selectminute = '';
for (i=0;i<=59;i++){
    selectminute += '<option val=' + i + '>' + i + '</option>';
}
$('#min').html(selectminute);

var selectseconds = '';
for (i=0;i<=59;i++){
    selectseconds += '<option val=' + i + '>' + i + '</option>';
}
$('#sec').html(selectseconds);