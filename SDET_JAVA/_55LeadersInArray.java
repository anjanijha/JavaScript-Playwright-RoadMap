package SDET;

import java.util.Scanner;

public class _55LeadersInArray {
    public static void main(String[] args) {
        System.out.println("Please enter the total number");
        Scanner sc = new Scanner(System.in);
        int totalNum = sc.nextInt();
        int arr[] = new int[totalNum];

        System.out.println("Please enter the array numbers");

        for (int i = 0; i < totalNum ; i++) {
            arr[i] = sc.nextInt();
        }

        for (int i = 0; i < arr.length; i++) {
            int j;
            for (j = i + 1; j < arr.length; j++) {
                if (arr[i] <= arr[j])
                    break;
            }
            if (j == arr.length) // the loop didn't break
                System.out.print(arr[i] + " ");
        }
    }
}
