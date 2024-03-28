export default class Employee {
    protected name: string;
    protected salary: number;

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }
}