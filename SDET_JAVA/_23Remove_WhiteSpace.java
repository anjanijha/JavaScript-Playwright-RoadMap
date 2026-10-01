package SDET;

import java.util.Scanner;

public class _23Remove_WhiteSpace {
    public static void main(String [] args){
        System.out.println("Please enter the String");
        Scanner sc= new Scanner(System.in);
        String str=sc.nextLine();
      //  String trimString=str.trim();
      //  System.out.println(" The Trimed string is :"+trimString);
        StringBuilder sb = new StringBuilder();
        for(char ch: str.toCharArray()){
            if(ch!=' '){
                sb.append(ch);
            }
        }
        System.out.println("The Trimed string is :"+sb.toString());
    }
}
