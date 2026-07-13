class Employee{
    constructor(name,company){
        this.name=name;
        this.company=company;
    }
    displayInfo(){
        console.log(`Name       : ${this.name}`);
        console.log(`Company    : ${this.company}`);
    }
}

class AutomationEngineer extends Employee{
    constructor(name,company,tool,experience){
        super(name,company);
        this.tool=tool;
        this.experience=experience;
    }
    displayInfo(){
        console.log("===============================");
        console.log("Automation Engineer");
        console.log("===============================");
        super.displayInfo();
        console.log(`Tool       : ${this.tool}`);
        console.log(`Experience : ${this.experience} Years`);
    }
}
const automationEngineer = new AutomationEngineer("Anjani","Capco","Playwright",8);
automationEngineer.displayInfo();