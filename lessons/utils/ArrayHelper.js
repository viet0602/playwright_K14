//2. Function xử lý array luôn nhận 3 parameter theo thứ tự: value, index, array
const filterEvenNumber = function (value, index, array) {
  return value % 2 === 0;
};

const filterOddNumber = function (value, index, array) {
  return value % 2 !== 0;
};

const convertToEvenNumber = function (value, index, array) {
  if (value % 2 === 0) {
    return value + 1;
  } else {
    return value;
  }
};

const sortNumberASC = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber;
};

const sortNumberDESC = function (firstNumber, secondNumber) {
  return secondNumber - firstNumber;
};

module.exports = {
  filterEvenNumber: filterEvenNumber,
  filterOddNumber: filterOddNumber,
  convertToEvenNumber: convertToEvenNumber,
  sortNumberASC: sortNumberASC,
  sortNumberDESC: sortNumberDESC,
};
