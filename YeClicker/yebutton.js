"use strict";

let imageCounter = 0;
let upCount = 0;

function yeClick() {
    yeCount = yeCount + cursorCount;
    imageCounter++;

    document.getElementById("yeCounter").innerHTML = ("Ye Count = " + yeCount); 

    switch (yeCount) {
        case 10:
            if(upCount < 1) {upgradeArray[0].spawnUpgrade();}
            upCount++;
            break;
        case 100:
            if(upCount = 1) {upgradeArray[1].spawnUpgrade();}
            upCount++;
            break;
        case 1000:
            if(upCount = 2) {upgradeArray[2].spawnUpgrade();}
            upCount++;
            break;
    }

    if(imageCounter <= 10) {
        smallYePopup();
        // Supposed to limit the amount of the small Ye's, I don't think it should work
        // but it does so we're just going to roll with it...
    }

}

function smallYePopup() {
    // Small Ye Image Popup
    document.getElementById("Ye").addEventListener("click", function(event) {
        
        const mouseX = event.clientX;
        const mouseY = event.clientY;
    
        // Create a new image element every time the button is clicked
        const newImage = document.createElement("img");
        newImage.src = "img/ye.png";  // Replace with the actual image path
        newImage.alt = "Popup Image";
        newImage.classList.add("popup-image");
        newImage.classList.add("animate__animated");
        newImage.classList.add("animate__fadeOutUp");

        // Create the increase number popup.
        let increasePop = ("+" + cursorCount);
        const increaseAmount = document.createElement("p");
        increaseAmount.innerHTML = (increasePop);
        increaseAmount.classList.add("popup-image");
        increaseAmount.classList.add("popup-text");
        increaseAmount.classList.add("animate__animated");
        increaseAmount.classList.add("animate__fadeOutUp");
    
        // Position the items at the cursor location
        newImage.style.left = `${mouseX}px`;
        newImage.style.top = `${mouseY}px`;
        increaseAmount.style.left = `${mouseX}px`;
        increaseAmount.style.top = `${mouseY}px`;
        
    
        // Append the new image to the body
        document.body.appendChild(newImage);
        document.body.appendChild(increaseAmount);
    
        // Make the image visible
        newImage.style.display = "block";
        newImage.style.pointerEvents = "none";
        increaseAmount.style.display = "block";
        increaseAmount.style.pointerEvents = "none";

        // Make image undraggable
        newImage.draggable = false;
        newImage.ondragstar = false;
    


        // Hide the image and text after 1 second (1000 ms)
        setTimeout(function() {
        newImage.style.opacity = "0";  // Fade out effect
        increaseAmount.style.opacity = "0";
        setTimeout(function() {
            newImage.remove();  // Remove the image from the DOM after it fades out
            increaseAmount.remove();

        }, 500);  // Wait for the fade out to finish before removing the image
        }, 1000);
    });
}