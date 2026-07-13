import { Student } from "./student.js"
import { square, cube } from "./math.js"
import CompanyEmployee, {
    Employee,
    companyName,
    location
} from "./company.js";

//export default: CompanyEmployee is exported using export default. Default exports are
// imported without curly braces.

//named exports: Eployee ,companyName and location are named exports. Named exports must be imported 
// using curly braces because multiple named members can be exported from the same file.
const student = new Student("Anjani");
student.displayDetails();
console.log(`The square of the number : ${square(4)}`);
console.log(`The cube of the number   : ${cube(2)}`);

console.log(`The company Name is     : ${companyName}`);
console.log(`The company Location is : ${location}`);
const employee = new Employee("Anjani", "Capco");
employee.displayInfo();
const companyEmployee = new CompanyEmployee("Anjani");
companyEmployee.displayInfo();