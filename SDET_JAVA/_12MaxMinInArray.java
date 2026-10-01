package SDET;

import java.util.Scanner;

public class _12MaxMinInArray {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of elements in array ");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int arr[] = new int[tolNum];

        System.out.println("Please enter elements of array");
        for (int i = 0; i < tolNum; i++) {
            arr[i] = sc.nextInt();
        }
        int max=arr[0];
        int min=arr[0];
        for(int i=0;i<tolNum;i++){
            if(arr[i]<min){
                min=arr[i];
            }
            if(arr[i]>max){
                max=arr[i];
            }
        }
        System.out.println(" The max is : "+max+"The min is : "+min);
    }
}
