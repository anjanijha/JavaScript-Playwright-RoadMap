package SDET;

import java.util.Arrays;

public class _66MoveNegAtStartMovePosAtEnd {
    public static void main(String[] args) {
        int[] arr = {2, -3, 4, -1, 6, -5, -7, 8};
        int i = 0;
        int j = arr.length - 1;
        while (i <= j) {
            if (arr[i] < 0) {
                i++;
            }
            else if (arr[j] >= 0) {
                j--;
            }
            else {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                i++;
                j--;
            }
        }
/*        for(int k=0;k<arr.length;k++){
            System.out.print(arr[k]+",");
        }*/
        System.out.println(Arrays.toString(arr));
    }
}
