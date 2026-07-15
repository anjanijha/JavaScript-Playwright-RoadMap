enum ExecutionStatus {
    Passed = "PASSED",
    Failed = "FAILED",
    Skipped = "SKIPPED"
}
const testName :string ="Login Test";
const duration :number =4.5;
const status   :ExecutionStatus=ExecutionStatus.Passed;
const tags     :string[]=["Smoke", "Regression"];
const isAutomated :boolean = true;
const environment: string | null = "QA";

function displayExecutionSummary(): void{
    console.log("================================");
    console.log("Test Execution Summary");
    console.log("================================");
    console.log(`Test Name      : ${testName}`);
    console.log(`Duration       : ${duration} seconds`);
    console.log(`Status         : ${status}`);
    console.log(`Tags           : ${tags.join(", ")}`);
    console.log(`Automated      : ${isAutomated}`);
    console.log(`Environment    : ${environment}`);

}
displayExecutionSummary();