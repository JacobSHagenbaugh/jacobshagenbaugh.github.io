"use strict";

let costAmount = 25;
const menuArea = document.getElementById("upgrade-window");

class Upgrade {
    constructor(id, name, cost, icon) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.icon = icon;
    }

    spawnUpgrade() {
        const z = document.getElementById("upgrade-window");

        // Create the div.
        const a = document.createElement("div");
        a.id = "upgrade-card";
        a.setAttribute("onclick", ("upgrade(" + this.id + ")"));
        
        // Create the name plate.
        const b = document.createElement("p");
        b.innerHTML = (this.name);

        // Create the cost description.
        const c = document.createElement("p");
        c.innerHTML = ("Cost is " + this.cost + " Yeezys");

        // Add the upgrades to the DOM.
        z.append(a);
        a.append(b, c);
    }

    doUpgrade() {
        if (yeCount >= this.cost) {
            cursorCount++;
            yeCount = yeCount - this.cost;
            document.getElementById("yeCounter").innerHTML = ("Ye Count = " + yeCount);
        }
    }

}

const upgradeArray = [];
upgradeArray[0] = new Upgrade(0, "Yeezy Store", 20, "a");
upgradeArray[1] = new Upgrade(1, "G.O.O.D Music", 30, "a");
upgradeArray[2] = new Upgrade(2, "The White House", 50, "a");


// Add an upgrade to the menu bar.

function upgrade(x) {
    upgradeArray[x].doUpgrade();
}



/*

- cursor upgrade = new Upgrade("Cursor", 25, "cursor.png");
- when user gets to 25 clicks, it will spawn the Cursor upgrade
- eventually want to increase price over time of the upgrade


*/