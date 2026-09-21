const arr1 = [1, 2, 3, 4]
const arr2 = [4, 5, 6, 7, 8]
const arr3 = [4, 9]
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
        for (let k = 0; k < arr3.length; k++) {
            if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
                console.log(`The common elements in three array is : ${arr1[i]}`);
            }
        }
    }
}
