//Exercise 1: 
class Animal {
    sound() {
        console.log("Animal makes sound");
    }
}

const animal= new Animal()
animal.sound();

//Exercise 2: 
class Dog extends Animal {
    sound() {
        console.log("Dog makes sound");
    }
}
const dog= new Dog()
dog.sound();

//Exercise 3:

class Vehicle {
    start() {
        console.log("Vehicle Start");
    }
}

class Car extends Vehicle {
    start() {
        console.log("Car Start");
    }
}

class Bike extends Vehicle {
    start() {
        console.log("Bike Start");
    }
}
//Exercise 4: 

class Employee1 {
    constructor(teamSize){
        this.teamSize= teamSize;
    }
        displayInfo() {
        console.log(`Team Size : ${this.teamSize}`);
    }
    
}

class Manager1 extends Employee1 {
    constructor(teamSize){
    super(teamSize);
    }
}

const manager1 = new Manager1(8);
manager1.displayInfo();