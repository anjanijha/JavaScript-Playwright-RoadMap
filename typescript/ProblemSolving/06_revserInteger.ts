    let num=1234
    let revNum=0;;
    while(num>0){
        revNum=revNum*10+num%10;
        num=Math.floor(num/10);
    }
    console.log(`The reverse Integer: ${revNum}`);
