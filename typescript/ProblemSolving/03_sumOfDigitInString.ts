const str = "Anjani234"
let sum: number = 0;
for (const ch of str) {
    if (ch >= '1' && ch <= '9')
        sum = sum + Number(ch);
}
console.log(`The sum of digit in String : ${sum}`);