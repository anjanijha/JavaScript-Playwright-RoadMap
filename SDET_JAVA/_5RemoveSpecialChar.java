package SDET;

import java.util.Scanner;

public class _5RemoveSpecialChar {
    public static void main(String[] args){
        System.out.println("Please enter the String :");
        Scanner sc= new Scanner(System.in);
        String str=sc.nextLine();
        String newStr=str.replaceAll("[^0-9 A-Z a-z]","");
        System.out.println("The new String is : "+newStr);
    }
}
