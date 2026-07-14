/*
1️⃣ Destructuring
What is Destructuring?

Destructuring allows us to extract values from arrays or objects into variables.
*/

//Array Destructuring
const languages = ["Java", "JavaScript", "TypeScript"];
const [first, second, third] = languages;

console.log(`First  : ${first}`);
console.log(`Second : ${second}`);
console.log(`Third  : ${third}`);

//Object Destructuring

const employee = {
    name: "Anjani",
    company: "Capco",
    experience: 8
};

const { name, company, experience } = employee;

console.log(`Name       : ${name}`);
console.log(`Company    : ${company}`);
console.log(`Experience : ${experience}`);

/*
2️⃣ Spread Operator (...)
Purpose

Copies or merges arrays/objects.


*/

//Array
const backend = [
    "Java",
    "Spring Boot"
];

const frontend = [
    "JavaScript",
    "TypeScript"
];

const skills = [
    ...backend,
    ...frontend
];

console.log(skills);

//Object
const employee1 = {
    name: "Anjani"
};

const details = {
    company: "Capco",
    experience: 8
};

const profile = {
    ...employee1,
    ...details
};

console.log(profile);

//playwright
const defaultHeaders = {
    Accept: "application/json"
};

const authHeaders = {
    Authorization: "Bearer Token"
};

const headers = {
    ...defaultHeaders,
    ...authHeaders
};

console.log(headers);

/*
3️⃣ Rest Parameters (...)

Looks similar to Spread, but does the opposite.

Spread → Expands

Rest → Collects
*/
function printNumbers(...numbers) {

    console.log(numbers);

}

printNumbers(10, 20, 30, 40);

function calculateTotal(...numbers) {

    const sum = numbers.reduce(

        (total, number) => total + number,

        0

    );

    console.log(`Total : ${sum}`);

}

calculateTotal(10, 20, 30);

//4️⃣ Default Parameters

function greet(name = "Guest") {

    console.log(`Hello ${name}`);

}

greet();

greet("Anjani");

//playwright

function launchBrowser(browser = "chromium") {

    console.log(browser);

}

launchBrowser();

launchBrowser("firefox");

//5️⃣ Optional Chaining (?.) : One of the most important ES6 features.
const employee2 = {

    name: "Anjani"

};
console.log(employee2.name);
//console.log(employee2.company.location); //throws : Cannot read properties of undefined
console.log(employee2.company?.location); //undefined

//playwright
const response = {

    user: {

        name: "Anjani"

    }

};

console.log(response.user?.email); //undefined

/*
6️⃣ Nullish Coalescing (??)

Returns the right value only if the left value is

null
undefined

*/
const company1 = null;

const result = company1 ?? "OpenAI";

console.log(result);// OpenAI

const browser = undefined;

console.log(browser ?? "chromium"); //chromium

//Difference between || and ??
const number = 0;

console.log(number || 100); //100

console.log(number ?? 100); //0

/*

Interview Questions
Difference

Spread vs Rest

Spread	                             Rest
Expands values	                     Collects values
Used while calling/copying	         Used in function parameters

Difference || vs ??

||: Returns right side for

false
0
""
null
undefined

?? : Returns right side only for

null
undefined
*/