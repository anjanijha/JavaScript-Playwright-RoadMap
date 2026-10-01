package SDET;

import java.util.Scanner;

public class _15FactorialUsingRecursion {
    public static void main(String[] args) {
        System.out.println("Please enter the number");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int factorial = fact(num);
        System.out.println("The factorial of number is :" + factorial);
    }

    private static int fact(int num) {
        if (num == 0 || num == 1) {
            return 1;
        }
        return num * fact(num - 1);

    }
}
