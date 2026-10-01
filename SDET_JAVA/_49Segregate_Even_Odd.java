package SDET;

import java.util.Scanner;

public class _49Segregate_Even_Odd {
    public static void main(String[] args) {
        //Two Pointer concepts
        System.out.println("Please enter the total number of elements :");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int arr[] = new int[num];
        System.out.println("Please enter the array elements :");
        for (int i = 0; i < num; i++) {
            arr[i] = sc.nextInt();
        }
        int i = 0;
        int j = arr.length - 1;
        while (i < j) {
            if (arr[i] % 2 == 0)
            {
                i++;
            }
            else if (arr[j] % 2 == 1)
            {
                j--;
            }
            else{
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
        for(int k =0;k<num;k++){
            System.out.print(arr[k] +" ");
        }
    }
}