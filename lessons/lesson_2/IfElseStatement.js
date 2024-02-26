const EXPECTED_TIME = 10;
let arrivalTime = 8;

// ==, ===, !=, !==, >, <, >=, <=
let isHeOntime = arrivalTime === EXPECTED_TIME;
if (isHeOntime) {
  console.log("let's talk!");
} else {
  console.log("write a letter");
}
