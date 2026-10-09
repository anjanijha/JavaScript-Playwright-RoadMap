const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const map: Map<string, string[]> = new Map();
for (const word of words) {
    const chars = word.split("");
    chars.sort();
    const key = chars.join("");
    if (!map.has(key)) {
        map.set(key, []);
    }
    map.get(key)!.push(word);
}
console.log(Array.from(map.values()));

