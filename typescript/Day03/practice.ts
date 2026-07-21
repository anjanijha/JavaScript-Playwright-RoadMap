//Exercise 1 : Create -> function subtract(a:number,b:number):number and Return subtraction

function subtract(a:number,b:number):number{
    return a-b;
}
console.log(`Substraction : ${subtract(8,4)}`);

//Exercise 2 : Create ->function employee(name:string, company?:string) Print both values.

function employee(name:string, company?:string){
    console.log(`Employee Name : ${name}`);
    if(company){
        console.log(`Company Name : ${company}`);
    }
}
employee("Anjani");
employee("Anjani","Capco");

//Exercise 3 Create ->function browser(name="chromium") Print browser name.

function browser(name : string="chromium") :void{
    console.log(`Browser Name : ${name}`);
}
browser();

//Exercise 4 Create -> function average(...numbers:number[]) Return average.

function average(...numbers:number[]) :number {
    const sum= numbers.reduce((total,number)=>(total+number),0);
    return sum/numbers.length;
}
console.log(`Average: ${average(10,20,30,40)}`);

//Exercise 5 Create an arrow function: divide(a,b) Return division.

const divide =(a: number , b: number): number=>{
            return a/b;
}
console.log(`Division : ${divide(8,4)}`);

//Exercise 6 Create -> type Operation Use it for:add ,subtract
type Operation = (a: number, b: number) => number;
const add1: Operation = (a, b) => a + b;

const subtraction: Operation = (a, b) => a - b;

console.log(add1(10,20));

console.log(subtraction(20,10));

//Exercise 7 Create a callback. Print: Test Started Test Finished
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

//Exercise 8 Create overloaded function: login(username:string) and login(id:number)

function login(username : string): void;
function login(id: number): void;
function login(value: string |number): void {
    console.log(value);
}
login("Anjani");
login(8);