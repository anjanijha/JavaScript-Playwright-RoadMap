package SDET;

import java.util.Scanner;

public class _30Fibonacci {
    public static void main(String[] args) {
        System.out.println("Please enter the total number Fibonacci :");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int n1 = 0;
        int n2 = 1;
        int n3;
        System.out.print(n1+" "+n2);
        for(int i=2;i<num;i++){
            n3=n1+n2;
            System.out.print(" " +
                    ""+n3);
            n1=n2;
            n2=n3;
        }

    }
}