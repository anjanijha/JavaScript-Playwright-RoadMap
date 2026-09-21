const str = "Anjani"
const map = new Map<string, number>();
for (const ch of str) {
    map.set(ch, (map.get(ch) ?? 0) + 1);
}
for (const [ch,count] of map) {
    if (count === 1) {
        console.log(`The First Non-Repeated Character is: ${ch}`);
        break;
    }
}
