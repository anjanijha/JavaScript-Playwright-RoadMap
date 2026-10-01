package SDET;

import java.util.Scanner;

public class _14PalindromeOfInteger {
    public static void main(String [] args){
        System.out.println("Please enter the number");
        Scanner sc = new Scanner(System.in);
        int num= sc.nextInt();
        int orgNum=num;
        int revNum=0;
        while(num>0){
            revNum=revNum*10+num%10;
            num=num/10;
        }
        if(orgNum==revNum){
            System.out.println(revNum+": is palindrome");
        }
        else{
            System.out.println(revNum+" is not palindrome ");
        }
    }
}
