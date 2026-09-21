const nums = [1, 2, 4, 2, 6, 8, 9, 5, 4, 3, 2, 1]
const sets = new Set<number>();
for (const num of nums) {
    sets.add(num);
}
console.log(...sets);  //method 1
for(let num of sets){  //method 2
    console.log(num)
}
