let intArr = [1, 2, 3, 4, 4, 5, 6];
let evenNumber=0;
let oddNumber=0;
for(let i=0; i<intArr.length; i++){
    if(intArr[i]%2===0){
        evenNumber++;
    }else{
        oddNumber++;
    }
}
console.log("Even number: ", evenNumber);
console.log("Odd number: ", oddNumber);
