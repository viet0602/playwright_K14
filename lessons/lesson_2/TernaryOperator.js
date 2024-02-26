const EXPECTED_TIME = 10;
let arrivalTime = 8;

let isHeOntime = arrivalTime === EXPECTED_TIME;
let msgContent = '';
/*
if(isHeOntime){
    msgContent = "let's talk!";
}else {
   msgContent = "write a letter";
}
*/

// Ternary operator (Toán tử 3 ngôi)
msgContent = isHeOntime? "let's talk!" : "write a letter";
console.log(msgContent) ;