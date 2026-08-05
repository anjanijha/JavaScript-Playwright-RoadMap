function reverse(str: string) :string{
   let revStr="";
   for(let i=str.length-1;i>=0;i--){
       revStr=revStr+str[i];
   }
   return revStr;
}
let rev= reverse("Anjani Kumar Jha");
console.log(`The reverse string is : ${rev}`);