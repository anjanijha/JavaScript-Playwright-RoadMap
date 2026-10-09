const arr = [2, -3, 4, -1, 6, -5, -7, 8];
let i = 0;
let j = arr.length - 1
while (i < j) {
    if (arr[i] < 0) {
        i++;
    }
    else if (arr[j] > 0) {
        j--;
    }
    else {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}
console.log(`The new arr : ${arr}`);