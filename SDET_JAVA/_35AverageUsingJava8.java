package SDET;

import java.util.Arrays;
import java.util.List;

public class _35AverageUsingJava8 {
    public static void main(String[] args) {
        //Using Java8
        List<Integer> primes = Arrays.asList(2, 3, 5, 7, 11, 13, 17, 19, 23, 29);
        int sum = primes.stream().mapToInt(a -> a).sum();
        System.out.println("Sum : " + sum);
        int min = primes.stream().mapToInt(a -> a).min().orElse(0);
        System.out.println("Min : " + min);
        int max = primes.stream().mapToInt(a -> a).max().orElse(0);
        System.out.println("Max : " + max);
        double average = primes.stream().mapToInt(a -> a).average().orElse(0);
        System.out.println("Average : " + average);
    }
}