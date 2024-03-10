/**
 * Tác dụng của function:
 * DRY: to group same login bloc into same place -> reusable
 * Group same logic category into same place
 * --> Maintainable -> extendable -> reliable
 * Giá trị trả về của function default là undefined
*/

// Function declaration (Gọi hàm rồi define sau) - có hoisting : it's hoisted to the top of the scrope
let myReturnValue = functionName();
console.log(myReturnValue);

function functionName() {
    // Logic to process parameters if any
    return 2;
}

// Function expression (define xong rồi gọi hàm)- không có hoisting
const addNumber = function(num1, num2) {
    return num1 + num2;
}
