"use strict";

const songlist = [
    {
      "Song": "F*ck Your Ethnicity",
      "Album": "Section.80",
      "Posistion": 1,
      "Features": "Alori Joh",
      "Time": 224
    },
    {
      "Song": "Hol' Up",
      "Album": "Section.80",
      "Posistion": 2,
      "Features": "",
      "Time": 173
    },
    {
      "Song": "A.D.H.D",
      "Album": "Section.80",
      "Posistion": 3,
      "Features": "Ab-Soul",
      "Time": 215
    },
    {
      "Song": "No Make-Up (Her Vice)",
      "Album": "Section.80",
      "Posistion": 4,
      "Features": "Colin Munroe, Alori Joh",
      "Time": 235
    },
    {
      "Song": "Tammy's Song (Her Evils)",
      "Album": "Section.80",
      "Posistion": 5,
      "Features": "",
      "Time": 161
    },
    {
      "Song": "Chapter Six",
      "Album": "Section.80",
      "Posistion": 6,
      "Features": "",
      "Time": 161
    },
    {
      "Song": "Ronald Reagan Era",
      "Album": "Section.80",
      "Posistion": 7,
      "Features": "Ash Riser, Ab-Soul, RZA",
      "Time": 216
    },
    {
      "Song": "Poe Mans Dreams (His Vice)",
      "Album": "Section.80",
      "Posistion": 8,
      "Features": "GLC",
      "Time": 261
    },
    {
      "Song": "Chatpter Ten",
      "Album": "Section.80",
      "Posistion": 9,
      "Features": "JaVonte",
      "Time": 75
    },
    {
      "Song": "Keisha's Song (Her Pain)",
      "Album": "Section.80",
      "Posistion": 10,
      "Features": "Ashtro Bot",
      "Time": 227
    },
    {
      "Song": "Rigamortus",
      "Album": "Section.80",
      "Posistion": 11,
      "Features": "",
      "Time": 168
    },
    {
      "Song": "Kush & Corinthians",
      "Album": "Section.80",
      "Posistion": 12,
      "Features": "BJ The Chicago Kid",
      "Time": 304
    },
    {
      "Song": "Blow My High (Members Only)",
      "Album": "Section.80",
      "Posistion": 13,
      "Features": "Aaliyah",
      "Time": 215
    },
    {
      "Song": "Ab-Souls Outro",
      "Album": "Section.80",
      "Posistion": 14,
      "Features": "Ab-Soul, Alori Joh",
      "Time": 350
    },
    {
      "Song": "HiiiPower",
      "Album": "Section.80",
      "Posistion": 15,
      "Features": "Alori Joh",
      "Time": 279
    },
    {
      "Song": "Sherane a.k.a Master Splinter's Daughter",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 1,
      "Features": "",
      "Time": 273
    },
    {
      "Song": "Bitch, Don't Kill My Vibe",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 2,
      "Features": "Anna Wise",
      "Time": 310
    },
    {
      "Song": "Backseat Freestyle",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 3,
      "Features": "",
      "Time": 212
    },
    {
      "Song": "The Art of Peer Pressure",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 4,
      "Features": "",
      "Time": 324
    },
    {
      "Song": "Money Trees",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 5,
      "Features": "Jay Rock, Anna Wise",
      "Time": 386
    },
    {
      "Song": "Poetic Justice",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 6,
      "Features": "Drake",
      "Time": 300
    },
    {
      "Song": "good kid",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 7,
      "Features": "Pharrell Williams",
      "Time": 214
    },
    {
      "Song": "m.A.A.d city",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 8,
      "Features": "MC Eiht, ScHoolboy Q",
      "Time": 350
    },
    {
      "Song": "Swimming Pools (Drank) - Extended Version",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 9,
      "Features": "",
      "Time": 313
    },
    {
      "Song": "Sing About Me, I'm Dying Of Thirst",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 10,
      "Features": "",
      "Time": 723
    },
    {
      "Song": "Real",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 11,
      "Features": "Anna Wise",
      "Time": 443
    },
    {
      "Song": "Compton",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 12,
      "Features": "Dr. Dre",
      "Time": 248
    },
    {
      "Song": "The Recipe",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 13,
      "Features": "Dr. Dre",
      "Time": 256
    },
    {
      "Song": "Black Boy Fly",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 14,
      "Features": "Anna Wise",
      "Time": 262
    },
    {
      "Song": "Now Or Never",
      "Album": "good kid, m.A.A.d city (Deluxe)",
      "Posistion": 15,
      "Features": "Mary J. Blige",
      "Time": 278
    },
    {
      "Song": "Wesley's Theory",
      "Album": "To Pimp A Butterfly",
      "Posistion": 1,
      "Features": "Josef Leimberg, Thudercat, George Clinton, Anna Wise, Whitney Alford",
      "Time": 287
    },
    {
      "Song": "For Free? - Interlude",
      "Album": "To Pimp A Butterfly",
      "Posistion": 2,
      "Features": "",
      "Time": 130
    },
    {
      "Song": "King Kunta",
      "Album": "To Pimp A Butterfly",
      "Posistion": 3,
      "Features": "Whitney Alford",
      "Time": 234
    },
    {
      "Song": "Institutionalized",
      "Album": "To Pimp A Butterfly",
      "Posistion": 4,
      "Features": "Anna Wise, Bilal, Taz Arnold, Snoop Dogg",
      "Time": 271
    },
    {
      "Song": "These Walls",
      "Album": "To Pimp A Butterfly",
      "Posistion": 5,
      "Features": "Anna Wise, Thundercat, Bilal",
      "Time": 300
    },
    {
      "Song": "u",
      "Album": "To Pimp A Butterfly",
      "Posistion": 6,
      "Features": "",
      "Time": 268
    },
    {
      "Song": "Alright",
      "Album": "To Pimp A Butterfly",
      "Posistion": 7,
      "Features": "Pharrell Williams, Thundercat",
      "Time": 219
    },
    {
      "Song": "For Sale? - Interlude",
      "Album": "To Pimp A Butterfly",
      "Posistion": 8,
      "Features": "Bilal",
      "Time": 291
    },
    {
      "Song": "Momma",
      "Album": "To Pimp A Butterfly",
      "Posistion": 9,
      "Features": "Lalah Hathway, Taz Arnold",
      "Time": 283
    },
    {
      "Song": "Hood Politics",
      "Album": "To Pimp A Butterfly",
      "Posistion": 10,
      "Features": "",
      "Time": 292
    },
    {
      "Song": "How Much A Dollar Cost",
      "Album": "To Pimp A Butterfly",
      "Posistion": 11,
      "Features": "James Fauntleroy, Ronald Isley",
      "Time": 261
    },
    {
      "Song": "Complexion (A Zulu Love)",
      "Album": "To Pimp A Butterfly",
      "Posistion": 12,
      "Features": "Pete Rock, JaVonte, Rapsody",
      "Time": 263
    },
    {
      "Song": "The Blacker The Berry",
      "Album": "To Pimp A Butterfly",
      "Posistion": 13,
      "Features": "Lalah Hathaway, Assassin",
      "Time": 328
    },
    {
      "Song": "You Ain't Gotta Lie (Momma Said)",
      "Album": "To Pimp A Butterfly",
      "Posistion": 14,
      "Features": "",
      "Time": 241
    },
    {
      "Song": "i",
      "Album": "To Pimp A Butterfly",
      "Posistion": 15,
      "Features": "",
      "Time": 336
    },
    {
      "Song": "Mortal Man",
      "Album": "To Pimp A Butterfly",
      "Posistion": 16,
      "Features": "James Fauntleroy",
      "Time": 727
    },
    {
      "Song": "untitled 01 | 08.19.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 1,
      "Features": "Bilal",
      "Time": 247
    },
    {
      "Song": "untitled 02 | 06.23.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 2,
      "Features": "",
      "Time": 258
    },
    {
      "Song": "untitled 03 | 05.28.2013.",
      "Album": "untitled unmastered.",
      "Posistion": 3,
      "Features": "Mani Strings, Bilal",
      "Time": 154
    },
    {
      "Song": "untitled 04 | 08.14.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 4,
      "Features": "SZA, Lance Skiiiwalker",
      "Time": 110
    },
    {
      "Song": "untitled 05 | 09.21.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 5,
      "Features": "Anna Wise, Punch, Jay Rock",
      "Time": 338
    },
    {
      "Song": "untitled 06 | 06.30.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 6,
      "Features": "CeeLo Green",
      "Time": 208
    },
    {
      "Song": "untitled 07 | 2014 - 2016",
      "Album": "untitled unmastered.",
      "Posistion": 7,
      "Features": "Egypt, Taz Arnold",
      "Time": 496
    },
    {
      "Song": "untitled 08 | 09.06.2014.",
      "Album": "untitled unmastered.",
      "Posistion": 8,
      "Features": "",
      "Time": 235
    },
    {
      "Song": "BLOOD.",
      "Album": "DAMN.",
      "Posistion": 1,
      "Features": "Bekon",
      "Time": 118
    },
    {
      "Song": "DNA.",
      "Album": "DAMN.",
      "Posistion": 2,
      "Features": "",
      "Time": 185
    },
    {
      "Song": "YAH.",
      "Album": "DAMN.",
      "Posistion": 3,
      "Features": "",
      "Time": 160
    },
    {
      "Song": "ELEMENT.",
      "Album": "DAMN.",
      "Posistion": 4,
      "Features": "",
      "Time": 208
    },
    {
      "Song": "FEEL.",
      "Album": "DAMN.",
      "Posistion": 5,
      "Features": "",
      "Time": 214
    },
    {
      "Song": "LOYALTY.",
      "Album": "DAMN.",
      "Posistion": 6,
      "Features": "DJ Dahi, Rihanna",
      "Time": 227
    },
    {
      "Song": "PRIDE.",
      "Album": "DAMN.",
      "Posistion": 7,
      "Features": "Bekon, Steve Lacy, Anna Wise",
      "Time": 275
    },
    {
      "Song": "HUMBLE.",
      "Album": "DAMN.",
      "Posistion": 8,
      "Features": "",
      "Time": 177
    },
    {
      "Song": "LUST.",
      "Album": "DAMN.",
      "Posistion": 9,
      "Features": "",
      "Time": 307
    },
    {
      "Song": "LOVE.",
      "Album": "DAMN.",
      "Posistion": 10,
      "Features": "Zacari",
      "Time": 213
    },
    {
      "Song": "XXX.",
      "Album": "DAMN.",
      "Posistion": 11,
      "Features": "Bekon, U2",
      "Time": 254
    },
    {
      "Song": "FEAR.",
      "Album": "DAMN.",
      "Posistion": 12,
      "Features": "Charles Edward Sydney Isom Jr., Bekon",
      "Time": 460
    },
    {
      "Song": "GOD.",
      "Album": "DAMN.",
      "Posistion": 13,
      "Features": "",
      "Time": 248
    },
    {
      "Song": "DUCKWORTH.",
      "Album": "DAMN.",
      "Posistion": 14,
      "Features": "Bekon",
      "Time": 248
    },
    {
      "Song": "United In Grief",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 1,
      "Features": "Sam Dew",
      "Time": 255
    },
    {
      "Song": "N95",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 2,
      "Features": "",
      "Time": 195
    },
    {
      "Song": "Worldwide Steppers",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 3,
      "Features": "",
      "Time": 203
    },
    {
      "Song": "Die Hard",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 4,
      "Features": "Kadhja Bonet, Blxst, Amanda Reifer",
      "Time": 239
    },
    {
      "Song": "Father Time",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 5,
      "Features": "Sampha",
      "Time": 222
    },
    {
      "Song": "Rich - Interlude",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 6,
      "Features": "Kodak Black, Sampha",
      "Time": 103
    },
    {
      "Song": "Rich Spirit",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 7,
      "Features": "Sam Dew",
      "Time": 202
    },
    {
      "Song": "We Cry Together",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 8,
      "Features": "Taylour Paige",
      "Time": 341
    },
    {
      "Song": "Purple Hearts",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 9,
      "Features": "Summer Walker, Ghostface Killah",
      "Time": 329
    },
    {
      "Song": "Count Me Out",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 10,
      "Features": "Sam Dew",
      "Time": 283
    },
    {
      "Song": "Crown",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 11,
      "Features": "",
      "Time": 264
    },
    {
      "Song": "Silent Hill",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 12,
      "Features": "Kodak Black",
      "Time": 220
    },
    {
      "Song": "Savior - Interlude",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 13,
      "Features": "Baby Keem",
      "Time": 152
    },
    {
      "Song": "Savior",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 14,
      "Features": "Baby Keem, Sam Dew",
      "Time": 224
    },
    {
      "Song": "Auntie Diaries",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 15,
      "Features": "",
      "Time": 281
    },
    {
      "Song": "Mr. Morale",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 16,
      "Features": "Sam Dew, Tanna Leone",
      "Time": 210
    },
    {
      "Song": "Mother I Sober",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 17,
      "Features": "Beth Gibbons, Sam Dew",
      "Time": 406
    },
    {
      "Song": "Mirror",
      "Album": "Mr. Morale & The Big Steppers",
      "Posistion": 18,
      "Features": "",
      "Time": 256
    }
  ];

