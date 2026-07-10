class Employee {

    constructor(name, company, salary) {
        this._name = name;
        this._company = company;
        this._salary = salary;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        if (value < 0) {
            console.log("Invalid salary");
            return;
        }
        this._salary = value;
    }

    static companyPolicy() {
        console.log("Employees must work 8 hours/day.")
    }

}
const employee = new Employee("Anjani", "Capco", 2400000);
console.log(`Employee Name : ${employee.name}`);
employee.salary = -100;
Employee.companyPolicy();

