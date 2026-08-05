function swapNumber(num1: number,num2: number) :void{
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2
    console.log(`The first number is : ${num1} and second number is : ${num2}`);
}

swapNumber(2,4);
