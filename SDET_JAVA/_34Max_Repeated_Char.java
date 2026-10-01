package SDET;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class _34Max_Repeated_Char {
    public static void main(String[] args){
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        HashMap<Character, Integer> hm = new HashMap<>();
        char[] chars= str.toCharArray();
        int maxCharCount=0;
        String maxChar="";
        for(char ch: chars){
            if(hm.containsKey(ch)){
                hm.put(ch,hm.get(ch)+1);
            }
            else {
                hm.put(ch,1);
            }
        }
        for(Map.Entry<Character,Integer> entry: hm.entrySet()){
            if(entry.getValue()>maxCharCount){
                maxCharCount=entry.getValue();
                maxChar=String.valueOf(entry.getKey());
            }
        }
        System.out.println(" The maximum repeated character is "+maxChar+" : with value "+maxCharCount);
    }
}
