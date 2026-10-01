package SDET;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class _18Each_word_count {
    public static void main(String [] args){
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str= sc.nextLine();
        HashMap<String, Integer> hm= new HashMap<>();
        String[] words=str.split(" ");
        for(String word:words){
            if(hm.containsKey(word)){
                hm.put(word,hm.get(word)+1);
            }
            else{
                hm.put(word,1);
            }
        }
        for(Map.Entry<String, Integer> entry: hm.entrySet()){
            System.out.println(" The key is : "+entry.getKey()+"  " +
                    "and the respected values is : "+entry.getValue());
        }
    }
}
