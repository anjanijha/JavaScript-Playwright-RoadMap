/*
1️⃣ Synchronous JavaScript
Definition

Synchronous means:

Execute one statement at a time, in order.
*/
console.log("Start");

console.log("Loading Data");

console.log("End");
/*
Execution Flow: 

Start
   ↓
Loading Data
   ↓
End

Nothing starts until the previous statement finishes.

Problem with Synchronous Code:
Imagine downloading data from a server.
downloadData(); // takes 10 seconds
If JavaScript waits 10 seconds...

Everything freezes.

Loading...

(wait 10 seconds)

Continue...

This would make websites unusable.
*/

/*
2️⃣ Asynchronous JavaScript

Instead of waiting...

JavaScript starts the task and continues executing other code.
*/
console.log("Start...");

setTimeout(() => {
    console.log("Downloaded");
}, 2000);

console.log("End...");

/*
Notice:  JavaScript didn't wait.

Execution

Start
   ↓
Start Timer
   ↓
End
   ↓
(after 2 seconds)
Downloaded

This is asynchronous programming.

Why is JavaScript asynchronous if it is single-threaded?

Answer:

JavaScript itself runs on a single thread, but the browser (or Node.js runtime) provides
APIs like setTimeout, network requests, and file operations. These are handled outside
the main thread, and when they finish, callbacks are placed into the event loop queue 
for JavaScript to execute.
*/

/*

3️⃣ Callback Functions

Before Promises existed...

Callbacks were used.

*/
function download(callback) {

    console.log("Downloading...");

    callback();

}

download(() => { //pass entire function to download function and after callback being called.

    console.log("Download Complete.....");

});

/*

Callback Hell

Imagine:

Download file

↓

Read file

↓

Save file

↓

Upload file

Code becomes:

download(() => {

    read(() => {

        save(() => {

            upload(() => {

                console.log("Done");

            });

        });

    });

});

This is called Callback Hell.

Problems

Difficult to read
Difficult to debug
Difficult to maintain

Promises solved this problem.

*/

/*
4️⃣ Promises

A Promise represents a future result.

A Promise has three states:

Pending

↓

Fulfilled

or

Rejected

*/
const promise = new Promise((resolve, reject) => {

    const success = true;

    if (success) {

        resolve("Downloaded for success via promise");

    } else {

        reject("Failed");

    }

});
// Method 1: without async and wait
promise
    .then(result => {

        console.log(result);

    })
    .catch(error => {

        console.log(error);

    });

/*
5️⃣ Async & Await : This is what Playwright uses everywhere.

*/

// // Method 2: with async and wait
async function run() {

    const result = await promise; // Line 175

    console.log(result);

}
run();

/*

6️⃣ try...catch

Always use with async code.
*/
async function login() {

    try {

        throw new Error("Invalid Login");

    } catch (error) {

        console.log(error.message);

    }

}

login();

/*7️⃣ Real Playwright Example

Why does Playwright use async/await?

1.Browser launch takes time
2.Opening a page takes time
3.Clicking takes time
4.Typing takes time
5.Waiting for elements takes time
6.API calls take time

Everything is asynchronous.


*/
//await page.goto("https://google.com");

//await page.click("#login");

//const response = await page.request.get("/users");

//const data = await response.json();

console.log(data);

/*
Event Loop (Interview Favorite)

JavaScript has:

Call Stack

↓

Web APIs

↓

Callback Queue

↓

Event Loop
*/

console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

console.log("3"); // output [1,3,2]


/* Promise vs Async/Await:

A Promise is an object that represents the eventual completion or failure of an 
asynchronous operation and is handled using .then() and .catch(). async/await is
built on top of Promises and provides a cleaner, more readable way to write 
asynchronous code using try...catch for error handling. In Playwright, almost all 
browser interactions are asynchronous, so async/await is the preferred approach.

| Promise                                            | Async/Await                                 |
| -------------------------------------------------- | ------------------------------------------- |
| Uses `.then()` and `.catch()`                      | Uses `async` and `await`                    |
| Introduced in ES6                                  | Introduced in ES8 (ES2017)                  |
| Can become difficult with multiple `.then()` calls | Cleaner and easier to read                  |
| Error handling with `.catch()`                     | Error handling with `try...catch`           |
| Good for chaining operations                       | Best for sequential asynchronous operations |
| Returns a Promise                                  | Also returns a Promise                      |

//======================Promise=================================
function downloadFile() {
    return new Promise((resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Download Completed");
        } else {
            reject("Download Failed");
        }
    });
}

downloadFile()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });

//=================Async/Await======================================
function downloadFile() {
    return new Promise((resolve, reject) => {

        const success = true;

        if (success) {
            resolve("Download Completed");
        } else {
            reject("Download Failed");
        }
    });
}

async function startDownload() {

    try {
        const result = await downloadFile();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
}

startDownload();
*/

/*
 iNTERVIEW QUESTION
1.What is asynchronous programming?

Running long-running tasks without blocking the main execution thread.

2.Why do we use Promises?

To avoid callback hell and handle asynchronous operations in a cleaner way

3.Why use async/await?

It makes asynchronous code look and behave like synchronous code, improving readability 
and error handling.

4.Difference between Promise and async/await
Promise uses .then() and .catch().
async/await is syntax built on top of Promises that makes asynchronous code easier to read.
*/
