package SDET;

import java.util.Scanner;

public class _27Count_SpecialChar {
    public static void main(String[] args){
        System.out.println("Please enter the string");
        Scanner sc = new Scanner(System.in);
        String str= sc.nextLine();
        int upper=0;
        int lower=0;
        int num=0;
        int special=0;
        for(int i=0;i<str.length();i++){
            char ch=str.charAt(i);
            if(ch>='A'&&ch<='Z')
                upper++;
           else if(ch>='a'&&ch<='z')
                lower++;
           else if(ch>='0'&&ch<='9')
                num++;
           else
               special++;
        }
        System.out.println(" The upper case is"+upper);
        System.out.println(" The lower case is"+lower);
        System.out.println(" The number case is"+num);
        System.out.println(" The special case is"+special);
    }
}
