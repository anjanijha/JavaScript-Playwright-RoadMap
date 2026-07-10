bonusCalculator();
function bonusCalculator() {
    const employee = {
        name: "Anjani",
        experience: 8,
        salary: 2400000
    };
    let bonus;
    console.log("===============================");
    console.log("Employee Bonus Calculator");
    console.log("===============================");
    console.log(`Employee       : ${employee.name}`);
    console.log(`Experience     : ${employee.experience}`);
    console.log(`Salary         : ${employee.salary}`);
    if (employee.experience >= 10) {
        bonus = employee.salary * 0.20;
    } else if (employee.experience >= 5) {
        bonus = employee.salary * 0.10;
    }
    else {
        bonus = employee.salary * 0.05;
    }
    console.log(`Bonus          : ${bonus}`);
}
    miniProject();
function miniProject() {
    console.log("===============================");
    console.log("Browser Information");
    console.log("===============================");

    const browser = {
        name: "Chrome",
        version: "138",
        headless: true
    };

    let status;

    if (browser.headless) {
        status = "Browser Ready in headless mode";
    } else {
        status = "Browser Ready in headed mode";
    }

    console.log(`Name       : ${browser.name}`);
    console.log(`Version    : ${browser.version}`);
    console.log(`Headless   : ${browser.headless}`);
    console.log(`Status     : ${status}`);
}