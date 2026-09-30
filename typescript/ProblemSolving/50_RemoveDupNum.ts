const arr = [10, 20, 30, 20, 40, 10, 50];
const sets = new Set<Number>();
for (const value of arr) {
    if (!sets.has(value)) {
        sets.add(value);
    }
}
console.log(sets);