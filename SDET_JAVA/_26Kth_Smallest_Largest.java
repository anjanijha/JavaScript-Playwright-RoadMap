package SDET;

import java.util.Scanner;

public class _26Kth_Smallest_Largest {
    public static void main(String[] args){
        System.out.println("Please enter the total number of array");
        Scanner sc= new Scanner(System.in);
        int tolNum=sc.nextInt();
        int [] arr= new int[tolNum];
        System.out.println("Please enter the array elements");
        for(int i=0;i<tolNum;i++){
            arr[i]=sc.nextInt();
        }
        for(int i=0;i<tolNum;i++){
            for(int j=i+1;j<tolNum;j++){
                if(arr[i]<arr[j]){
                  int temp =arr[i];
                  arr[i]=arr[j];
                  arr[j]=temp;
                }
            }
        }
        //System.out.println(arr[tolNum-1]); - Smallest
        //System.out.println(arr[tolNum-2]); - 2nd Smallest
        //System.out.println(arr[0]); -largest
        //System.out.println(arr[1]); - 2nd largest
        for(int i =0;i<tolNum;i++){
            System.out.println(arr[i]);
        }

    }
}
