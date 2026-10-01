package SDET;

import java.util.Arrays;

public class _41ArrayIteration {
    public static void main(String args[]) {
        int a[] = {1, 2, 3, 4, 5};
        System.out.println( " ======Method 1========================= ");
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
        System.out.println( " ======Method =2======================== ");
        for (int j : a)
            System.out.print(j + " ");
        System.out.println( " ======Method 3========================= ");
        int k= 0;
        while (k < a.length) {

            System.out.print(a[k] + " ");

            k++;
        }
        System.out.println( " ======Method 4========================= ");
        Arrays.stream(a).forEach(l -> System.out.print(l + " "));
    }
}