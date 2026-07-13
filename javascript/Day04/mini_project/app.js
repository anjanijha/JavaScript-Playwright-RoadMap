import Browser from "./browser.js";
import Employee from "./employee.js";
import {add,multiply} from "./calculator.js";

const employee = new Employee("Anjani");
employee.displayInfo();
const browser =new Browser();
browser.launch();
console.log(`The sum of two numbers   : ${add(20,10)}`);
console.log(`The mul of two numbers   : ${multiply(20,10)}`);