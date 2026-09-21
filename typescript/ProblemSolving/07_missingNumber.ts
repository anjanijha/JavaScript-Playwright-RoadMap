const arr = [1, 2, 3, 4, 5, 7];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
let n = arr.length + 1;
let miss = n * (n + 1) / 2 - sum;
console.log(`The missing number is : ${miss}`);
