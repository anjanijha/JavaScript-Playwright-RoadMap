package SDET;
import java.util.Scanner;

public class _4ReverseOnlyWordInString {
public static void main(String[] args) {
    System.out.println("Please Enter the String ");
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    String[] words = str.split(" ");
    String revOnlyWord= "";
    for(int i=words.length-1;i>=0;i--)
    {
    revOnlyWord = revOnlyWord+words[i]+ " ";
    }
    System.out.println("The reverse  String is : " + revOnlyWord);

    }
    }
