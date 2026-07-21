//Exercise 1: Class
class Employee {

    name!: string;
    company!: string;
    experience!: number;

    displayInfo(): void {

        console.log(this.name);
        console.log(this.company);
        console.log(this.experience);

    }
}
const emp1 = new Employee();
const emp2 = new Employee();
emp1.name = "Apporva";
emp1.company = "Bank";
emp1.experience = 9;
emp1.displayInfo();
emp2.name = "Chhote";
emp2.company = "Nitco";
emp2.experience = 2;
emp2.displayInfo();


//Exercise 2 -Constructor
class Employee2 {

    name: string;
    company: string;
    experience: number;

    constructor(name: string, company: string, experience: number) {
        this.name = name,
            this.company = company,
            this.experience = experience
    }

    displayInfo(): void {

        console.log(this.name);
        console.log(this.company);
        console.log(this.experience);

    }
}
const emp21 = new Employee2("Anjani", "Capco", 8);
emp21.displayInfo();
const emp22 = new Employee2("Rahul", "Google", 16);
emp22.displayInfo();

//Exercise 3: Access Modifiers
class BankAccount {
    public accountHolder: string;
    private balance: number;
    protected bankName: string;
    constructor(accountHolder: string, balance: number, bankName: string) {
        this.accountHolder = accountHolder,
            this.balance = balance,
            this.bankName = bankName
    }

}
const bankAccount = new BankAccount("Apoorva", 30000, "UBI");
const holder = bankAccount.accountHolder;
//const bal=bankAccount.balance; //unable to access due to private
//const bank= bankAccount.bankName; //unable to access due to protected

//Exercise 4 – Readonly
class BrowserConfig {

    readonly browser: string;
    headless: boolean;

    constructor(browser: string, headless: boolean) {
        this.browser = browser;
        this.headless = headless;
    }

}
const config = new BrowserConfig("chromium", true);
config.headless = false;       // Valid
// config.browser = "firefox"; // Error
console.log(config.browser);
console.log(config.headless);

//Exercise 5 – Getters & Setters
class Employee5 {
    private _salary: number = 0;

    get salary(): number {
        return this._salary;
    }

    set salary(value: number) {
        if (value <= 0) {
            console.log("Salary must be greater than zero.");
            return;
        }

        this._salary = value;
    }
}

const emp5 = new Employee5();

emp5.salary = 2500000;
console.log(emp5.salary);

emp5.salary = -5000;
console.log(emp5.salary);

//Exercise 6 – Inheritance

class BankAccount1 {
    constructor(
        public accountHolder: string,
        private balance: number,
        protected bankName: string
    ) {}

    displayBalance(): void {
        console.log(`Balance: ${this.balance}`);
    }
}

class SavingsAccount extends BankAccount1 {
    displayBank(): void {
        console.log(`Bank: ${this.bankName}`);
    }

    // this.balance is not accessible because balance is private
}

const account = new SavingsAccount(
    "Anjani",
    50000,
    "HDFC Bank"
);

console.log(account.accountHolder); // Valid
//account.displayBalance();
account.displayBank();

// console.log(account.balance);  // Error: private
// console.log(account.bankName); // Error: protected