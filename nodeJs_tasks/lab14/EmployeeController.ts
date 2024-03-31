import Employee from "./Employee";

export default class EmployeeController {
  static getTotalSalary(employeeList: Employee[]): number {
    let totalSalary = 0;
    employeeList.forEach((employee) => {
      totalSalary += employee.getSalary();
    });
    return totalSalary;
  }

  // TODO: same as getWinner in LAB13
  static getHighestSalaryEmployee(employeeList: Employee[]): Employee {
    let highestSalary = 0;
    let highestSalaryEmployee = employeeList[0];
    employeeList.forEach((employee) => {
      if (employee.getSalary() > highestSalary) {
        highestSalary = employee.getSalary();
        highestSalaryEmployee = employee;
      }
    });
    return highestSalaryEmployee;
  }

  static getLowestSalaryEmployee(employeeList: Employee[]): Employee {
    let lowestSalary = 0;
    let lowestSalaryEmployee = employeeList[0];
    employeeList.forEach((employee) => {
      if (employee.getSalary() < lowestSalary) {
        lowestSalary = employee.getSalary();
        lowestSalaryEmployee = employee;
      }
    });
    return lowestSalaryEmployee;
  }
}
