"use strict";

const menu = document.getElementById("start-menu");
const startButton = document.getElementById("start-button");

// Start Button Functionality
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && menu.hidden == false 
    && !startButton.contains(event.target)) {
        menu.hidden = true;  
    }
});

function openMenu() {
    menu.hidden = false;
    console.log("openMenu() Pressed")
}

// Menu Functions
