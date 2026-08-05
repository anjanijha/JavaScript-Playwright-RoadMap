function isPrimeNumber(num: number) :boolean | undefined{
    for(let i=2;i<num/2;i++){
        if(num%i==0){
       return false;
        }
    }
    return true;
}
const isPrime= isPrimeNumber(10);
console.log(`The number is prime : ${isPrime}`);