function palindromeString(str: string): void {
    let revStr="";
    for(let i=str.length-1;i>=0;i--){
        revStr=revStr+str[i];
    }
    if(str===revStr)
    console.log(`The given string : ${str} is Palindrome`);
}
palindromeString("AnjnA");