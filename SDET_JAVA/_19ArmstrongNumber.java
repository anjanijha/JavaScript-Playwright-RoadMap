package SDET;
import java.util.Scanner;

public class _19ArmstrongNumber {
    public static void main(String[] args){
        System.out.println("Please enter number");
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();
        int isArm=num;
        int numLen=String.valueOf(num).length();
        int sum=0;
        while(num>0){
            int digit=num%10;
            sum= (int) (sum+Math.pow(digit,numLen)); // python- sum=sum+digit**numLen // ty->sum=sum+Math.pow(digit,numLen);
            num=num/10;
       }
       if(isArm==sum){
           System.out.println(isArm+" : is Armstrong number");
        }
       else{
           System.out.println(isArm+" : is not Armstrong Number");
       }
    }
}
