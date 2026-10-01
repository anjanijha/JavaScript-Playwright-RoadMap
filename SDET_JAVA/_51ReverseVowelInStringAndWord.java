package SDET;

import java.util.Scanner;

public class _51ReverseVowelInStringAndWord {
    public static void main(String[] args) {
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String words[] = str.split(" ");
        String reverseVowelWordString = "";
        String reverseVowelInWord="";
        for (String word : words) {
            reverseVowelInWord = reverseVowelInWord(word.toCharArray(), 0, word.length() - 1);
            reverseVowelWordString = reverseVowelWordString + reverseVowelInWord + " ";
        }
        System.out.println("the new String is : " + reverseVowelWordString);
    }

    static boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i'
                || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I'
                || c == 'O' || c == 'U';
    }

    public static String reverseVowelInWord(char[] ch, int i, int j) {
        while (i < j) {
            if (!isVowel(ch[i])) {
                i++;
            }
            else if (!isVowel(ch[j])) {
                j--;
            }
            else {
                char temp = ch[i];
                ch[i] = ch[j];
                ch[j] = temp;
                i++;
                j--;
            }
        }
        return String.valueOf(ch);
    }
}