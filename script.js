var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

hexClock()
setInterval(hexClock, 1000)

function hexClock() {
    var time = new Date()
    var hours = (time.getHours() % 12).toString();
    var mins = time.getMinutes().toString();
    var sec = time.getSeconds().toString();

    if (hours.length < 2) {
        hours = '0' + hours;
    }

    if (mins.length < 2) {
        mins = '0' + mins;
    }

    if (sec.length < 2) {
        sec = '0' + sec;
    }
    
    var clockStr =  hours + '  : ' + mins + ' : ' + sec
    var hexColorStr = '#' + hours + mins + sec;   

    clock.textContent = clockStr;
    hexColor.textContent = hexColorStr;

    document.body.style.backgroundColor = hexColorStr;
}

 