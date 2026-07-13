import { Employee } from "./employee.js"; //Named export
import { add, subtract } from "./calculator.js";
import Browser from "./browser.js"; //Default export: No curly braces required
import {company,experience,greet} from "./employee.js";
import {Employee as Emp} from "./employee.js";
import Employee1,{company1,greet1} from "./employee.js"; //Np curly braces required because Employee1 is default export

////Example1
const employee1 = new Emp(
    "Anjani",
    "Capco"
);
const employee = new Employee(
    "Anjani",
    "Capco"
);
employee.displayInfo();
employee1.displayInfo();

//Example : ADD & SUB
console.log(add(20, 10));
console.log(subtract(20, 10));

//Example : browser launching
const browser = new Browser();
browser.launch();

//Example2
greet();
console.log(company);

//Example3
const employee2 = new Employee1("Anjani");
greet1();
console.log(company1);