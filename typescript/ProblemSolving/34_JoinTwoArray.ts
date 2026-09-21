const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
let tolLen = arr1.length + arr2.length;
const mergeArr: number[] = [];
for (let i = 0; i < arr1.length; i++) {
    mergeArr[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
    mergeArr[arr1.length + i] = arr2[i];
}

console.log(mergeArr);