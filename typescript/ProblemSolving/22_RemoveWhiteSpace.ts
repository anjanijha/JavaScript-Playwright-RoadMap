const str = "An ja ni"
let newStr = "";
for (const ch of str) {
    if (ch !== ' ') {
        newStr = newStr + ch;
    }
}
console.log(`new String is : ${newStr}`);
