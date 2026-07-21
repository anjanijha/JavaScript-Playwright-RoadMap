/*
1️⃣ Classes
What is a Class?

A class is a blueprint for creating objects.

Think of it like this:

Blueprint (Class)
        ↓
Objects

Example:

Employee (Class)

↓

Anjani
Rahul
Amit

Every employee has:

Name
Company
Experience

Instead of writing the same object repeatedly, we create one class.

Syntax
class Employee {

    name: string;
    company: string;
    experience: number;

}

Nothing is created yet.

This only defines the blueprint.

Creating Objects
const emp1 = new Employee();
const emp2 = new Employee();

new creates an object.

Now you can assign values:

emp1.name = "Anjani";
emp1.company = "Capco";
emp1.experience = 8;
Methods

A class can contain functions.

class Employee {

    name: string;
    company: string;
    experience: number;

    displayInfo(): void {

        console.log(this.name);
        console.log(this.company);
        console.log(this.experience);

    }

}

Notice the keyword:

this
What is this?

this refers to the current object.

Example:

emp1.name = "Anjani";

When you call

emp1.displayInfo();

Inside the method,

this.name

means

emp1.name

If you create another object

const emp2 = new Employee();

emp2.name = "Rahul";

then

this.name

becomes

emp2.name

The same method works for every object.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2️⃣ Constructors
Why Constructors?

Without constructor

new Employee()

↓

Set every property manually

With constructor

new Employee("Anjani","Capco",8)

↓

Everything initialized automatically

*/
class Employee {

    name: string;
    company: string;
    experience: number;

    constructor(
        name: string,
        company: string,
        experience: number
    ) {
        this.name = name;
        this.company = company;
        this.experience = experience;
    }

     displayDetails() :void{
        console.log(`Employee Name : ${this.name}`);
        console.log(`Company       : ${this.company}`);
        console.log(`Experience    : ${this.experience}`);

    }

}

const emp = new Employee(
    "Anjani",
    "Capco",
    8
);
emp.displayDetails();

/*

3️⃣ Access Modifiers

TypeScript provides three access modifiers.

1.Public

Default modifier.

class Employee {

    public name: string;

}

Accessible everywhere.

emp.name(working fine)

2.Private

Only inside the class.

class Employee {

    private salary: number;

}



this.salary //Accessible here:

emp.salary  //Not accessible:(❌ Compile-time error.)



Protected

Accessible:

Inside the class
Inside child classes

Not accessible outside.

class Employee {

    protected company: string;

}

Child class:

class AutomationEngineer extends Employee {

    printCompany() {
        console.log(this.company);
    }

}

Outside:

emp.company

❌ Not allowed.

Comparison
| Modifier  | Same Class | Child Class | Outside |
| --------- | ---------- | ----------- | ------- |
| public    | ✅          | ✅           | ✅       |
| protected | ✅          | ✅           | ❌       |
| private   | ✅          | ❌           | ❌       |

*/
//////////////////////////////////////////////////////////////////////////////////////

//4️⃣ Readonly : Sometimes a property should never change.

class BrowserConfig {

    readonly browser: string;

    constructor(browser: string) {
        this.browser = browser;
    }

}
const config = new BrowserConfig("chromium");
console.log(`Browser : ${config.browser}`);
//config.browser = "firefox";  ==>Compile-time error.

//5️⃣ Getters & Setters Sometimes we don't want users to access properties directly.
class Employee5 {

    private salary: number = 0;

    get Salary() {
        return this.salary;
    }

    set Salary(value: number) {

        if (value > 0) {
            this.salary = value;
        }

    }

}
const emp5 = new Employee5();

emp5.Salary = 2500000;

console.log(emp5.Salary);
/*
Why use setters?

Suppose someone tries:

emp.Salary = -5000;

Setter prevents invalid data.

Without setter:

salary = -5000

With setter:

Rejected

This is called Encapsulation

*/

//6️⃣ Inheritance
class Employee6 {

    constructor(
        public name: string,
        public company: string
    ) {}

}
class AutomationEngineer extends Employee6 {

    constructor(
        name: string,
        company: string,
        public tool: string
    ) {
        super(name, company);
    }

}
const engineer = new AutomationEngineer(
    "Anjani",
    "Capco",
    "Playwright"
);

console.log(engineer.name);
console.log(engineer.company);
console.log(engineer.tool);

/*
What is super()?

super() calls the parent class constructor.
Without it:

class AutomationEngineer extends Employee {

}

TypeScript doesn't know how to initialize the parent properties.

So we write:

super(name, company);

*/

//Real Playwright Example
/*
class BasePage {

    constructor(protected page: Page) {}

    async open(url: string) {
        await this.page.goto(url);
    }

}

class LoginPage extends BasePage {

    async login(user: string, pass: string) {
        // login logic
    }

}

class HomePage extends BasePage {

    async search(product: string) {
        // search logic
    }

}

    */