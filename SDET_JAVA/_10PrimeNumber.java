package SDET;
import java.util.Scanner;
public class _10PrimeNumber {
    public static void main(String [] args){
        System.out.println("Please enter the number");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        boolean flag=false;
        if(num<=1){
            flag=false;
        }
        for(int i=2;i<=num/2;i++){
            if(num%i==0){
                flag=false;
            }
            else{
                flag=true;
            }
        }
        if(flag==true){
            System.out.println(num+": is a prime number");
        }
        else{
            System.out.println(num+": is not a prime number");
        }
    }
}
