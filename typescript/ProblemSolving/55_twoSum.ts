const arr: number[] = [2, 7, 7, 11, 15];
const target: number = 9;
const map = new Map<number, number>();
for (let i = 0; i < arr.length; i++) {
    const required: number = target - arr[i];
    if (map.has(required)) {
        console.log(`${map.get(required)} ,${i}`);
    }
    map.set(arr[i], i);
}