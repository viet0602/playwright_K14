/**
 * CRUD: Create, Read, Update, Delete
 */
// Cách khai báo
// Literal decleration - Khai báo tường minh
let myNumArray = [1, 2, 3];

/**
 * length: number of elements in array
 * index: 0 -> (length - 1)
 * 
 */
console.log("Array length: ", myNumArray.length);
// Cách lấy giá trị
console.log("Value of the second num before updating", myNumArray[1]);

// Cách update giá trị
myNumArray[1] = 10;
console.log("Value of the second num after updating", myNumArray[1]);

// Via Array constructor - ko dùng
let viaConstructor = new Array(1, 2, 3);

// Nếu truy cập vào một phần từ ngoài mảng thì sẽ ra kết quả undefined
myNumArray[5] = 100;
console.log( myNumArray); // 1,2, 3, undefined, 100

// Cách cho 1 phần tử vào vị trí cuối  mảng
myNumArray.push(100);

// Cách delete một phần tử
myNumArray.splice(0); // Remove hết cả mảng
myNumArray.splice(0, 1); // Đúng ở vị trí số 0, xoá 1 phần tử

// Removing the last element from array
myNumArray.pop();

// Removing the first element
myNumArray.shift();

// Cách insert 1 phần tử vào vị trí bất kì
let myNewArr = [1, 3, 5, 6];
let whereToInsert = 1;
let numberOfArgTobeRemove = 1;
let valueToBeAdd = 2;
myNewArr.splice(whereToInsert, numberOfArgTobeRemove, valueToBeAdd);
console.log(myNewArr); // [1, 2, 3, 5, 6]
