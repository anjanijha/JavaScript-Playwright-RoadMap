package SDET;

import java.util.Scanner;

public class _42Searching {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of elements :");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int arr[] = new int[num];

        System.out.println("Please enter the array elements :");
        for (int i = 0; i < num; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Please enter the  element need to be search :");
        int search= sc.nextInt();
        for(int i=0;i<num;i++){
            if(arr[i]==search){
                System.out.println(search+" is found at index : " +i);
            }
        }
    }
}