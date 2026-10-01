package SDET;

import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Scanner;
import java.util.Set;

public class _63RemoveDupChar {
    public static void main(String[] args) {
        System.out.println("Please enter the total number");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        Set<Character> sets= new LinkedHashSet<>();
        for(char ch:str.toCharArray()){
            if(!sets.contains(ch)){
                sets.add(ch);
            }
        }
        StringBuilder sb= new StringBuilder();
        for(char ch:sets){
            sb.append(ch);
        }
        System.out.println(" The duplicate number is "+sb.toString());
    }
}
