let num=1234321
    const org : number=num;
    let sum=0;
    while(num>0){
        sum=sum*10+num%10;
        num=Math.floor(num/10);
    }
    if(sum===org)
        console.log(`${org} is an Palindrome Number `);
    else
        console.log(`${org} is not an Palindrome Number `);