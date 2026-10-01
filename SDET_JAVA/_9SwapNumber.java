package SDET;

import java.util.Scanner;

public class _9SwapNumber {
    public static void main(String [] args){
        System.out.println("Please enter the two numbers");
        Scanner sc = new Scanner(System.in);
        int num1=sc.nextInt();
        int num2=sc.nextInt();
         num1=num1+num2;
         num2=num1-num2;
         num1=num1-num2;
        System.out.println("The num1 is : " +num1+" and the num2 is : " +num2);
    }
}
