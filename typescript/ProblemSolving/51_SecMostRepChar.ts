const str = "aabbcccccddd";
const hm = new Map<string, number>();
for (const ch of str) {
    hm.set(ch, (hm.get(ch) ?? 0) + 1);
}
let max = 0;
let secMax = 0;
for (const count of hm.values()) {
    if (count > max) {
        secMax = max;
        max = count;
    } else if (count > secMax && count < max) {
        secMax = count;
    }
}
for (const [character, count] of hm.entries()) {
    if (count === secMax) {
        console.log("The 2nd most repeated character: " + character);
        break;
    }
}