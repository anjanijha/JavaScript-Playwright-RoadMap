package SDET;

import java.util.Scanner;

public class _29MultiplyMatrix {
    public static void main(String[] args) {
        System.out.println("Please enter number of rows in 1st Matrix");
        Scanner sc = new Scanner(System.in);
        int numRows1 = sc.nextInt();
        System.out.println("Please enter  number of Column in 1st Matrix and rows of 2nd Matrix");
        int numCol1Row2 = sc.nextInt();
        System.out.println("Please enter number of columns in 2nd Matrix");
        int numCols2 = sc.nextInt();
        int matrix1[][] = new int[numRows1][numCol1Row2];
        int matrix2[][] = new int[numCol1Row2][numCols2];
        int multiply[][] = new int[numRows1][numCols2];

        System.out.println("Please enter elements of 1st Matrix");
        for (int i = 0; i < numRows1; i++) {
            for (int j = 0; j < numCol1Row2; j++) {
                matrix1[i][j] = sc.nextInt();
            }
        }
        System.out.println("Please enter elements of 2nd Matrix");
        for (int i = 0; i < numCol1Row2; i++) {
            for (int j = 0; j < numCols2; j++) {
                matrix2[i][j] = sc.nextInt();
            }
        }

        System.out.println("First Matrix: ");
        for (int i = 0; i < numRows1; i++) {
            for (int j = 0; j < numCol1Row2; j++) {
                System.out.print(matrix1[i][j] + " ");
            }
            System.out.println("");
        }

        System.out.println("Second Matrix: ");
        for (int i = 0; i < numCol1Row2; i++) {
            for (int j = 0; j < numCols2; j++) {
                System.out.print(matrix2[i][j] + " ");
            }
            System.out.println("");
        }

        for (int i = 0; i < numRows1; i++) {
            for (int j = 0; j < numCols2; j++) {
                for (int k = 0; k < numCol1Row2; k++) {
                    multiply[i][j] = multiply[i][j] + matrix1[i][k] * matrix2[k][j];
                }
            }
        }
        System.out.println("Product of two Matrix is: ");
        for (int i = 0; i < numRows1; i++) {
            for (int j = 0; j < numCols2; j++) {
                System.out.print(multiply[i][j] + " ");
            }
            System.out.println("");
        }

    }
}
