let teo = {
  name: "teo",
  myAge: 20,
  bankAccount: {
    accountNumber: "123456789",
    balance: 100000000,
  }
};

// Clone - copy object
let ti = teo; // Không nên dùng cách này vì tí thay đổi thì tèo cungx thay đổi
ti.name = "ti";
ti.myAge = 21;


let array = [teo, teo]; // Không nên dùng cách này vì tí thay đổi thì tèo cũng thay đổi
array[1].name = "ti";
console.log(array);

//Shallow copy - spread synctax - one level
let ti2 = {...teo};
ti2.name = "ti"; // Okay - ti.name != teo.name
ti2.bankAccount.balance = 100; // NOT OKAY - ti.bankAccount.balance = teo.bankAccount.balance = 100;


// Shallow copy - Handle for nested object, array...(not for Function )
/**
 * JSON.stringify(teo) : chuyển từ object sang string
 * JSON.parse(): chuyển từ string về object
 */
let ti3 = JSON.parse(JSON.stringify(teo)); 
ti3.name = "ti"; 
ti3.bankAccount.balance = 1;
console.log(teo);
console.log(ti3);

// Object.keys(targetObject) - in ra các key của object như name, age, bankAccount
console.log(Object.keys(teo));

// Object.values(targetObject) - in ra các value của object như "ti", "21", "1"
console.log(Object.values(teo));

// Object.entries(targetObject) - in ra cả object
console.log(Object.entries(teo));