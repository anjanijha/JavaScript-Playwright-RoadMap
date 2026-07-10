function printJavaScript() {
    for (let i = 0; i < 5; i++) {
        console.log(`Iteration ${i + 1}: Hello JavaScript`);
    }
}

function printWhile() {
    let num = 1;
    while (num <= 10) {
        console.log(`Number : ${num}`);
        num++;
    }
}

function printEven() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
           console.log(`Even Number : ${i}`);
        }
    }
}

function printAge() {
    const age = 20;
    if (age >= 18) {
        console.log("Eligible to vote");
    }
    else {
        console.log("Not eligible to vote");
    }
}

function printWeekday() {
    const week = 2;
    
    switch (week) {

        case 1:
            console.log("Sunday");
            break;

        case 2:
            console.log("Monday");
            break;

        case 3:
            console.log("Tuesday");
            break;

        case 4:
            console.log("Wednesday");
            break;

        case 5:
            console.log("Thursday");
            break;

        case 6:
            console.log("Friday");
            break;

        case 7:
            console.log("Saturday");
            break;

        default:
            console.log("Invalid day");
    }
}

function printUsingForOf() {
    const languages = [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python"
    ];
    for (const language of languages){
        console.log(`Language : ${language}`);
    }
}

function printUsingForEach() {
    const languages = [
        "Java",
        "JavaScript",
        "TypeScript",
        "Python"
    ];
    languages.forEach(language => {
        console.log(`Language : ${language}`);
    });
}

function bonusCalculator() {
    const employee = {
        name: "Anjani",
        experience: 8,
        salary: 2400000
    };
    let bonus;
    console.log("===============================");
    console.log("Employee Bonus Calculator");
    console.log("===============================");
    console.log(`Employee       : ${employee.name}`);
    console.log(`Experience     : ${employee.experience}`);
    console.log(`Salary         : ${employee.salary}`);
    if (employee.experience >= 10) {
        bonus = employee.salary * 0.20;
    } else if (employee.experience >= 5) {
        bonus = employee.salary * 0.10;
    }
    else {
        bonus = employee.salary * 0.05;
    }
    console.log(`Bonus          : ${bonus}`);
}
function main() {
    console.log("\n===== Exercise 1 : Print 'Hello JavaScript' 5 times using for loop =====");
    printJavaScript();
    console.log("\n=====Exercise 2 : Print 1-10 using while loop =====");
    printWhile();
    console.log("\n=====Exercise 3 : Print Even numbers between 1–20 =====");
    printEven();
    console.log("\n=====Exercise 4 : Use if...else Check Age >=18=====");
    printAge();
    console.log("\n=====Exercise 5 : Use switch print weekday=====");
    printWeekday();
    console.log("\n=====Exercise 6 : Print all languages using for...of=====");
    printUsingForOf();
    console.log("\n=====Exercise 7 : Print all languages using forEach()=====");
    printUsingForEach();
    bonusCalculator();
}

main();