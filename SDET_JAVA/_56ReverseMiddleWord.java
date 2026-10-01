package SDET;

import java.util.Scanner;

public class _56ReverseMiddleWord {
    public static void main(String[] args) {
        System.out.println("Please enter the string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String words[] = str.split(" ");
        StringBuilder sb = new StringBuilder();
        for (String word : words) {
            String revWord = "";
            if (word.equals("Kumar")) {
                for (int j = word.length() - 1; j >= 0; j--) {
                    revWord = revWord + word.charAt(j);
                }
                sb.append(revWord).append(" ");
            } else {
                sb.append(word).append(" ");
            }
        }
        System.out.println("The reverse middle words in String :" + sb.toString());
    }
}