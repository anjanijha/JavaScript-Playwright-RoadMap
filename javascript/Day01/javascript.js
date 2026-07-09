/*1. What is JavaScript?
JavaScript is a programming language used to make web pages interactive.

*/
/* 2. Variables
//There are three ways to declare variables:  1. var 2.let 3.const
*/

/* 

Interview Question:

Difference between var, let, and const

| var             | let                          | const                        |
| --------------- | ---------------------------- | ---------------------------- |
| Function scoped | Block scoped                 | Block scoped                 |
| Can redeclare   | Cannot redeclare             | Cannot redeclare             |
| Can reassign    | Can reassign                 | Cannot reassign              |
| Hoisted         | Hoisted (Temporal Dead Zone) | Hoisted (Temporal Dead Zone) |


*/

// 1. Var --only for concepts(will not use)

var name = "Anjani";
    console.log(name);

//2. let 

let company = "Capco";
    console.log(company);

// 3.const

const country = "India";
    console.log(country)


// 3. Data Type

const firstName  = "Anjani";
const age = 32;
const salary = 24.5;
const isSDET = true;
const employeeCompany = null;
let project;

console.log(typeof firstName); //string
console.log(typeof age); //number
console.log(typeof salary); //number
console.log(typeof isSDET); //boolean
console.log(typeof employeeCompany); //object ----It is a historical bug in JavaScript that has been kept for backward compatibility.
console.log(typeof project); // undefined

//4. Console Output 
const empName = "Anjani";

console.log(empName);

console.error("Something went wrong");

console.warn("Warning");

//5. Template Literals
const firstNameForGreeting = "Anjani";

console.log(`Hello ${firstNameForGreeting}`);

//6. Operators
const a = 20;
const b = 5;

console.log(`Addition : ${a + b}`);
console.log(`Subtraction : ${a - b}`);
console.log(`Multiplication : ${a * b}`);
console.log(`Division : ${a / b}`);
console.log(`Modulus : ${a % b}`);

//7. Strings

const language = "Playwright";

console.log(`Length : ${language.length}`);; //10
console.log(`Uppercase : ${language.toUpperCase()}`); //PLAYWRIGHT
console.log(`Lowercase : ${language.toLowerCase()}`);//playwright
console.log(language.includes("Play")); //true
console.log(language.startsWith("Play"));//true
console.log(language.endsWith("ght"));//true

//8.Arrays 
const languages = [
    "Java",
    "JavaScript",
    "TypeScript",
    "Python"
];

console.log(languages);

//9. Objects


const employee = {
    name: "Anjani",
    company: "Capco",
    experience: 8
};

console.log(employee.name);
console.log(employee.company);
console.log(employee.experience);

//10. Functions
function greetEmp(name) {
    console.log(`Hello ${name}`);
}

greetEmp("Anjani");


//Arrow Functions:
const greet = (name) => {
    console.log(`Hello ${name}`);
};

greet("Anjani");