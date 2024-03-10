/**
 * LOOP: for
 */
// Literal decleration
let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// In ra từng phần tử của mảng
for (let index = 0; index < myNumArray.length; index++) {
    const element = myNumArray[index];
   //console.log(element);
}

/**
 * Convert all number in the array into even number
 */
for (let index = 0; index < myNumArray.length; index++) {
    const currentValue = myNumArray[index];
    myNumArray[index] = currentValue * 2;
}

/**
 * Chỉ muốn check xem giá trị trong mảng chứ không cập nhật giá trị - for of
 */
 for (let value of myNumArray) {
    console.log(value);
 }