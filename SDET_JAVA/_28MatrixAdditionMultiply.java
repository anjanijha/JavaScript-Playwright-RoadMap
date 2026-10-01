package SDET;

import java.util.Scanner;

public class _28MatrixAdditionMultiply {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter number of rows matrix:");
        int numRows = s.nextInt();
        System.out.print("Enter number of columns matrix:");
        int numCols = s.nextInt();

        int matrix1[][] = new int[numRows][numCols];
        int matrix2[][] = new int[numRows][numCols];
        int sum[][] = new int[numRows][numCols];
        System.out.println("Enter all the elements of first matrix:");
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                matrix1[i][j] = s.nextInt();
            }
        }
        System.out.println("Enter all the elements of second matrix:");
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                matrix2[i][j] = s.nextInt();
            }
        }
        System.out.println("First Matrix:");
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                System.out.print(matrix1[i][j] + " ");
            }
            System.out.println("");
        }
        System.out.println("Second Matrix:");
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println("");
        }
        /*
        For Addition===================================================>


        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                sum[i][j] = matrix1[i][j] + matrix2[i][j];
            }
        }
        */


                /*
        For Subtraction===================================================>

         */

        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                sum[i][j] = matrix1[i][j] - matrix2[i][j];
            }
        }

        System.out.println("Matrix after addition:");
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                System.out.print(sum[i][j] + " ");
            }
            System.out.println("");
        }

    }
}

