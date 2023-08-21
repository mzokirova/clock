'use strict';

setInterval(() => {

    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    // hour = addPm(hour);
    minute = addZero(minute);
    second = addZero(second);
    document.querySelector('h1').textContent = `${hour}:${minute}:${second}`;


    // color
    let randomColor = 'rgb(' + (Math.floor(Math.random() * 255)) + ','
        + (Math.floor(Math.random() * 255)) + ',' + (Math.floor(Math.random() * 255)) + ')';
    document.querySelector('body').style.backgroundColor = randomColor;
}, 1000);
function addZero(num) {
    if (num < 10) {
        num = "0" + num;
    }
    return num;
}
function addPm(h) {
    if (h > 12) {
        h = h + 'pm';
    }
    return h;
}