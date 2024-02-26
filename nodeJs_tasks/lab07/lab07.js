const readlineSync = require("readline-sync");

function groupWords() {
  const groupWords = {};
  /**
   * {
   * Hello: 1
   * teo:2
   * }
   */
  // Hello toi ten teo teo teo
  const userInput = readlineSync.question("Please enter a sentence: ");
  const words = userInput.split(" ");
  words.forEach(function (word) {
    // .hasOwnProperty
    if (groupWords[word]) {
      groupWords[word]++;
    } else {
      groupWords[word] = 1;
    }
  });
  console.log(groupWords);
}
groupWords();
