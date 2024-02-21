let myString = "abc123jg ";
console.log(myString);

//Length
const myStrLength = myString.length;
console.log(myStrLength);

//Get a character at a position
for(index = 0; index < myStrLength; index++){
    console.log(myString[index]);
}

//Get rid of spaces at start and the end
console.log(myString.trim().length);

//Replace
//Toi nay gap nhau 7h -> remove m
let toBeReplacedStr = "tmomi mnmay gmap mnmhamu 7j"
// /g - global, /i - insensitive
console.log(toBeReplacedStr.replace(/m/gi, ""));

//200mins   
let containingNumStr = "200mins";
let num = containingNumStr.replace(/[^0-9]/gi, "");
console.log(num);
//Backstick `` | String template
let anotherVar = "567890-";
console.log(`type of num:${checkTypeOf(num)} ${anotherVar}`);


function getDomainName(url){
    let domain;
    //Logic go here
    const indicator = "://";
    const indexOfIndicator = url.indexOf(indicator);
    if(indexOfIndicator< 0){
        const errMsg = `Invalid URL, provided url was:  ${url}`;
        throw Error(errMsg);
    }
    const domainStartIndex = indexOfIndicator + indicator.length;
    return url.substring(domainStartIndex).replace(/\//gi, "");
}