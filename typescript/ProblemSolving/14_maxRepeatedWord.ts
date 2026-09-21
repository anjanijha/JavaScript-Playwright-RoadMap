const str = "Anjani Kumar Jha Jha Kumar Kumar";
const words = str.split(" ");
const map = new Map<string, number>();
let maxValue: number = 0;
let maxWord: string = "";
for (const word of words) {
    map.set(word, (map.get(word) ?? 0) + 1);
}
for (const [word, count] of map) {
    if (count > maxValue) {
        maxValue = count;
        maxWord = word;
    }
}
console.log(`The Max Repeated word is :${maxWord} with count : ${maxValue}`);