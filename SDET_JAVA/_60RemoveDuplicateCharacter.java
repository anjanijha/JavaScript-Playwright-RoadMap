package SDET;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class _60RemoveDuplicateCharacter {
    public static void main(String[] args){
        System.out.println("Please enter the String");
        Scanner sc= new Scanner(System.in);
        String str= sc.nextLine();
        char[] chs=str.toCharArray();
        Set<Character> set= new HashSet<>();
        StringBuilder sb = new StringBuilder();
        for(char ch:chs){
            if(!set.contains(ch)){
                set.add(ch);
                sb.append(ch);
            }
        }
        System.out.println("The new String is "+sb);
    }
}
