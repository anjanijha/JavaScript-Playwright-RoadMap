package SDET;

import java.util.Scanner;

public class _46StringSorting {
    public static void main(String[] args) {
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        char ch[] = str.toCharArray();
        for (int i = 0; i < str.length(); i++) {
            for (int j = i + 1; j < str.length(); j++) {
                if (ch[i] >ch[j]) {
                    char temp = ch[i];
                    ch[i] = ch[j];
                    ch[j] = temp;
                }

            }
        }
        System.out.println("The reverse String is :" + String.valueOf(ch));
    }
}