let intArray = [9, 2, 3, 7, 5, 8, 7];
let min = intArray[0];
for (let i = 1; i < intArray.length; i++) {
    if(intArray[i] < min){
        min = intArray[i];
    }
}
console.log("Min number: ", min);
let max = intArray[0];
for (let i = 1; i < intArray.length; i++) {
    if(intArray[i] > max){
        max = intArray[i];
    }
}
console.log("Max number: ", max);