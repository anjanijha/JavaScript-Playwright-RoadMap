function sumOfDigit(str:string): number{
    let sum: number =0;
    for(const ch of str){
        if(ch>='1'&&ch<='9')
        sum=sum+Number(ch);
    }
    return sum;
}
let sum=sumOfDigit("Anjani234");
console.log(`The sum of digit in String : ${sum}`)