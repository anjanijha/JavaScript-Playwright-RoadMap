package SDET;

import java.util.Scanner;

public class _7MissingNumber {
    public static void main(String [] args){
        System.out.println("Please enter the total number");
        Scanner sc = new Scanner(System.in);
        int totalNum= sc.nextInt();
        int sum=0;
        int arr[] = new int[totalNum];
        System.out.println("Please enter the array numbers");
        for(int i=0;i<totalNum;i++){
            arr[i]=sc.nextInt();
        }
        for(int i=0;i<arr.length;i++){
            sum=sum+arr[i];
        }
        int missingNum=totalNum*(totalNum+1)/2-sum;
        System.out.println("The missing number is : "+missingNum);
    }
}
