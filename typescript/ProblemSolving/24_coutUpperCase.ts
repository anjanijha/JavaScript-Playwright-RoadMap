const str = "ANJani"
let count = 0;
for (const ch of str) {
    if (ch >= 'A' && ch <= 'Z')
        count++;
}
console.log(`The count of capital letter : ${count}`)
