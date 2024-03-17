class Employee {
  constructor(salary) {
    this._validateSalary(salary);
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  set salary(salary) {
    this._validateSalary(salary);
    this._salary = salary;
  }

  // Support medhod: Không mong muốn ở bên ngoài dùng và ko cần dùng
  _validateSalary(salary) {
    if (salary < 0) {
      throw new Error("salary must be greater than 0");
    }
  }
  //Service method : Ở bên ngoài dùng và thường nằm ở controller
}
module.exports = Employee;
