//Exercise 1: Primitive types
const employeeName: string = "Anjani";
const experience: number = 8;
const isSDET: boolean = true;

console.log(`Employee Name          : ${employeeName}`);
console.log(`Employee Experience    : ${experience}`);
console.log(`Is Employee SDET       : ${isSDET}`);

//Exercise 2: Arrays
const tools: string[] = ["Selenium",
    "Playwright",
    "Rest Assured",
    "Postman"
];

console.log(`First Skill : ${tools[0]}`);
console.log(`Last Skill : ${tools[tools.length - 1]}`);

//Exercise 3: Number array

const salaries: number[] = [
    10000,
    20000,
    30000
];

const totalSalary = salaries.reduce(
    (total, salary) => total + salary,
    0
);
console.log(`Total Salary : ${totalSalary}`);

//Exercise 4: Tuple
const info: [string, number, boolean] = ["Anjani", 8, true];
const [empName, years, isAutomationEngineer] = info;
console.log(`Employee Name : ${empName}`);
console.log(`Experience    : ${years}`);
console.log(`Automation    : ${isAutomationEngineer}`);

//Exercise 5: Enum
enum TestStatus {
    Passed = "Passed",
    Failed = "Failed",
    Skipped = "Skipped"
}

const status: TestStatus = TestStatus.Passed;
console.log(status);

//Exercise 6: unknown
const result: unknown = "Test Passed";
if(typeof result ==="string"){
    console.log(result.toUpperCase());
}

//Exercise 7: void
function displayTool(tool: string): void{
    console.log(`Automation Tool : ${tool}`);
}
displayTool("Playwright");