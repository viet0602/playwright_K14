/**
 * unsortedPosition = arr.length -1;
 * currentIndex = 0 && currentInđex <unsortedPosition
 *
 * while (unsortedPosition > 0)
 * Loop
 * if (leftValue > rightValue)
 *  Swap
 * unsortedPosition--;
 */

let array = [9, 2, 11, 4, 34, 5, 7];
let unsortedPosition = array.length - 1;
while (unsortedPosition > 0) {
  for (let index = 0; index < unsortedPosition; index++) {
    leftValue = array[index];
    rightValue = array[index + 1];
    if (leftValue > rightValue) {
      // swap with temporary variable
      array[index] = rightValue;
      array[index + 1] = leftValue;
  
      // swap without temporary variable
      /**
       * a = 10,
       * b = 2
       * a = a + b = 10 +2 = 12 (a = 12, b = 2)
       * b = a - b = 12 - 2 = 10 (a = 12, b = 10)
       * a = a - b = 12 - 10 = 2 (a = 2, b = 10)
       */
    }
  }
  unsortedPosition--;
}
console.log("Expected output: ", array);
