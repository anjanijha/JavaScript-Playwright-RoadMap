package SDET;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class _17NumberOfDuplicateWord {
    public static void main(String[] args) {
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String[] words = str.split(" ");
        HashMap<String, Integer> hm = new HashMap<>();
        for (String word : words) {
            if (hm.containsKey(word)) {
                hm.put(word, hm.get(word) + 1);
            } else {
                hm.put(word, 1);
            }
        }
        for (Map.Entry<String, Integer> entry : hm.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.println(" The duplicated Strings are " + entry.getKey() +
                        " :  with count : " + entry.getValue());
            }
        }
    }
}