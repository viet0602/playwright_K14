const readlineSync = require("readline-sync");

const account1 = {
    accountNumber: '123',
    routingNumber: '321',
    balance: 1000,
};

//const account2 = {...account1};
const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = '456';
account2.routingNumber = '321';
account2.balance = 2000;
const bankAccounts = [account1, account2];
let isContinue = true;

function myBankApp()
{
    while(isContinue){
        printGameOptionMenu();
        const userOption = Number(readlineSync.question("Please choose an option: "));

    switch(userOption){
        case 1:
            const account = findAccount();
            _logAccountInfo(account);
            break;
        case 2:
            withdrawMoney();
            break;
        case 0:
            console.log("Thank you for playing!");
            isContinue = false;
            break;
        default:
            console.log("Invalid option");
    }
    }
}

function findAccount(){
    const accountNumber = _getAccountNumber();
    return bankAccounts.find(function(account){
    if(account.accountNumber === accountNumber){
        return account;
    }
   });
}

function withdrawMoney(){
    const account = findAccount();
    _logAccountInfo(account);

    const ammountToWithdraw = Number(readlineSync.question("Please enter the amount to withdraw: "));
    if(account.balance < ammountToWithdraw){
        console.log("Insufficient balance !!!");
        return;
    }
        account.balance -= ammountToWithdraw;
        console.log("Withdrawal successful");
        _logAccountInfo(account);
}

function printGameOptionMenu(){
    console.log(`
    === Banking application===
    1. Find an account
    2. Update balance
    0. Exit the program
    `
    );
}

function _getAccountNumber(){
    return readlineSync.question("Please enter your account number: ");
}

function _logAccountInfo(account){
    if(account){
        console.log("Your account is: ", account);
    }else{
        console.log("Account not found");
    }
}

// Call function to run the application
myBankApp();