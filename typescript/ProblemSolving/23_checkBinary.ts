function checkBinary(num: number) :void{
   let flag: boolean=true;
    if(num===0||num===1){
        flag= false;
    }
    while(num!==0){
        if(num%10>1){
            flag= false;
            break;
        }
        num=Math.floor(num/10);
    }
    if(flag)
        console.log(`The Given number is Binary`);
    else
        console.log(`The Given number is not Binary`);
    
}
checkBinary(10108);
