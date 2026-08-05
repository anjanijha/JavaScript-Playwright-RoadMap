function fact(num : number) :number{
        if(num==0|| num==1)
            return 1;
    else
            return num*fact(num-1);
}
let factorial= fact(5);
console.log(`The factorial is : ${factorial}`);
