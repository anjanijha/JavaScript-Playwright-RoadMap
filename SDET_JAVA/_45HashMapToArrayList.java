package SDET;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class _45HashMapToArrayList {
    public static void main(String[] args) {
        HashMap<String, Integer> m = new HashMap<>();
        m.put("Geek1", 100);
        m.put("Geek2", 200);
        m.put("Geek3", 300);
        ArrayList<Map.Entry<String, Integer>> al = new ArrayList<>(m.entrySet());
        System.out.println("Key-Value Pairs: " + al);
    }
}
