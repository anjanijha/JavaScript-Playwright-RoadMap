function printInfo() {
    const name = "Anjani";
    const company = "Capco";
    const experience = 8;

    console.log(`Name       : ${name}`);
    console.log(`Company    : ${company}`);
    console.log(`Experience : ${experience}`);
}

function printCalculator() {
    const a = 20;
    const b = 5;
    console.log(`Addition : ${a + b}`);
    console.log(`Subtraction : ${a - b}`);
    console.log(`Multiplication : ${a * b}`);
    console.log(`Division : ${a / b}`);
    console.log(`Modulus : ${a % b}`);
}
function printString() {
    const language = "Playwright";

    console.log(`Length : ${language.length}`); //10
    console.log(`Uppercase : ${language.toUpperCase()}`); //PLAYWRIGHT
    console.log(`Lowercase : ${language.toLowerCase()}`);//playwright
    console.log(`Contains 'wright' : ${language.includes("wright")}`); //true
    console.log(`Starts With 'Play' : ${language.startsWith("Play")}`); //true
    console.log(`Ends With 'ght' : ${language.endsWith("ght")}`); //true
}

function printArray() {
    const languages = [
        "Java",
        "JavaScript",
        "TypeScript"
    ];
    // Print first language
    console.log(`First Language : ${languages[0]}`);

    // Print last language
    console.log(`Last Language : ${languages[languages.length - 1]}`);

    // Add Python
    languages.push("Python");
    console.log(`After Adding Python : ${languages}`);

    // Remove Java
    languages.shift();
    console.log(`After Removing Java : ${languages}`);

    // Print length
    console.log(`Total Languages : ${languages.length}`);

}
function printObject() {
    const employee = {
        name: "Anjani",
        company: "Capco",
        experience: 8
    };
    console.log(`Name       : ${employee.name}`);
    console.log(`Company    : ${employee.company}`);
    console.log(`Experience : ${employee.experience}`);

}

function greetEmp(name) {
    console.log(`Hello ${name}`);
}

const greetWithArrow = (name) => {
    console.log(`Hello ${name}`);
};

function miniProject() {
    console.log("===============================");
    console.log("Browser Information");
    console.log("===============================");

    const browser = {
        name: "Chrome",
        version: "138",
        headless: true
    };

    let status;

    if (browser.headless) {
        status = "Browser Ready in headless mode";
    } else {
        status = "Browser Ready in headed mode";
    }

    console.log(`Name       : ${browser.name}`);
    console.log(`Version    : ${browser.version}`);
    console.log(`Headless   : ${browser.headless}`);
    console.log(`Status     : ${status}`);
}

function main() {
    console.log("\n===== Exercise 1 - Print Your Information =====");
    printInfo();
    console.log("\n===== Exercise 2 - Simple Calculator =====");
    printCalculator();
    console.log("\n===== Exercise 3 - String Operations =====");
    printString();
    console.log("\n===== Exercise 4 - Array Practice=====");
    printArray();
    console.log("\n===== Exercise 5 - Object Practice=====");
    printObject();
    console.log("\n===== Exercise 6 - Function=====");
    greetEmp("Anjani");
    console.log("\n===== Exercise 7 - Arrow Function=====");
    greetWithArrow("Anjani");
    console.log("\n===== Mini Project - Browser Launcher =====");
    miniProject();
}

main();