package SDET;
import java.util.Scanner;
public class _3SumOfDigitInString {
    public static void main(String[] args) {
        System.out.println("Please enter the string");
        Scanner sc= new Scanner(System.in);
        String str= sc.nextLine();
        char[] chars= str.toCharArray();
        int sum=0;
        for(char ch: chars) {
            if (ch >= '1' && ch <= '9') {
                int num = Integer.parseInt(new Character(ch).toString());
                sum = sum + num;
            }
        }
        System.out.println("The sum of Digit in String is : "+sum);
    }
}
