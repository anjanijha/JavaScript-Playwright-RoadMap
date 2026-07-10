/*
.

🏆 Mini Project

Create an Employee Management System.

Each employee should have:

name
company
experience
salary

Create a method:
displayEmployee()

OUTPUT :
=========================
Employee Information
=========================

Name        : Anjani
Company     : Capco
Experience  : 8
Salary      : 2400000

Create at least two employee objects and display both.

*/

class Employee{
    constructor(name,company,experience,salary){
        this.name=name;
        this.company=company;
        this.experience=experience;
        this.salary=salary;

    }
    displayEmployee(){
        console.log("===============================");
        console.log("Employee Information");
        console.log("===============================");
        console.log(`Name       : ${this.name}`);
        console.log(`Company    : ${this.company}`);
        console.log(`Experience : ${this.experience}`);
        console.log(`Salary     : ${this.salary}`);
    }
}
const employee1 = new Employee("Anjani","Capco",8,2400000);
const employee2 = new Employee("Apoorva","Bank",10,3200000);
employee1.displayEmployee();
employee2.displayEmployee();