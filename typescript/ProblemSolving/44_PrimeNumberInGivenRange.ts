function isPrime(num: number): boolean {

    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

const start = 10;
const end = 50;

for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
        console.log(num);
    }
}