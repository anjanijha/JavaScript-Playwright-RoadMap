/*1️⃣ if Statement

The if statement executes code only when the condition is true.

if (condition) {
    // code
}

*/
const age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
}

//2️⃣ if...else

const mark = 35;

if (mark >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

//3️⃣ else if
const marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

//4️⃣ Ternary Operator

const employeeAge = 20;

const result = employeeAge >= 18 ? "Adult" : "Minor";

console.log(`Employee Age : ${result}`);

//5️⃣ switch

const day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid");
}

//6️⃣ for Loop
for (let i = 1; i <= 5; i++) {
    console.log(`Number : ${i}`);
}

//7️⃣ while Loop
let count = 1;

while (count <= 5) {
    console.log(`Count : ${count}`);
    count++;
}

//8️⃣ do...while
let number = 10;
do {
   console.log(`Number : ${number}`);
    number++;
} while (number <= 5);

/*9️⃣ for...of

Can use break
Can use continue
Supports async/await
*/
const languages = [
    "Java",
    "JavaScript",
    "TypeScript"
];

for (const language of languages) {
    console.log(`Language : ${language}`);
}
//or

for(let i=0;i<languages.length;i++){
    console.log(`Language : ${languages[i]}`);
}

/*🔟 forEach()
Cannot break
Cannot continue
Not suitable with async/await

*/
const programmingLanguages = [
    "Java",
    "JavaScript",
    "TypeScript"
];

programmingLanguages.forEach(language => {
    console.log(`Language : ${language}`);
});

/*Interview Question:

Difference between  for...of and for...in
*/
const skills = [
    "Java",
    "JavaScript",
    "TypeScript"
];


// for...of -> values
for (const skill of skills) {
    console.log(`Language : ${skill}`);
}

// for...in -> indexes
for (const index in skills) {
    console.log(`index : ${index}`);
}