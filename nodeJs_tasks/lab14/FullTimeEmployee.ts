import Employee from "./Employee";

export default class FullTimeEmployee extends Employee {
  constructor(name: string) {
    super(name, 50000);
  }
}
