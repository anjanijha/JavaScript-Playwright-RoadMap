const str = "Anjani Kumar Jha";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
}
console.log(`The reverse string is : ${revStr}`);
const strn = "Anjani Kumar Jha"
let chars = str.split("");
let i = 0;
let j = strn.length - 1;
while (i < j) {
    let temp = chars[i];
    chars[i] = chars[j];
    chars[j] = temp;
    i = i + 1;
    j = j - 1;
}
console.log(`${chars.join("")}`);