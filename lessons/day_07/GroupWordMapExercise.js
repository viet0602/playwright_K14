/**
 * Given string : Hey, tui ten Teo, ban cung ten Teo ah?
 * --> output:
 * ten: 2
 * Teo: 2
 * ban: 1
 */
//Dùng split() +regex chia thành 1 mảng chứa từng từ tạo thành 1 map mới
//Loop qua từng từ, nếu từ chưa có trong map thì tạo key mới, count value = 1
//Nếu từ đã có trong map thì count++
const giventString = "Hey, tui ten Teo, ban cung ten Teo ah?";
let individualWords = giventString.replace(/,/gi, "").split(" ");
const returnedGroupWord = groupWordMap(giventString);
console.log(returnedGroupWord);

function groupWordMap(giventString) {
  let wordMap = new Map();
  for (const word of individualWords) {
    if (!wordMap.has(word)) {
      wordMap.set(word, 1);
    } else {
      wordMap.set(word, wordMap.get(word) + 1);
    }
  }
  return wordMap;
}
