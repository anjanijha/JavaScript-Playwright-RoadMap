/*const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 8;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
            console.log(arr[i], arr[j]);
        }
    }
}
*/
//Two Sum
const arr = [1, 2, 3, 4, 5, 6, 7];
const target = 8;

const seen = new Set<number>();

for (const num of arr) {
    const complement = target - num;

    if (seen.has(complement)) {
        console.log(complement, num);
    }

    seen.add(num);
}