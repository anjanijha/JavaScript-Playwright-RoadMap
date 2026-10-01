package SDET;
import java.util.Scanner;
public class _40JoinTwoArray {
    public static void main(String [] args){
        System.out.println("Please enter thr total number in 1st Array");
        Scanner sc = new Scanner(System.in);
        int tolArrNum1=sc.nextInt();
        System.out.println("Please enter thr total number in 2nd Array");
        int tolArrNum2= sc.nextInt();
        int[] arr1= new int[tolArrNum1];
        int[] arr2= new int[tolArrNum2];
        System.out.println("Please enter thr element of 1st array");
        for(int i=0;i<tolArrNum1;i++){
           arr1[i]=sc.nextInt();
        }
        System.out.println("Please enter thr element of 2nd array");
        for(int i=0;i<tolArrNum2;i++){
            arr2[i]=sc.nextInt();
        }
        int mergeArrayLen=arr1.length+arr2.length;
        int[] mergeArray= new int[mergeArrayLen];
        for(int i=0;i<arr1.length;i++){
            mergeArray[i]=arr1[i];
        }
        for(int i=0;i<arr2.length;i++){
            mergeArray[arr1.length+i]=arr2[i];
        }
        for(int i=0;i<mergeArrayLen;i++){
            System.out.print(mergeArray[i]+" ");
        }
    }
}
