class Student {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}
const student = new Student("Anjani");
console.log(`Student Name : ${student.name}`);
student.name = "Rahul";
console.log(`Updated Student Name : ${student.name}`);

class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            console.log("Invalid balance");
            return;
        }
        this._balance = value;
    }
}
const bankAccount = new BankAccount(10);
console.log(`balance using constructor: ${bankAccount.balance}`);
bankAccount.balance = -1;

class MathUtility {
    static square(num) {
        console.log(`Sqaure of the given number : ${num * num}`);
    }
}
MathUtility.square(20)