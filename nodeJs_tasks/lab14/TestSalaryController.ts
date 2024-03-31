import FullTimeEmployee from "./FullTimeEmployee";
import EmployeeController from "./EmployeeController";
import ConstractEmployee from "./ContractEployee";

let teo = new FullTimeEmployee("Teo");
let ti = new FullTimeEmployee("Ti");
let tun = new FullTimeEmployee("Tun");
let viet = new ConstractEmployee("Viet");

const totalSalary = EmployeeController.getTotalSalary([teo, ti, tun,viet]);
console.log(totalSalary);
const highestSalaryEmployee = EmployeeController.getHighestSalaryEmployee([teo, ti, tun,viet]);
console.log(highestSalaryEmployee.getName());