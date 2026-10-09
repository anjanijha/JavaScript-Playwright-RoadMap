const str = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(str));
function longestCommonPrefix(str: string[]): string {
    if (str === null || str.length === 0)
        return "";
    return divide(str, 0, str.length - 1);
}

function divide(str: string[], left: number, right: number): string {
    if (left === right)
        return str[left];
    let mid = Math.floor((left + right) / 2);
    let leftPrefix: string = divide(str, left, mid);
    let rightPrefix: string = divide(str, mid + 1, right);
    return commonPrefix(leftPrefix, rightPrefix);
}
function commonPrefix(s1: string, s2: string): string {
    let i = 0;
    while (i < s1.length && i < s2.length && s1.charAt(i) === s2.charAt(i)) {
        i++;
    }
    return s1.substring(0, i);
}
