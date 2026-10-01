package SDET;

import java.util.Scanner;

public class _53PrimeNumberInGivenRange {
    public static void main(String[] args) {
        System.out.println("Please enter the two numbers");
        Scanner sc = new Scanner(System.in);
        int start = sc.nextInt();
        int end = sc.nextInt();
        for(int num=start;num<=end;num++){
            if(isPrime(num)){
                System.out.print(num + " ");
            }
        }
    }
    static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
