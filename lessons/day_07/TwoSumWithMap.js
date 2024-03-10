/**
 * [3,7,22,1], target number: 8
 * return ra index của 2 số mà ở đó tổng của nó bằng targetNumber
 * Chỉ có 1 cặp và không có đảo chiều
 */
// Hint 01: nested lôp - 2 loops -> 0(n^2)
const givenArray = [3, 7, 22, 1];
const targetNumber = 8;
let indices = findIndicesUsingMap(givenArray, targetNumber);
console.log(indices);
function findIndices(givenArray, targetNumber) {
  for ( let firstNumberIndex = 0; firstNumberIndex < givenArray.length;firstNumberIndex++) {
    const firstNumber = givenArray[firstNumberIndex];
    for (let secondNumberIndex = firstNumberIndex + 1;secondNumberIndex < givenArray.length; secondNumberIndex++) {
      const secondNumber = givenArray[secondNumberIndex];
      if (firstNumber + secondNumber === targetNumber) {
        return [firstNumberIndex, secondNumberIndex];
      }
    }
  }
  return [];
}

// Hint 02: using map -> 0^n
function findIndicesUsingMap(givenArray, targetNumber) {
    let numberMap = new Map();
    for(let firstNumberIndex = 0; firstNumberIndex < givenArray.length; firstNumberIndex++) {
        const firstNumber = givenArray[firstNumberIndex];
        const lookingNumber = targetNumber - firstNumber;
        if(numberMap.has(lookingNumber)) {
            return [numberMap.get(lookingNumber), firstNumberIndex];
        }
        numberMap.set(firstNumber, firstNumberIndex);
    }
 return [];
}
