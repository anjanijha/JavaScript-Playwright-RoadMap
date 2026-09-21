const str1 = "Anjani"
const str2 = "janiAn"
if (sorting(str1) === sorting(str2)) {
    console.log("The given strings are anagram");
} else {
    console.log("The given strings are not anagram");
}

function sorting(str: string): string {
    const chars = str.split("");
    for (let i = 0; i < chars.length; i++) {
        for (let j = i + 1; j < chars.length; j++) {
            if (chars[i] > chars[j]) {
                let temp = chars[i];
                chars[i] = chars[j];
                chars[j] = temp;
            }
        }
    }
    return chars.join("");
}