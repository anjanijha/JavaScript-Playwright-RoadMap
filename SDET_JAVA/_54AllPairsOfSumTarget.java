package SDET;
import java.util.*;
public class _54AllPairsOfSumTarget {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of Array");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        int[] arr = new int[tolNum];
        System.out.println("Please enter the  Array elements");
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        System.out.println("Please enter Target");
        int target = sc.nextInt();
         List<List<Integer>> resList = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    List<Integer> subList = Arrays.asList(arr[i], arr[j]);
                    if (!resList.contains(subList)) {
                        resList.add(subList);
                    }
                }
            }
        }
        for (List<Integer> pair : resList) {
            System.out.println(pair.get(0) + " " + pair.get(1));
        }
    }

    }
