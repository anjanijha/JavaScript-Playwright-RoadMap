package SDET;

import java.util.Arrays;
import java.util.Scanner;

public class _61_MoveZeroAtEnd {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of Array");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int[] arr = new int[tolNum];
        System.out.println("Please enter the  Array elements");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        int pos=0;
        for(int i=0;i<arr.length;i++){
            if (arr[i] != 0) {
                int temp = arr[pos];
                arr[pos] = arr[i];
                arr[i] = temp;
                pos++;
            }
        }
            System.out.println(Arrays.toString(arr));
        }
    }
