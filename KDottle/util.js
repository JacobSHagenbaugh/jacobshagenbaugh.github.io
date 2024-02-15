"use strict";

// util.js IS USED FOR ANY FUNCTIONS THAT AREN'T STRICTLY FOR
// KDOTTLE, BUT INSTEAD ARE JUST QUALITY OF LIFE TO CLEAN UP ANY
// MESSES.

function toMinSec(time) {
    if (time < 60) {
        return "0:" + time;
    } else if (time % 60 >= 10) {
        return Math.floor(time / 60) + ":" + (time % 60);
    } else {
        return Math.floor(time / 60) + ":0" + (time % 60);
    }
}
