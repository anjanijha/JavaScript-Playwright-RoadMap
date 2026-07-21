/*
1️⃣ What is Asynchronous Programming?

Imagine you're ordering food.
------------------------------------------------------
Synchronous: You can't do anything while waiting.
------------------------------------------------------
Order Pizza
      ↓
Wait 30 minutes
      ↓
Eat Pizza
      ↓
Go to Movie


------------------------------------------------------------
Asynchronous: You don't block your work.
------------------------------------------------------------
Order Pizza
      ↓
Go to Movie
      ↓
Pizza arrives
      ↓
Eat Pizza

JavaScript works like this.
*/

/*
2️⃣ What is a Promise?
A Promise represents a value that will be available later.
A Promise has three states.

Pending
   │
   ├────────► Fulfilled (Resolved)
   │
   └────────► Rejected (Failed)

*/
//Creating Promise

function launchBrowser() : Promise<string>{ //This Promise returns a string.
    return new Promise((resolve,reject)=>{
        const  browserStarted :boolean = true;
        if(browserStarted){
            resolve("Browser launched successfully");
        }
        else{
            reject("Browser not launched successfully")
        }

    });

}
launchBrowser()
        .then(result=>console.log(result))
        .catch(error=>console.log(error));


//3️⃣ async : async makes a function automatically return a Promise.

async function greeting(): Promise<string> {
    return "Hello Playwright"; // Even though you return a string, TypeScript converts it into -Promise<string>
}

//4️⃣ await
//Instead of
//launchBrowser()
//    .then(...)

async function startBrowser() {

    const result = await launchBrowser();

    console.log(result);

}

startBrowser();

//Flow
/*
startBrowser()

↓

await launchBrowser()

↓

Promise executes

↓

Promise resolved

↓

Result returned

↓

Continue execution 

*/

//5️⃣ Promise with Custom Objects -  Instead of returning a string, return an object.

interface BrowserConfig {

    browser: string;

    headless: boolean;

}

async function getBrowserConfig(): Promise<BrowserConfig> {

    return {
        browser: "chromium",
        headless: true
    };

}
async function main() {

    const config = await getBrowserConfig();

    console.log(config.browser);

}

main();

//6️⃣ Promise with Arrays
interface Employee {

    name: string;

    company: string;

}

async function getEmployees(): Promise<Employee[]> {

    return [

        {
            name: "Anjani",
            company: "Capco"
        },

        {
            name: "Rahul",
            company: "Google"
        }

    ];

}
async function mainArray() {

    const employees = await getEmployees();

    employees.forEach(emp => {
        console.log(emp.name);
    });

}

mainArray();

//7️⃣ Error Handling - Always use try...catch with async functions.
async function launchBrowser1(): Promise<string> {

    throw new Error("Browser failed");

}

async function main1(): Promise<void> {

    try {

        const result = await launchBrowser1();

        console.log(result);

    } catch (error) {

        if (error instanceof Error) {
            console.log(error.message);
        }

    }

}
main1();

//8️⃣ Multiple Async Operations

//---------------------------------------------------------
//Sequential execution: Runs one after the other.
//---------------------------------------------------------
async function main2() {

    const browser = await launchBrowser();

    const config = await getBrowserConfig();

    console.log(browser);
    console.log(config);

}

//---------------------------------------------------------
//Parallel execution:
//---------------------------------------------------------

async function main3() {

    const [browser, config] = await Promise.all([
        launchBrowser(),
        getBrowserConfig()
    ]);

    console.log(browser);
    console.log(config);

}

//Real Playwright Example Everything uses "await" because Playwright APIs return Promises.