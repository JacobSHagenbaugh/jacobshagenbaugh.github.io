"use strict";

/** 
 * PLAYER
 * -- Card 1
 * -- Card 2
 * 
 * -- Hit
 * -- -- Adds one card to hand.
 * -- Stand
 * -- -- Reveals DEALER card and determines win/loss.
 * */ 

let PLAYER = [cardArray[(Math.floor(Math.random() * 52))], cardArray[(Math.floor(Math.random() * 52))]]
let playerSum;
console.log(PLAYER[0].toString());
console.log(PLAYER[1].toString());

PLAYER[0].drawCard();
PLAYER[1].drawCard();


function hit() {
    PLAYER.push(cardArray[(Math.floor(Math.random() * 52))]);
    PLAYER[PLAYER.length - 1].drawCard();

    getPlayerSum();
    if (playerSum > 21) {
        console.log("BUST");
    }
}

function stand() {
    getDealerSum();
    getPlayerSum();
    if (dealerSum > playerSum && dealerSum <= 21) {
        console.log("YOU LOSE");
    } else if (dealerSum <= 16 && dealerSum !== playerSum) {
        DEALER.push(cardArray[(Math.floor(Math.random()* 52))]);
        stand();
    } else if (dealerSum == playerSum) { 
        console.log("PUSH")
    } else {
        console.log("YOU WIN");
    }
}

function getPlayerSum() {
    playerSum = 0;
    for (let i = 0; i < PLAYER.length; i++) {
        playerSum += getCardValue(cardArray.indexOf(PLAYER[i]));
    }
    console.log("Player's Sum: " + playerSum);
}

getPlayerSum();
/**
 * DEALER
 * -- Card 1
 * -- Card 2 (hidden)
 * 
 * -- IF PLAYER value >= DEALER value
 * -- -- Add card
 * -- IF DEALER value > PLAYER value
 * -- -- Dealer Win
 */

let DEALER = [cardArray[(Math.floor(Math.random() * 52))], cardArray[(Math.floor(Math.random() * 52))]];
let dealerSum;
console.log(DEALER[0].toString());
console.log(DEALER[1].toString());

function getDealerSum() {
    dealerSum = 0;
    for (let i = 0; i < DEALER.length; i++) {
        dealerSum += getCardValue(cardArray.indexOf(DEALER[i]));
    }
    console.log("Dealer's Sum: " + dealerSum);
}

getDealerSum();