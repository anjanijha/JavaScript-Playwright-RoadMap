package SDET;
import java.util.Scanner;

public class _47ReverseStringPreserveSpacePosition {
    public static void main(String[] args) {
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int i = 0;
        int j = str.length() - 1;
        char[] ch = str.toCharArray();
        while (i < j) {
            if (ch[i] == ' ') {
                i++;
            } else if (ch[j] == ' ') {
                j--;
            } else {
                char temp = ch[i];
                ch[i] = ch[j];
                ch[j] = temp;
                i++;
                j--;
            }
        }
        System.out.println("The reverse String is :" + String.valueOf(ch));
    }
}