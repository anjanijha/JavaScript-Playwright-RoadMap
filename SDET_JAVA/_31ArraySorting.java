package SDET;

import java.util.Scanner;

public class _31ArraySorting {
    public static void main(String [] args){
        System.out.println("Please enter the total number of elements :");
        Scanner sc = new Scanner(System.in);
        int num=sc.nextInt();
        int arr[]= new int[num];
        System.out.println("Please enter the array elements :");
        for(int i=0;i<num;i++){
            arr[i]= sc.nextInt();
        }
        for(int i=0;i<num;i++){
            for(int j=i+1;j<num;j++){
                if(arr[j]<arr[i]){
                    int temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
                }
            }
        }
        for(int i =0;i<num;i++){
            System.out.print(arr[i] +" ");
        }

    }
}
