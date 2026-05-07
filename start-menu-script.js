"use strict";

const menu = document.getElementById("start-menu");
const startButton = document.getElementById("start-button");

// Start Button Functionality
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && menu.style.display == "flex" 
    && !startButton.contains(event.target)) {
        menu.style.display = "none";
        console.log("close menu");  
    }
});

function openMenu() {
    menu.style.display = "flex";
    console.log("openMenu() Pressed")
}

// Menu Functions
