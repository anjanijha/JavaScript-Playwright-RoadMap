package SDET;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class _20DuplicateCharacter {
    public static void main(String[] args) {
        System.out.println("Please enter the value of string ");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char[] chars = str.toCharArray();
        HashMap<Character, Integer> hm = new HashMap<>();
        for (char ch : chars) {
            if (hm.containsKey(ch)) {
                hm.put(ch, hm.get(ch) + 1);
            } else {
                hm.put(ch, 1);
            }
        }
        for (Map.Entry<Character, Integer> entry : hm.entrySet()) {
            if (entry.getValue() > 1) {
                System.out.println("The duplicate character is " + entry.getKey() +
                        " : with count :" + entry.getValue());
            }
        }

    }
}
