function revserInteger(num: number) :number{
    let revNum=0;;
    while(num>0){
        revNum=revNum*10+num%10;
        num=Math.floor(num/10);
    }
    return revNum;
}
let rev= revserInteger(1234);
console.log(`The reverse Integer: ${rev}`);