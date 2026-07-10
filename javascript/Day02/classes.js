/*
Lesson 1 - What is a Class?

A class is a blueprint for creating objects.

Think of it like this:
Class
   ↓
Blueprint

Object
   ↓
Actual Employee

class Employee1 {

}
*/
//Lesson 2 - Create Your First Class

class Employee2 {

}
//Nothing happens yet.

//A class only defines the structure.

//Lesson 3 - Create an Object

class Employee3 {

}

const employee3 = new Employee3(); //new creates an object from the class.

console.log(employee3);

//Lesson 4 - Constructor(A constructor runs automatically when an object is created.)
class Employee4 {

    constructor() {
        console.log("Employee Created");
    }

}

const employee4 = new Employee4();

//Lesson 5 - Constructor Parameters

class Employee5 {

    constructor(name, company) {
        console.log(name);
        console.log(company);
    }

}

const employee5 = new Employee5("Anjani", "Capco");

//Lesson 6 - The this Keyword ("this" refers to the current object.)
class Employee6 {

    constructor(name) {
        this.name = name;
    }

}

//Lesson 7 - Store Multiple Properties

class Employee7 {
    constructor(name, company, experience) {
        this.name = name;
        this.company = company;
        this.experience = experience;
    }

}
const employee7 = new Employee7("Anjani",
    "Capco",
    8);
console.log(employee7);

//Lesson 8 - Methods
class Employee8 {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    displayInfo() {
        console.log(`Name : ${this.name}`);
        console.log(`Company : ${this.company}`);
    }

}

const employee8 = new Employee8( "Anjani", "Capco");
employee8.displayInfo();
//Multiple Objects
const emp1 = new Employee8("Anjani","Capco");
const emp2 = new Employee8("Rahul","Google");
emp1.displayInfo();
emp2.displayInfo();