package SDET;
import java.util.*;
public class _57SecMostRepeatedChar {
    public static void main(String[] args) {
        System.out.println("Please enter the string ");
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
        int max =0;
        int secMax = 0;
        for (int count : hm.values()) {
            if (count > max) {
                secMax = max;
                max = count;
            } else if (count > secMax && count < max) {
                secMax = count;
            }
        }
        for (Map.Entry<Character, Integer> entry : hm.entrySet()) {
            if (entry.getValue() == secMax) {
                System.out.println("The 2nd most repeated character : "+entry.getKey());
                break;
            }
        }
    }
}
