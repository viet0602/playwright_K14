let intArr = [9, 2, 11, 4, 34, 5, 7];
let temp = 0;
for (let i = 0; i < intArr.length; i++) {
    for(let j = i+1; j < intArr.length; j++){
        if(intArr[i] > intArr[j]){
            temp = intArr[i];
            intArr[i] = intArr[j];
            intArr[j] = temp;
        }
    }
}
console.log("Expected output: ", intArr);
