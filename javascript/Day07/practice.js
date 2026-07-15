//Ex 1: Print: Start End Hello after 2 seconds using setTimeout().

console.log("Start");

setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

console.log("End");

//Ex 2: Create a Promise that resolves with: "Welcome to JavaScript" Consume it using .then().

const promise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Welcome to JavaScript");
    }
    else {
        reject("Error ")
    }
});
promise
    .then(result => {
    console.log(result);
    })
    .catch(error =>{
        console.log(error);
    });

// Ex 3: Create an async function that awaits the Promise from Exercise 2 
// and prints the result.

async function run(){
    const result = await promise;
    console.log(result);

}
run();

//Ex 4 : Create an async function that throws an error and handle it using try...catch.

async function hello(){
  try{
        throw new Error("Invalid greeting");

    } catch (error) {

        console.log(error.message);

    }

}
hello();


//Ex 5 :using setTimeout() and explain why the output appears in that order.
console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

console.log("3");

