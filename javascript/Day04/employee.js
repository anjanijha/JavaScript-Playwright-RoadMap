//Example1
export class Employee {

    constructor(name, company) {
        this.name = name;
        this.company = company;
    }

    displayInfo() {
        console.log(`Name       : ${this.name}`);
        console.log(`Company    : ${this.company}`);
    }

}

//Example2
export const company = "Natwest";
export const experience = 10;
export function greet() {
    console.log("Hi");
}

//Example3

export const company1 = "Capco";
export function greet1() {
    console.log("Hello");
}
export default class Employee1 {
    constructor(name) {
        this.name = name;
    }
}