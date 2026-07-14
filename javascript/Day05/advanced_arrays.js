/*
1️⃣ map()
Purpose

Transforms every element and returns a new array.
*/
const numbers = [1,2,3,4,5];
const squares = numbers.map(number=>number*number);
console.log(`before map implimentation : ${numbers}`);
console.log(`after map implimentation : ${squares}`);

const prices = [100, 200, 300];
const discoutedPrice = prices.map(price=>price*0.9);
console.log(`before discount : ${prices}`);
console.log(`after discount : ${discoutedPrice}`);

/*
2️⃣ filter()
Purpose

Returns only the elements that satisfy a condition.
*/

const nums = [10,15,20,25,30];
const even = nums.filter(even=>even%2===0);
console.log(`Even number : ${even}`);

/*
3️⃣ find()
Purpose

Returns the first matching element.

*/

const employees=[
    {
        name :"Anjani",
        company : "capco"
    },
    {
        name :"Rahul",
        company : "Google"
    }
]
const employee= employees.find(emp=>emp.name ==="Rahul");
console.log("Employee Found");
console.log(`Name    : ${employee.name}`);
console.log(`Company : ${employee.company}`);

/*
4️⃣ some()
Purpose

Checks whether at least one element satisfies a condition.

Returns:

true

or

false

*/

const marks=[30,50,90];
const hasDistinction = marks.some(mark=>mark>80);
console.log(`some Number is in arrays is > 80 ${hasDistinction}`);


/*
5️⃣ every()
Purpose

Checks whether all elements satisfy a condition.

*/
const numArrays=[30,50,90];
const numArray = numArrays.every(mark=>mark>20);
console.log(`Every numbers is in arrays is > 20 : ${numArray}`);

/*
6️⃣ reduce()
Purpose

Combines all elements into a single value.

reduce((accumulator,currentValue)=>{},initialValue)

Most common use:
Sum
Total
Average

*/

const numbs = [10,20,30];
const sum= numbs.reduce((sum,number)=>sum+number,0);
console.log(`Total sum of array : ${sum}`);