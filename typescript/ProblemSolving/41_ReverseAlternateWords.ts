function ReverseAlternateWords(str:string):void{
    const words=str.split(" ");
   for(let i=0;i<words.length;i+=2){
       words[i]= reverse(words[i]);
   }
   let revAlt="";
   for(const word of words){
       revAlt=revAlt+word+" ";
   }
   console.log(`The Alternate reverse word is : ${revAlt}`);
}
function reverse(str:string):string{
    let rev="";
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    return rev;
}
ReverseAlternateWords("Anjani Kumar Jha Aadvik Jha");