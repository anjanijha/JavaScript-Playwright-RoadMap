export const companyName = "Capco";
export const location = "Gurugram";

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
export default class CompanyEmployee {
    constructor(name) {
        this.name = name;
    }
        displayInfo() {
        console.log(`Name for default export : ${this.name}`);
    }
}