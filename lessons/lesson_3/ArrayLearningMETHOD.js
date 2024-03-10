const {
  filterEvenNumber,
  convertToEvenNumber,
  sortNumberASC,
  sortNumberDESC,
} = require("../utils/ArrayHelper");
/**
 * Method to process array
 */

// Literal declaration
let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Lọc các số chẵn trong mảng
// Hầu như các method trong array có thể nhận một function làm parameter
// Method mà đưa cặp ngoặc tròn là gọi nó, qui chiếu nó và bảo nó thực thi

// FILTER
//1. Khi đưa method mà ko có ngoặc tròn tức là chỉ đưa định nghĩa - chưa yêu cầu thực thi
myNumArray = myNumArray.filter(filterEvenNumber);
// myNumArray = myNumArray.filter(value => value % 2 === 0); - arround function

//2. Function xử lý array luôn nhận 3 parameter theo thứ tự: value, index, array

/** MAP
 * Ánh xạ 2 vùng dữ liệu - chuyển đổi từ cái này sang 1 cái khác qua một quy luật nhất định
 * MAP sth --> [SAME rule/logic] --> smth else
 */
const evenNumberArr = myNumArray.map(convertToEvenNumber);

/** SORT String: Asc, Desc
 * Asc, Desc
 *
 */
let myString = ["B", "A", "E", "D", "E"];
myString.sort(); // A , B , D, E, E
myString.reverse(); // E, E, D, B, A

/**
 * SORT: Number
 */
let complexNumArray = [100, 5, 8, 12];
complexNumArray.sort(sortNumberASC); // 5,8,12,100
complexNumArray.sort(sortNumberDESC); // 100, 12, 8,5

// PRINT RESULTS
console.log(complexNumArray);
