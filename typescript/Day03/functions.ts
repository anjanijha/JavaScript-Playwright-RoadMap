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