package SDET;

import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class _62RemoveDupNum {
    public static void main(String[] args) {
        System.out.println("Please enter the total number");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int arr[] = new int[tolNum];
        System.out.println("Please enter the array numbers");
        for (int i = 0; i < tolNum; i++) {
            arr[i] = sc.nextInt();
        }
        Set<Integer> sets= new HashSet<>();
        for(int num:arr){
            if(!sets.contains(num)){
                sets.add(num);
            }
        }
        System.out.println(" The duplicate number is "+sets);
    }
}
