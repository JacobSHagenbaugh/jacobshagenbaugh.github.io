"use strict";

// GLOBAL VARIABLES
var guessNum = 0;
var userGuess;
var albumArt = "";
var albumNum;

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
    checkGuess();
    document.getElementById("guessNumber").innerHTML = "Guess " + (guessNum + 1) + " of 6";
    // CLEAR INPUT FIELD
    document.getElementById("userGuess").value = "";
  }
}

// GET ALBUM ARTWORK
function getAlbumArt(x) {
  for(let i = 0; i < albumArray.length; i++) {
    if (albumArray[i] === songlist[x].Album) {
      albumArt = "img/" + i + ".jpg";
      break;
    } 
  }
  return albumArt;
}

// GET ALBUM NUMBER
function getAlbumNumber(x) {
  for (let i = 0; i < albumArray.length; i++) {
    if (albumArray[i] === songlist[x].Album) {
      albumNum = i;
      break;
    }
  }
  return albumNum;
}

// ****** TAKE CARE OF THIS BEFORE RELEASE OF FIRST ITERATION *******
// document.getElementById("albumArt").src = getAlbumArt(correctAnswer);
// ******************************************************************

// CHECK IF USER'S GUESS IS CORRECT
function checkGuess() {
  for (let i = 0; i < songlist.length; i++) {
    if (userGuess.toLowerCase() === songlist[correctAnswer].Song.toLowerCase()) {
      console.log("YOU GOT IT RIGHT");
      displayGuess(correctAnswer);
      guessNum++;
      gameWin();
      break;
    } else if (userGuess.toLowerCase() === songlist[i].Song.toLowerCase()) {
      if (guessNum < 5) {  
        console.log(userGuess + " is incorrect");
        displayGuess(i);
        guessNum++;
        break;
      } else {
        displayGuess(i);
        gameLoss();
        break;
      }
    } 
    else {
      console.log("Invalid guess");
    }
  }
}

// DISPLAY USER'S GUESS ON THE TABLE
function displayGuess(x) {

  var table = document.getElementById("answerBoard");
  var row = table.insertRow(guessNum + 1);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  
  // CELL 1 (SONG NAME)
  cell1.innerHTML = songlist[x].Song;
  if (songlist[x].Song === songlist[correctAnswer].Song) {
    cell1.style.background = "#3db946";
  }

  // CELL 2 (ALBUM)
  var art = document.createElement("img");
  art.src = getAlbumArt(x);
  cell2.innerHTML = songlist[x].Album;
  cell2.prepend(art);

  if (songlist[x].Album === songlist[correctAnswer].Album) {
    cell2.style.background = "#3db946";
  } else if ( getAlbumNumber(x) + 1 >= getAlbumNumber(correctAnswer) && 
              getAlbumNumber(x) - 1 <= getAlbumNumber(correctAnswer)) {
    cell2.style.background = "#fbff83";
  } 


  // CELL 3 (POSISTION)
  cell3.innerHTML = songlist[x].Posistion;
  if (songlist[x].Posistion === songlist[correctAnswer].Posistion) {
    cell3.style.background = "#3db946";
  } else if(
      songlist[x].Posistion + 1 >= songlist[correctAnswer].Posistion && 
      songlist[x].Posistion - 1 <= songlist[correctAnswer].Posistion) {
    cell3.style.background = "#fbff83";
  }

  // CELL 4 (FEATURES)
  cell4.innerHTML = songlist[x].Features;
  
  let guessFeat = songlist[x].Features.split(",");
  let correctFeat = songlist[correctAnswer].Features.split(",");

  if (songlist[x].Features === songlist[correctAnswer].Features) {
    cell4.style.background = "#3db946";
  } else if (songlist[x].Features.length > 0) {
    for (let i = 0; i < guessFeat.length; i++) {
      for (let j = 0; j < correctFeat.length; j++) {
          if(guessFeat[i] === correctFeat[j]) {
            cell4.style.background = "#fbff83";
            break;
          }
      }
    }
  }

  // CELL 5 (TIME)
  cell5.innerHTML = toMinSec(songlist[x].Time);
  if (songlist[x].Time === songlist[correctAnswer].Time) {
    cell5.style.background = "#3db946";
  } else if ( 
    songlist[x].Time + 30 >= songlist[correctAnswer].Time &&
    songlist[x].Time - 30 <= songlist[correctAnswer].Time ) {
    cell5.style.background = "#fbff83";
  }
}

function gameWin() {
  console.log("Win");
}

function gameLoss() {
  console.log("Loss");
}

function shareButton() {

}
