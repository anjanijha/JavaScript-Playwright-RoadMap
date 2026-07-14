// Exercise 1 : Square every number.
const numbers = [
    1,
    2,
    3,
    4,
    5
];

const squares=numbers.map(number=>number*number);
console.log(`The square of each number : ${squares}`);

// Exercise 2 : Filter odd numbers.

const oddNumbers = numbers.filter(number => number %2 !==0);
console.log(`The Odd numbers : ${oddNumbers}`);

// Exercise 2 : find TypeScript.

const languages = [

    "Java",

    "Python",

    "TypeScript"

];

//// Exercise 3 : Is TypeScript find

const foundLanguage= languages.find(language=>language==="TypeScript");
console.log(`find TypeScript : ${foundLanguage}`);

// Exercise 4 : Is Python exists
const isPython= languages.some(language=>language==="Python");
console.log(`Is python exists : ${isPython}`);

// Exercise 5 : Check whether every employee has experience >2 years.

const experiences= [4,8,16,32];
const  hasRequiredExperience= experiences.every(experience=>experience>2);
console.log(`every employee has experience >2 years : ${hasRequiredExperience}`);

// Exercise 6 : Find total salary.
const salaries=[10000,20000,30000,40000];
const totalSalary = salaries.reduce((total, salary)=>total+salary,0);
console.log(`Total salary : ${totalSalary}`);
