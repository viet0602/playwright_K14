const Employee = require("./Employee");
const SalaryController = require("./SalaryController");

//Data
const teo = new Employee(60);
const ti = new Employee(100);

// Controller
const salaryController = new SalaryController();
console.log(salaryController.getTotalSalary([teo, ti]));