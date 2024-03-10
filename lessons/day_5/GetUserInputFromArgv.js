//readline được js cung cấp sẵn dùng để đọc input từ bàn phím của người dùng cho đến khi người ta dùng readline.close
// readline là asynchorous
// Để dùng được thì cần cài đặt readline-sync package
// 1. Init 1 simple project: npm init -y // sinh ra package.json
// 2. nmp i readline-sync  // sinh ra node_modules
const readline = require('readline-sync');
let userInput = readline.question('What is your name? ');
console.log('User input: ', userInput);
