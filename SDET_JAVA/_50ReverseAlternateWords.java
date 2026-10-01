package SDET;

import java.util.Scanner;

public class _50ReverseAlternateWords {
    //Alternative String reverse
    public static void main(String[] args) {
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String[] words = str.split(" ");
        for (int i = 0; i < words.length; i += 2) {
            words[i] = reverse(words[i]);
        }
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            sb.append(word).append(" ");
        }
        String result = sb.toString().trim();
        System.out.println(result);
    }
    private static String reverse(String str) {
        String revStr = "";
        for(int i=str.length()-1;i>=0;i--) {
            revStr = revStr + str.charAt(i);
        }
        return revStr;
    }
}
