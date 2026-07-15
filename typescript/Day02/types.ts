//1. Primitive types

//string
const employeeName: string = "Anjani";
const company: string = "Capco";

console.log(`Employee Name : ${employeeName}`);
console.log(`Comapny : ${company}`)

//number : TypeScript uses one number type for integers and decimals
//Unlike Java, TypeScript does not separately use int, float, or double.
const experience: number = 8;
const salary: number = 22.5;

console.log(`Employee Experience : ${experience}`);
console.log(`Employee Salary : ${salary}`);

//boolean
const isAutomationEngineer: boolean = true;
const isHeadless: boolean = false;

console.log(`Automation Engineer : ${isAutomationEngineer}`);
console.log(`Headless Mode       : ${isHeadless}`);

//2. Type inference
//Use explicit types when they improve clarity, especially for function parameters, 
// return types, shared objects, interfaces, and framework configuration.

const framework: string = "Playwright";
const language = "TypeScript"; //Both are valid

//3. Arrays

//String array : Array<string> is same as string[]
const languages: string[] = [
    "Java",
    "JavaScript",
    "TypeScript"
];
console.log(languages);

//number array 
const marks: number[] = [80, 90, 95];

//Array of objects

const employee: {
    name: string;
    experience: number;
}[] = [
        {
            name: "Anjani",
            experience: 8
        },
        {
            name: "Rahul",
            experience: 5
        }

    ];
console.log(employee);


//4. Tuples : A tuple is a fixed-length array where each position has a defined type.

const employeeRecord: [string, number, boolean] = [
    "Anjani",
    8,
    true
];

console.log(employeeRecord); //['Anjani',8,true]

//can destructure it : 

const [fName, years, automation] = employeeRecord;

console.log(`Name       : ${fName}`);
console.log(`Experience : ${years}`);
console.log(`Automation : ${automation}`);

//5. Enums : An enum defines a fixed group of named values.

enum BrowserName {
    Chromium,
    Firefox,
    WebKit
}

const selectedBrowser: BrowserName = BrowserName.Chromium;

console.log(`selectedBrowser : ${selectedBrowser}`);

//For readable automation code, string enums are clearer:
enum BrowserType {
    Chromium = "chromium",
    Firefox = "firefox",
    WebKit = "webkit"
}

const browserType: BrowserType = BrowserType.Chromium;

console.log(`Browser : ${browserType}`);

//playwright style uses :
function launchBrowser(browser: BrowserType): void {
    console.log(`Launching ${browser}`);
}

launchBrowser(BrowserType.Firefox);

//6. any:  disables TypeScript's type checking for a value.

let responseData: any = "Success";

responseData = 200;
responseData = true;
responseData = {
    status: "passed"
};

//Due to use of "any" TypeScript allows all of this.
//The problem is that any removes the protection TypeScript provides
//The second line may fail at runtime, but TypeScript may not warn you.
//Use any only when absolutely necessary.

//7. unknown :can hold any value, but TypeScript requires validation before you use it.

let apiResponse: unknown = "Success";
//console.log(apiResponse.toUpperCase()); //This is not allowed directly:

//You must narrow the type:
if (typeof apiResponse === "string") {
    console.log(apiResponse.toUpperCase());
}

//any vs unknown

let firstValue: any = "Playwright";
firstValue.toUpperCase();

let secondValue: unknown = "TypeScript";

if (typeof secondValue === "string") {
    console.log(secondValue.toUpperCase());
}
/*

| `any`                       | `unknown`              |
| --------------------------- | ---------------------- |
| Disables type checking      | Requires type checking |
| Less safe                   | Safer                  |
| Allows immediate operations | Must narrow before use |

Prefer unknown when data comes from an uncertain source.
*/

//8. void : 
//void is used when a function does not return a value
//The function performs an action but does not return data.

function printEmployee(name: string): void {
    console.log(`Employee : ${name}`);
}

printEmployee("Anjani");

//playwright style code : 
function printTestName(testName: string): void {
    console.log(`Running test : ${testName}`);
}
printTestName("Login Test");

//9. never  : never means a function never completes normally.
//
function throwError(message: string): never {
    throw new Error(message);
}
function runForever(): never {
    while (true) {
        // Continues forever
    }
}

//10. null and undefined

let projectName: string | null = null; //This uses a union type: string | null

projectName = "Banking Automation";

//A value that may be undefined:
let token: string | undefined;

token = "abc123";

console.log(`Project : ${projectName}`);
console.log(`Token   : ${token}`);