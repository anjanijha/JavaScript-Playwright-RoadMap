package SDET;
import java.util.Scanner;
public class _43StringCompression {
    public static void main(String[] args) {
        System.out.println("Please enter the String");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String comString=compress(str);
        String comStringDigitFirst=compressDigitFirst(str);
        System.out.println("The Compresse String is :"+comString);
        System.out.println("The Compresse String is :"+comStringDigitFirst);
    }
    private static String compress(String str) {
        char[] c = str.toCharArray();
        String newStr = "";
        int count = 1;
        for (int i = 0; i < c.length - 1; i++) {
            int j = i + 1;
            if (c[i] == c[j]) {
                count++;
            } else {
                newStr = newStr + c[i] + count;
                count = 1;
            }
        }
        // this is for the last strings...
        if (count > 0) {
            newStr = newStr + c[c.length - 1] + count;
        }
        return newStr;
    }
    private static String compressDigitFirst(String str) {
        char[] c = str.toCharArray();
        String newStr = "";
        int count = 1;
        for (int i = 0; i < c.length - 1; i++) {
            int j = i + 1;
            if (c[i] == c[j]) {
                count++;
            } else {
                newStr = newStr + count+c[i] ;
                count = 1;
            }
        }
        // this is for the last strings...
        if (count > 0) {
            newStr = newStr + count+ c[c.length - 1] ;
        }

        return newStr;
    }
}