package SDET;

import java.util.Scanner;

public class _33SeachingFromThreeArray {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Please enter the total number of elements of 1st array :");
        int num1 = sc.nextInt();
        int arr1[] = new int[num1];
        System.out.println("Please enter the total number of elements of 2nd array :");
        int num2 = sc.nextInt();
        int arr2[] = new int[num2];
        System.out.println("Please enter the total number of elements of 3rd array :");
        int num3 = sc.nextInt();
        int arr3[] = new int[num3];

        System.out.println("Please enter the 1st array elements :");
        for (int i = 0; i < num1; i++) {
            arr1[i] = sc.nextInt();
        }
        System.out.println("Please enter the 2nd array elements :");
        for (int i = 0; i < num2; i++) {
            arr2[i] = sc.nextInt();
        }
        System.out.println("Please enter the 3rd array elements :");
        for (int i = 0; i < num3; i++) {
            arr3[i] = sc.nextInt();
        }
        for (int i = 0; i < num1; i++) {
            for (int j = 0; j < num2; j++) {
                for (int k = 0; k < num3; k++) {
                    if(arr1[i]==arr2[j]&&arr2[j]==arr3[k]){
                        System.out.println(" The common element is  : "+arr1[i]);
                    }
                }
            }
        }
    }
}
