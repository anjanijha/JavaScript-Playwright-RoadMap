let num = 11;
let flag = true;
for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) {
        flag = false;
    }
}
console.log(`The number is prime : ${flag}`);