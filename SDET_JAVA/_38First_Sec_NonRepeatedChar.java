package SDET;

import java.util.HashMap;
import java.util.Scanner;

public class _38First_Sec_NonRepeatedChar {
    public static void main(String[] args) {
        System.out.println("Please enter the value of String");
        Scanner sc = new Scanner(System.in);
        String str= sc.nextLine();
        char [] chs= str.toCharArray();
        HashMap<Character, Integer> hm= new HashMap<>();
        for(char ch : chs){
            if(hm.containsKey(ch)){
                hm.put(ch,hm.get(ch)+1);
            }
            else{
                hm.put(ch,1);
            }
        }
     //1st non-repeated
        for(char ch : chs){
            if(hm.get(ch)==1){
                System.out.println(" The 1st non repeated char is :"+ch);
                return;
            }
        }
       int  count=0;
        //2nd non-repeated
        for (char ch:chs) {
            if (hm.get(ch) == 1) {
                count++;
                if (count == 2) {
                    System.out.println(" The 2nd Non-Repeated Character is:" +ch);
                    break;
                }
            }
        }
        System.out.println(" The no non repeated char is found");
    }

}