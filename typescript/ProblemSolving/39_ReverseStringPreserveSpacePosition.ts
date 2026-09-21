const str = "Anjani Kumar Jha";
let i = 0;
let j = str.length - 1;
const chs = str.split("");
while (i < j) {
    if (str[i] === " ") {
        i++;
    }
    else if (str[j] === " ") {
        j--;
    }
    else {
        let temp = chs[i];
        chs[i] = chs[j];
        chs[j] = temp;
        i++;
        j--;
    }
}
console.log(`The reverse of the string: ${chs.join("")}`);