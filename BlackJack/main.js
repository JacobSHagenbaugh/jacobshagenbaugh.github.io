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

function hit() {
    PLAYER.push(cardArray[(Math.floor(Math.random() * 52))]);
    getPlayerSum();
    if (playerSum > 21) {
        console.log("BUST");
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