
function removeSpecialChar(str: string): string{
    const newStr=str.replace(/[^a-zA-Z0-9]/g, "");
    return newStr;
}

let newStr= removeSpecialChar("Anjan$%$%^i");
console.log(`The new String is  : ${newStr}`);