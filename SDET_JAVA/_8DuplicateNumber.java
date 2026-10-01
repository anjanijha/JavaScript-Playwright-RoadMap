package SDET;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class _8DuplicateNumber {
    public static void main(String[] args) {
        System.out.println("Please enter the total number");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int arr[] = new int[tolNum];
        System.out.println("Please enter the array numbers");
        for (int i = 0; i < tolNum; i++) {
            arr[i] = sc.nextInt();
        }
/*        for (int i = 0; i < tolNum; i++) {
            for (int j = i + 1; j < tolNum; j++) {
                if (arr[i] == arr[j]) {
                    System.out.println("The duplicate elements : " + arr[i]);
                }
            }
        }*/
        Set<Integer> numbers= new HashSet<>();
        for(int num:arr){
            if(!numbers.add(num)){
                System.out.println(" The duplicate number is "+num);
            }
        }
    }
}
