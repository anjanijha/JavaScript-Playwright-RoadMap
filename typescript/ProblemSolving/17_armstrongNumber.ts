let num = 1634
const org: number = num;
const numLen = num.toString().length;
let sum = 0;
while (num > 0) {
    const digit = num % 10;
    sum = sum + Math.pow(digit, numLen);
    num = Math.floor(num / 10);
}
if (sum === org)
    console.log(`${org} is an Armstrong Number `);
else
    console.log(`${org} is not an Armstrong Number `); 
