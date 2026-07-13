/*
1️⃣ What is Inheritance?

Inheritance allows one class to reuse the properties and methods of another class.

Think of it like this:

Employee1
      ▲
      │
Developer1

The Developer is an Employee, so it inherits everything from Employee.
*/

//2️⃣ Create Parent Class
class Employee2 {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    displayInfo() {
        console.log(`Name    : ${this.name}`);
        console.log(`Company : ${this.company}`);
    }

}

const employee2 = new Employee2(
    "Anjani",
    "Capco"
);

employee2.displayInfo();


//3️⃣ extends

class Employee3 {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

}

class Developer3 extends Employee3 {
//Developer3 now inherits everything from Employee3.
}


/*4️⃣ super: 
super() calls the parent class constructor so that inherited properties are 
initialized before the child class adds its own properties.
When extending a class, the child constructor must call super() before using this.
*/

class Employee4 {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

}

class Developer4 extends Employee4 {

    constructor(name, company, language) {

        super(name, company);

        this.language = language;

    }

}

const developer4 = new Developer4(
    "Anjani",
    "Capco",
    "TypeScript"
);

console.log(developer4);

//5️⃣ Inherited Methods

class Employee5 {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    displayInfo() {
        console.log(`Name    : ${this.name}`);
        console.log(`Company : ${this.company}`);
    }

}

class Developer5 extends Employee5 {

    constructor(name, company, language) {

        super(name, company);

        this.language = language;

    }

}

const developer5 = new Developer5(
    "Anjani",
    "Capco",
    "TypeScript"
);

developer5.displayInfo();

//6️⃣ Method Overriding :A child class can replace the parent implementation.

class Employee6 {

    work() {
        console.log("Employee is working");
    }

}

class Developer6 extends Employee6 {

    work() {
        console.log("Developer writes automation scripts");
    }

}

const developer6 = new Developer6();

developer6.work();

//7️⃣ Calling Parent Method
class Employee7 {

    work() {
        console.log("Employee is working");
    }

}

class Developer7 extends Employee7 {

    work() {

        super.work();

        console.log("Developer writes Playwright scripts");

    }

}

const developer7 = new Developer7();

developer7.work();

//Output: 
//Employee is working
//Developer writes Playwright scripts

//8️⃣ Polymorphism : Different classes can respond differently to the same method.

class Employee {

    work() {
        console.log("Employee Working");
    }

}

class Tester extends Employee {

    work() {
        console.log("Testing Application");
    }

}

class Developer extends Employee {

    work() {
        console.log("Writing Code");
    }

}

const employees = [

    new Employee(),

    new Tester(),

    new Developer()

];

employees.forEach(employee => employee.work());
