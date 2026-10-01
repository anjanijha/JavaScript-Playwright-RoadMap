package SDET;
import java.util.Scanner;
public class _6ReverseInteger {
    public static void main(String[] args) {
        System.out.println("Please enter thr number");
        Scanner sc = new Scanner(System.in);
        int inputNum = sc.nextInt();
        int num = sc.nextInt();
        int revNum = 0;
        while (inputNum > 0) {
            revNum = revNum * 10 + inputNum % 10;
            inputNum = inputNum / 10;
        }
        System.out.println("The reverse number is without recursion:" + revNum);
        System.out.print("Reversed Number using Recursion: ");
        Reverse(num);
    }
    public static void Reverse(int num) {
        if (num < 10) {
            System.out.println( num);
            return;
        } else {
            System.out.print( num % 10);
            Reverse(num / 10);
        }
    }
}
