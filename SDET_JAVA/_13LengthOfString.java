package SDET;

import java.util.Scanner;

public class _13LengthOfString {
    public static void main(String[] args){
        System.out.println("Please enter the string");
        Scanner sc= new Scanner(System.in);
        String str= sc.nextLine();
        int len=0;
        char[] chars= str.toCharArray();
        for(char ch: chars){
            len++;
        }
        System.out.println("The length of string is : "+len);

    }
}
