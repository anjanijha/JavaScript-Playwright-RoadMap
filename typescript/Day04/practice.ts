//Exercise 1
interface Employee1 {
    name: string;
    company: string;
    experience: number;
}
const emp1: Employee1 = {
    name: "Anjani",
    company: "Capco",
    experience: 8
}
console.log(emp1);

//Exercise 2

interface Employee2 {
    name: string;
    company: string;
    experience: number;
    salary?: number;
}
const emp2: Employee2 = {
    name: "Anjani",
    company: "Capco",
    experience: 8
}
const emp2a: Employee2 = {
    name: "Anjani",
    company: "Capco",
    experience: 8,
    salary: 32
}
console.log(emp2a);

// Exercise 3
interface BrowserConfig {
    readonly browser: string;
    headless: boolean;
}
const config: BrowserConfig = {
    browser: "chromium",
    headless: true
}
config.headless = false;

console.log(config.headless);

//Exercise 4

interface Employee4 {
    name: string;
    company: string;
    experience: number;
}
interface AutomationEngineer extends Employee4 {
    tool: string
}
const emp4: AutomationEngineer = {
    name: "Anjani",
    company: "Capco",
    experience: 8,
    tool: "Playwright"
}
console.log(emp4);

//Exercise 5
interface Address {
    city: string;
    country: string;
}
interface Employee5 {
    name: string;
    company: string;
    experience: number;
    address: Address;
}

const emp5: Employee5 = {
    name: "Anjani",
    company: "Capco",
    experience: 8,
    address: {
        city: "Gurugram",
        country: "India"
    }

}
console.log(emp5.address.city);

//Exercise 6
type TestData={
    username: string;
    password: string;
}
const test1:TestData={
    username:"adminuser",
    password :"adminpass"
}
console.log(test1);