// GLOBAL VARIABLES
var guessNum = 1;
var userGuess;

// USE UNDERSCORE.JS TO PULL ONLY ONE ITERATION OF EACH ALBUM AND PLACE
// THEM IN TO AN ARRAY
var albumArray = _.uniq(songlist.map(album => album.Album), false);

// GET THE CORRECT ANSWER
const correctAnswer = Math.floor(Math.random() * songlist.length);
console.log("CORRECT ANSWER: " + songlist[correctAnswer].Song);

// RETRIEVE USER'S GUESS FROM INPUT FIELD
function getUserGuess(e) {
  if (e.key === "Enter") {
    userGuess = document.getElementById("userGuess").value;
    console.log("USER GUESS = " + userGuess);
    displayGuess();
  }
}

// GET ALBUM ARTWORK
var albumArt = "";
function getAlbumArt(x) {
  for(let i = 0; i < albumArray.length; i++) {
    if (albumArray[i] === songlist[x].Album) {
      albumArt = "img/" + i + ".jpg";
      console.log("Hello");
      break;
    } 
  }
  return albumArt;
}

// ****** TAKE CARE OF THIS BEFORE RELEASE OF FIRST ITERATION *******
document.getElementById("albumArt").src = getAlbumArt(correctAnswer);
// ******************************************************************

// AUTOCOMPLETE FUNCTION
function autoComplete() {

}

// DISPLAY USER'S GUESS ON THE TABLE
function displayGuess() {
  for (let i = 0; i < songlist.length; i++) {
    if (
        userGuess.toLowerCase() === songlist[correctAnswer].Song.toLowerCase()
    ) {
      console.log("YOU GOT IT RIGHT");
      break;
    } else if (
        userGuess.toLowerCase() === songlist[i].Song.toLowerCase()
    ) {
      console.log(userGuess + " is incorrect");
      break;
    } 
    else {
      console.log("Invalid guess");
    }
  }
}

function getCell1(x) {
  songlist[x].Song;
}

