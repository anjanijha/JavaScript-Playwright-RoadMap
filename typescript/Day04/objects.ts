/*1️⃣ Object Types
What is an Object Type?
An object type defines the structure of an object.
*/

const employee : {
    name: string;
    company:string;
    experience:8;
} ={
    name: "Anjani",
    company: "Capco",
    experience: 8
};
console.log(employee);

//Function accepting an object
function printEmployee(employee: {
    name: string;
    company: string;
    experience: number;
}): void {

    console.log(`Name       : ${employee.name}`);
    console.log(`Company    : ${employee.company}`);
    console.log(`Experience : ${employee.experience}`);

}

printEmployee(employee);

/*2️⃣ Interfaces
What is an Interface?

An interface is a blueprint that defines the structure of an object.

Instead of repeating object types, create one interface.

*/
interface Employee1{
    name1:string;
    company1:string;
    experiences1:number;
}
const employee1: Employee1={
    name1:"Anjani",
    company1:"Capco",
    experiences1:8

};
console.log(employee1);

//Function using interface
function displayEmployee(employee1: Employee1): void{
        console.log(`Name           : ${employee1.name1}`);
        console.log(`Company        : ${employee1.company1}`);
        console.log(`Experience     : ${employee1.experiences1}`);

}
displayEmployee(employee1);

//3️⃣ Optional Properties (?) : Some properties aren't mandatory.
interface Employee {

    name: string;

    company: string;

    experience: number;

    salary?: number;

}

const emp1: Employee = {

    name: "Anjani",

    company: "Capco",

    experience: 8

};

console.log(emp1);
const emp2: Employee = {

    name: "Rahul",

    company: "Google",

    experience: 5,

    salary: 2500000

};
console.log(emp2);
//both are valid


//4️⃣ Readonly Properties : Sometimes a property should never change.

interface BrowserConfig {

    readonly browser: string;

    headless: boolean;

}
const config: BrowserConfig = {

    browser: "chromium",

    headless: true

};

//Valid
config.headless = false;
//config.browser = "firefox";

//Cannot assign to 'browser' because it is a read-only property.

//5️⃣ Interface Extends : Inheritance for interfaces.
interface Employee3 {

    name: string;

    company: string;

}
interface AutomationEngineer extends Employee3 {

    tool: string;

    experience: number;

}
const engineer: AutomationEngineer = {

    name: "Anjani",

    company: "Capco",

    tool: "Playwright",

    experience: 8

};

console.log(engineer);

//6️⃣ Nested Interfaces : Objects can contain other objects.

interface Address {

    city: string;

    country: string;

}
interface Employee6 {

    name: string;

    address: Address;

}
const employee6: Employee6 = {

    name: "Anjani",

    address: {

        city: "Gurugram",

        country: "India"

    }

};

console.log(employee6.address.city);

//7️⃣ Type Aliases : Another way to create custom types.
type Browser = {

    name: string;

    headless: boolean;

};
const browser: Browser = {

    name: "chromium",

    headless: true

};

console.log(browser);

//Interface vs Type


//Interface
interface Employee7 {

    name: string;

}
//Type
type Employee8 = {

    name: string;

};

//Both work similarly for objects.

//General guideline:

//Use interface for object shapes (most common in Playwright).
//Use type for unions, aliases, and complex type compositions.

//9️⃣ API Response Example
interface User {

    id: number;

    name: string;

    email: string;

}
interface ApiResponse {

    success: boolean;

    user: User;

}
const response: ApiResponse = {

    success: true,

    user: {

        id: 1,

        name: "Anjani",

        email: "anjani@email.com"

    }

};

console.log(response.user.email);