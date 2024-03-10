const readline = require("readline-sync");

/**
 * ======GAME MENU======
 * 1. Generate a random number (1->10)
 * 0. Exit
 */
let isPlaying = true;
while (isPlaying) {
  printGameMenu();
  let userOption = getUserOption();
  if (userOption == 0) {
    isPlaying = false;
  } else if (userOption == 1) {
    // Generate a random number
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    /**
     * (Math.random() * 10): Lấy ra 1 con số bé hơn 10
     * Math.floor(Math.random() * 10) : Lấy ra được tối đa con số 9
     */
    // and print out
    console.log("Random number: ", randomNumber);
  } else {
    console.log("Invalid option");
  }
}
console.log("Bye");
function printGameMenu() {
  console.log(
    "======GAME MENU======\n1. Generate a random number (1->10)\n0. Exit"
  );
}
function getUserOption() {
  return readline.question("Your option: ");
}
