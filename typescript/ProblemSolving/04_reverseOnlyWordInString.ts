const str = "Anjani Kumar Jha";
const words = str.split(" ");
let revWords = "";
for (let i = words.length - 1; i >= 0; i--) {
    revWords = revWords + words[i] + " ";
}
console.log(`The Reverse of all word from String : ${revWords}`);
