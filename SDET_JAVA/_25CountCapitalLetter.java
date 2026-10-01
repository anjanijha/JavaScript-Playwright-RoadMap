package SDET;

import java.util.Scanner;

public class _25CountCapitalLetter {
    public static void main(String [] args){
        System.out.println("Please enter thr string");
        Scanner sc= new Scanner(System.in);
        String str=sc.nextLine();
        char[] chs=str.toCharArray();
        int count=0;
        for(int i=0;i<str.length()-1;i++){
            if(str.charAt(i)>='A'&&str.charAt(i)<='Z'){
                count++;
            }
        }
        System.out.println("The total count of capital latter is  : "+count);
    }
}
