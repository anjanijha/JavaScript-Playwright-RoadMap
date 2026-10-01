package SDET;
import java.util.HashMap;
import java.util.Map;

public class HashMapLearn {
    public static void main(String[] args){
        HashMap<String, Integer> hm= new HashMap<>();
        hm.put("Anjani",202);
        hm.put("Gugua",808);
        hm.put("Apoorva",606);
        hm.put("Satyam",101);
        for(Map.Entry<String, Integer> entry: hm.entrySet()){
            System.out.println("The value of key is :"+entry.getKey()+": + and respected value is :"+entry.getValue());
        }

    }
}
