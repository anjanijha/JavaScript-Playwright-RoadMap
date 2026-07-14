//Ex1 : Print first and second language.

const languages = [
    "Java",
    "JavaScript",
    "TypeScript"
];
const [first,second,third]= languages;
console.log(`First  : ${first}`);
console.log(`Second : ${second}`);


//Ex 2 : Use object destructuring.
const employee = {

    name:"Anjani",

    company:"Capco",

    experience:8

};
const { name, company, experience } = employee;

console.log(`Name       : ${name}`);
console.log(`Company    : ${company}`);
console.log(`Experience : ${experience}`);

//Ex 3 : Merege using Spread Operator.

const backend = [
    "Java"
];

const frontend = [
    "JavaScript"
];

const fullStack=[ ...backend, ...frontend];
console.log(fullStack)

//Ex 4 : Create a function sum(...numbers) using Rest Parameters.

function sum(...numbers){

    const total = numbers.reduce(

        (total, number)=>total+number,

        0

    );

    console.log(`Total : ${total}`);

}

sum(10,20,30);

// Ex 5 : Create greet(name="Guest")
function greet(name="Guest"){

    console.log(`Hello ${name}`);

}

greet();

greet("Anjani");

//Ex 6 : Use Optional Chaining  Print : student.address?.city
const student = {

    name:"Rahul"

};
console.log(student.address?.city);

//Ex 7 : Use ?? Print chromium
const browser = null;
console.log(browser?? "chromium" );

