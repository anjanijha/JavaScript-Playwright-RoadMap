let pos = 0;
const arr = [1, 2, 3, 5, 0, 0, 7, 8, 8];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        let temp = arr[pos];
        arr[pos] = arr[i];
        arr[i] = temp;
        pos++;
    }
}
console.log(`${arr}`);
