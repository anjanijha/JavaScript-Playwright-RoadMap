
/*       
1St Approach:
let arr=[1,2,3,4,5,5,7];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            console.log(`The duplicate number is : ${num}`);
            break;
        }
    }
  }*/

//2nd Approach:
const arr = [1, 2, 3, 4, 5, 5, 7];
const sets = new Set<number>();
for (const num of arr) {
    if (sets.has(num)) {
        console.log(`The duplicate number is : ${num}`);
        break;
    }
    sets.add(num);
}

