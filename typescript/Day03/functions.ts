//1️⃣ Function Parameter Types : Every parameter should have a type. 
function greet(name: string): void {
    console.log(`Hello ${name}`); //Hello Anjani
}

greet("Anjani"); 
//greet(10);// Argument of type 'number' is not assignable to parameter of type 'string'

//2️⃣ Return Types : Always specify the return type.
//example: 1
function add(a: number, b: number): number {
    return a + b;
}
const result = add(10, 20);
console.log(result);

//example :2
function isAdult(age: number): boolean {
    return age >= 18;
}
console.log(isAdult(20));

//3️⃣ Optional Parameters (?) : Sometimes a parameter isn't mandatory.
function greet1(name: string, company?: string): void {

    console.log(`Name : ${name}`);

    if (company) {
        console.log(`Company : ${company}`);
    }

}
greet1("Anjani"); //Name : Anjani
greet1("Anjani", "Capco"); //Name :Anjani, Company: Capco 

//Playwright Example
function login(username: string, password?: string): void {

}
//Password could come from an environment variable, so making it optional is useful.

//4️⃣ Default Parameters : Instead of checking for undefined, give a default value.
function launchBrowser(browser: string = "chromium"): void {

    console.log(browser);

}

launchBrowser();

launchBrowser("firefox");

//5️⃣ Rest Parameters (...) Collect multiple arguments into an array.

function total(...numbers: number[]): number {
    return numbers.reduce(
        (sum, number) => sum + number,
        0
    );
}
console.log(total(10,20,30));//60
console.log(total(1,2,3,4,5,6,7,8,9,10))//55

//6️⃣ Arrow Functions : Exactly the same as JavaScript, but typed.

const multiply = (a: number, b: number): number => {
    return a * b;
};
console.log(multiply(10,20));

//7️⃣ Function Type Alias :Instead of repeating function signatures, create a reusable type.
type Calculator = (a: number, b: number) => number;
const add1: Calculator = (a, b) => a + b;

const multiply1: Calculator = (a, b) => a * b;

console.log(add1(10,20));

console.log(multiply1(10,20));

//8️⃣ Callback Functions A callback is simply a function passed into another function.

function execute(callback: () => void): void {

    console.log("Starting...");

    callback();

}
execute(() => {

    console.log("Finished");

});
function printEmployee(
    name: string,
    callback: (employeeName: string) => void
): void {

    console.log("Employee Created");

    callback(name);

}

printEmployee("Anjani", (employeeName) => {

    console.log(`Welcome ${employeeName}`);

});

/*

Playwright Example:
test("Login Test", async ({ page }) => {

});

The async ({ page }) => {} part is a callback function.

*/


//9️⃣ Function Overloading One function can accept different parameter types.


function display(value: string): void;
function display(value: number): void;
function display(value: string |number): void {
    console.log(value);
}
display("Anjani");
display(8);