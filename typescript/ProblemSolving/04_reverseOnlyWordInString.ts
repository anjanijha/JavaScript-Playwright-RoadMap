function reverseOnlyWordInString(str: string): string{
    const words=str.split(" ");
    let revWords="";
    for(let i=words.length-1;i>=0;i--){
        revWords=revWords+words[i]+" ";
    }
    return revWords;
}
let rev= reverseOnlyWordInString("Anjani Kumar Jha");
console.log(`The Reverse of all word from String : ${rev}`);