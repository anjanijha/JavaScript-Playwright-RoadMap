package SDET;
import java.util.Scanner;

public class _24CheckBinary {
    public static void main(String args[])
    {
        System.out.println("Please Enter the number");
        Scanner sc = new Scanner(System.in);
        int num= sc.nextInt();
        boolean flag = true;
        if(num==0||num==1||num<0){
            flag=false;
        }
        while(num!=0){
            if(num%10>1){
                flag=false;
                break;
            }
            num=num/10;
        }
        if(flag){
            System.out.println(+num+" : is binary number");
        }
        else{
            System.out.println(+num+" : is not binary number");
        }
    }
}
