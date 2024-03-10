function divide(number1, number2) {
  return Math.round(number1 / number2); // round: làm tròn số, 2.5 = 3, 2.3 = 2; round(10/3) = 3;
}
//ceil - làm tròn lên: ceil(10/3) = 4;
//floor - làm tròn xuống: floor(10/3) = 3;

// let result = divide(10); // Không có lỗi vì number2 = underfined >> result = NaN

function isEvenNumber(number) {
  return number % 2 === 0;
}

module.exports = {
  divide: divide,
  isEvenNumber: isEvenNumber
};
