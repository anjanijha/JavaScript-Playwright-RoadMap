package SDET;
import java.util.Scanner;
public class _11ReverseSentence {
    public static void main(String[] args) {
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int i = 0;
        int j = str.length() - 1;
        char[] chars = str.toCharArray();
        for (int k = 0; k < str.length() - 1; k++) {
            if (chars[k] == ' ') {
                reverseString(chars, i, k - 1);
                i = k + 1;
            }
        }
        String revStrWord = reverseString(chars, i, j);
        System.out.println("The reversed word in string is: " + revStrWord);
    }
    public static String reverseString(char[] ch, int i, int j) {
        while (i < j) {
            char temp = ch[i];
            ch[i] = ch[j];
            ch[j] = temp;
            i++;
            j--;
        }
        return String.valueOf(ch);
    }
}
