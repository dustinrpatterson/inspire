function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var convention = timeOfDay(h)
    m = checkTime(m);
    s = checkTime(s);
    h = notMilitary(h);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s + " " + convention;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
};

function notMilitary(hour){
    if(hour > 12){
        hour = hour - 12;
    };
    return hour;
};

function timeOfDay(hour){
    if(hour < 12){
        convention = "AM"
    }else{
        convention = "PM"
    };
    return convention;
};