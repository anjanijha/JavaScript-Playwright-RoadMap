package SDET;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
public class _16MaxRepeatedWord {
    public static void main(String [] args){
        System.out.println("Please enter the value of String");
        Scanner sc = new Scanner(System.in);
        String str= sc.nextLine();
        String [] words= str.split(" ");
        HashMap<String, Integer> hm= new HashMap<>();
        int maxCount=0;
        String maxWord="";
        for(String word : words){
            if(hm.containsKey(word)){
                hm.put(word,hm.get(word)+1);
            }
            else{
                hm.put(word,1);
            }
        }
        for(Map.Entry<String, Integer> entry: hm.entrySet() ){
            if(entry.getValue()>maxCount){
                maxCount= entry.getValue();
                maxWord=entry.getKey();
            }
        }
        System.out.println(" The Maximum repeated word is :"+maxWord + ": and count is "+maxCount);

    }
}
