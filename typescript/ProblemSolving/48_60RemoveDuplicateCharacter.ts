const str = "Anjjanii";
const chs = str.split("")
let newStr = ""
const sets = new Set();
for (const ch of chs) {
    if (!sets.has(ch)) {
        sets.add(ch);
        newStr = newStr + ch;
    }
}
console.log(`The new String is ${newStr}`);
