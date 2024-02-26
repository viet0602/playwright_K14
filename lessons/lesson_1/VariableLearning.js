// Naming convention:camelCase
// Data type in Java script is dynamic : Java chỉ cấp vùng nhớ cho từng loại dữ liệu tương ứng (static data type) và không được chuyển loại nhưng java script thì
// cho phép cấp vùng nhớ cho all các loại dữ liệu --> dữ liệu sẽ tự động được converted  -- nên mình nên dùng typescript
let myName = 'Teo';
myName = 18; //Java don't allow this
console.log(myName);

console.log(typeof myName);
let amIRight = true;

//constant | ALL_WORDS_ARE_UPPER_CASE |Can't change value
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
const PI_NUMBER = 3.14;

//function is not data type