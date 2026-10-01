package SDET;

import java.util.Scanner;

public class _44StringPalindrome {
    public static void main(String [] args){
        System.out.println("Please enter thr string");
        Scanner sc= new Scanner(System.in);
        String str=sc.nextLine();
        String revStr="";
        char[] ch= str.toCharArray();
        for(int i=str.length()-1;i>=0;i--){
            revStr=revStr+ ch[i];
        }
        if(str.equals(revStr))
        System.out.println("The string is Palindrome");
        else{
            System.out.println("The string is not Palindrome");
        }
    }
}
