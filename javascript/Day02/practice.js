console.log("\n========== Exercise 1 : Create an empty Employee class. ========")
class Employee1{

}
console.log("\n========== Exercise 2 : Create an object ========")
class Employee2{

}
const employee2 = new Employee2()
console.log(employee2);

console.log("\n========== Exercise 3 : Create Constructor ========")
class Employee3{
    constructor(){
        console.log("Constructor created")
    }

}
const employee3 = new Employee3()

console.log("\n========== Exercise 4 : Stroe : name,company,experience using this========");
class Employee4{
    constructor(name,company,experience){
        this.name=name;
        this.company=company;
        this.experience=experience;
    }
    displayInfo() {
        console.log(`Name       : ${this.name}`);
        console.log(`Company    : ${this.company}`);
        console.log(`Experience : ${this.experience}`);
    }

}
const employee4 = new Employee4("Apoorva","Union bank",8);
console.log(employee4);
const emp3= new Employee4("Anjani","Capco",8);
const emp4= new Employee4("Rahul","Google",5);
emp3.displayInfo();
emp4.displayInfo();
