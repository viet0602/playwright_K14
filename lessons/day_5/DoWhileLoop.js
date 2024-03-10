// 1. Do sth before checking the condition for the FIRST interaction
const readline = require("readline-sync");
let guessingTime = 0;
let randomNumber = getRandumNumber();
do {
  let userNumber = getUserNumber();
  if (userNumber === randomNumber) {
    console.log("You win");
    break;
  }
  guessingTime++;
} while (guessingTime < 3);

if (guessingTime === 3) {
  console.log("You lose");
}

function getRandumNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function getUserNumber() {
  return readline.question("Your number: ");
}
