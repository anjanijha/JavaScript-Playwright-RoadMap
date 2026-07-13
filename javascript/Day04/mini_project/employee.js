export default class Employee {
    constructor(name) {
        this.name = name;
    }
    
    displayInfo() {
        console.log("====================");
        console.log("Employee");
        console.log("====================");
        console.log(`Name       : ${this.name}`);
    }
}