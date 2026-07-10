/*
1️⃣ Getters
What is a Getter?

A getter is a special method that lets you access a property like a normal variable.
employee.name;
*/
class Employee1 {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

}
const employee1 = new Employee1("Anjani");
console.log(`Employee Name : ${employee1.name}`); //no need parentheses for getting value

/*
2️⃣ Setters

A setter lets us update a property.
*/

class Employee2 {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

}

const employee2 = new Employee2("Anjani");
console.log(`Employee Name call by constructor : ${employee2.name}`); //Anjani- get Call(before set call)
employee2.name = "Rahul"; //set call
console.log(`Employee Name after set value : ${employee2.name}`); //Rahul -get call(after set call)

/*
3️⃣ Getter + Setter Together
*/
class Employee3 {

    constructor(name, company) {
        this._name = name;
        this._company = company;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get company() {
        return this._company;
    }

    set company(value) {
        this._company = value;
    }

}

const employee3 = new Employee3(
    "Anjani",
    "Capco"
);

console.log(`Employee Name call by constructor : ${employee3.name}`);

employee3.name = "Rahul";

console.log(`Employee Name after set value : ${employee3.name}`);

// Invalid data example
class Employee4 {

    constructor(salary) {
        this._salary = salary;
    }

    set salary(value) {

        if (value < 0) {
            console.log("Invalid Salary");
            return;
        }

        this._salary = value;
    }

    get salary() {
        return this._salary;
    }

}

const employee4 = new Employee4(50000);

employee4.salary = -100;

console.log(`Employee Salary : ${employee4.salary}`);

/*
4️⃣ Static Methods
sometimes a method belongs to the class, not an object.
Then we use 
static
*/
class Employee5 {

    static company() {
        console.log("Capco");
    }

}

Employee5.company();

class Calculator {

    static add(a, b) {
        return a + b;
    }

}

console.log(
    Calculator.add(10, 20)
);