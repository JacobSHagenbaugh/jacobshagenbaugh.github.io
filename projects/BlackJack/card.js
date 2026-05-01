"use strict";

class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }
    getNumber() {return this.number;}
    getSuit()   {return this.suit;}
    toString() {return "Card is " + this.getNumber() + " of " + this.getSuit()}

    drawCard() {
        const a = document.getElementById("playerCards");
        
        // Create div
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("playingCard");
        
        // Create card top
        const b = document.createElement("div");
        b.classList.add("card-top");
        const z = document.createElement("p");
        z.innerHTML = (this.number);

        // Create card mid
        const c = document.createElement("div");
        c.classList.add("card-mid");
        const y = document.createElement("p");

        if(this.suit == "Diamonds") {
            cardDiv.style.color = "red";
            y.innerHTML = ("♦");
        } else if(this.suit == "Hearts") {
            cardDiv.style.color = "red";
            y.innerHTML = ("♥");
        } else if(this.suit == "Clubs") {
            y.innerHTML = ("♣");
        } else {
            y.innerHTML = ("♠");
        }

        // Create card bottom
        const d = document.createElement("div");
        d.classList.add("card-btm");
        const v = document.createElement("p");
        v.innerHTML = (this.number);

        // Add all elements to the DOM.
        a.append(cardDiv);
        cardDiv.appendChild(b);
        cardDiv.appendChild(c);
        cardDiv.appendChild(d);
        b.appendChild(z);
        c.appendChild(y);
        d.appendChild(v);

    }
}

// Suit and Value for the cards.
const suit = ["Diamonds", "Hearts", "Clubs", "Spades"];
const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Create an array of cards with the above values.
const cardArray = [];
for(let i = 0; i < suit.length; i++) {
    for(let j = 0; j < value.length; j++) {
        cardArray.push(new Card(value[j].valueOf(), suit[i].valueOf()));
    }
}

function getCardValue(x) {
    let value;
    let number = cardArray[x].getNumber()
    switch(number) {
        case "2":
            value = 2;
            break;
        case "3":
            value = 3;
            break;
        case "4": 
            value = 4;
            break;
        case "5":
            value = 5;
            break;
        case "6":
            value = 6;
            break;
        case "7":
            value = 7;
            break;
        case "8":
            value = 8;
            break;
        case "9":
            value = 9;
            break;
        case "10":
            value = 10;
            break;
        case "J":
            value = 10;
            break;
        case "Q":
            value = 10;
            break;
        case "K":
            value = 10;
            break;
        default:
            value = 11;
            break;
    }
    return value;
}