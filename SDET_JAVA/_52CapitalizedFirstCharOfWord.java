package SDET;

import java.util.Scanner;

public class _52CapitalizedFirstCharOfWord {
    public static void main(String[] args) {
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char[] chars = str.toCharArray();
        for (int i = 0; i < chars.length; i++) {
            chars[0] = Character.toUpperCase(chars[0]);
            if (chars[i] == ' ') {
                chars[i + 1] = Character.toUpperCase(chars[i + 1]);
            }
        }
        String capitalizedString = String.valueOf(chars);
        System.out.println("After capitalizing the first letter: " + capitalizedString);
    }
}
