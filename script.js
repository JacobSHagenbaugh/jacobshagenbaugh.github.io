"use strict"

setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = currentTime;
}, 1000);

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDay();
document.getElementById("date").innerText = currentMonth + "/" +
    currentDay + "/" + currentYear;