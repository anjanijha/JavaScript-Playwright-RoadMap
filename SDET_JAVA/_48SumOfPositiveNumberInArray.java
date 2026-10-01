package SDET;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
public class _48SumOfPositiveNumberInArray {
    public static void main(String[] args) {
        System.out.println("Please enter thr number");
        Scanner sc = new Scanner(System.in);
        int totalNum = sc.nextInt();
        int sum = 0;
        Integer arr[] = new Integer[totalNum];
        System.out.println("Please enter the array numbers");
        for (int i = 0; i < totalNum; i++) {
            arr[i] = sc.nextInt();
        }
        for (int num : arr) {
            if (num > 0) {
                sum = sum + num;
            }
        }
        System.out.println("The sum of positive number in array ==> " + sum);
        //====================Sum of +ve number in a List====================================
        List<Integer> listOfNums = Arrays.asList(arr);
        int sumOfList = 0;
        for (int i = 0; i < listOfNums.size(); i++) {
            if (listOfNums.get(i) > 0) {
                sumOfList = sumOfList + listOfNums.get(i);
            }
        }
        System.out.println("The sum of positive number in List ==> " + sumOfList);
    }
}

