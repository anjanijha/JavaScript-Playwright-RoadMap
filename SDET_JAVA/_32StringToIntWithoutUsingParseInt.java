package SDET;

import java.util.Scanner;

public class _32StringToIntWithoutUsingParseInt {
    public static void main(String[] args) {
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        convert(str);
    }

    public static void convert(String str) {
        int num = 0;
        int n = str.length();
        for (int i = 0; i < n; i++)
        {
            num = num * 10 + ((int) str.charAt(i) - 48);
        }
        System.out.print(num);
    }

}
