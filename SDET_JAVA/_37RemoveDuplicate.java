package SDET;

import java.util.HashSet;
import java.util.Scanner;

public class _37RemoveDuplicate {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of elements in array ");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int arr[] = new int[tolNum];

        System.out.println("Please enter elements of array");
        for (int i = 0; i < tolNum; i++) {
            arr[i] = sc.nextInt();
        }
        HashSet<Integer> s = new HashSet<>();
        // To maintain the new size of the array
        int index = 0;

        for (int i = 0; i < arr.length; i++) {
            if (!s.contains(arr[i])) {
                s.add(arr[i]);
                arr[index] = arr[i];
                index++;
            }
        }
        System.out.print(s);// no need any index based approach
        for (int i = 0; i < index; i++) {
            System.out.print(arr[i]+ " ");
        }
    }
}