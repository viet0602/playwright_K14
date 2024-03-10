let myString = "abc123jg ";
console.log(myString);
//Muốn in một kí tự đặc biệt như '\', '`', '"'thì thêm dấu '\'
// Các phương thức xử lý chuỗi
//Length - số lượng kí tự bao gồm cả kí tự đặc biệt và khoảng trắng bên trong nó
const myStrLength = myString.length;
console.log(myStrLength);

//Get a character at a position
for (index = 0; index < myStrLength; index++) {
  console.log(myString.charAt(index + 1));
}

//Get rid of spaces at start and the end
console.log(myString.trim().length);

//Replace
//Toi nay gap nhau 7h -> remove m
let toBeReplacedStr = "tmomi mnmay gmap mnmhamu 7j";
// /g - global, /i - insensitive
console.log(toBeReplacedStr.replace(/m/gi, ""));
//console.log(toBeReplacedStr.replaceAll("m", ""));

//200mins
let containingNumStr = "200mins";
let num = containingNumStr.replace(/[^0-9]/gi, "");
console.log(num);
console.log(num + 1); //2001 - cộng chuỗi
console.log(Number(num) + 1); //201 - cộng số

// Concatination / concat - nối chuỗi
console.log("Hello" + " " + "World");
//Backstick `` | String template
let anotherVar = "567890-";
console.log(`type of num:${checkTypeOf(num)} ${anotherVar}`);

function checkTypeOf(num) {
  return typeof num;
}

//Substring - cắt một đoạn
let strToBeCut = "https://sdetpro.com";
const startIndex = 8;
const endIndex = 19;
//console.log(strToBeCut.substring(startIndex, endIndex));
let returnDomainName = getDomainName("https://sdetpro.com/");
console.log(returnDomainName);
function getDomainName(url) {
  let domain;
  //Logic go here
  const indicator = "://";
  const indexOfIndicator = url.indexOf(indicator);
  if (indexOfIndicator < 0) {
    const errMsg = `Invalid URL, provided url was:  ${url}`;
    throw Error(errMsg);
  }
  const domainStartIndex = indexOfIndicator + indicator.length;
  return url.substring(domainStartIndex).replace(/\//gi, "");
}

//Split - cắt theo qui luật
let googleStr = "https://google.com";
console.log(googleStr.split("://"));

