package SDET;
import java.util.Scanner;
public class _1ReverseString {
    /*    public static void main(String [] args){
            System.out.println("Please enter thr string");
            Scanner sc= new Scanner(System.in);
            String str=sc.nextLine();
            String revStr="";
            char[] ch= str.toCharArray();
            for(int i=str.length()-1;i>=0;i--){
                revStr=revStr+ ch[i];
                //revStr=revStr+str.charAt(i);
            }
            System.out.println("The reverse string is : "+revStr);
        }*/
    public static void main(String[] args) {
        System.out.println("Please enter thr string");
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        int i = 0;
        int j = str.length() - 1;
        char ch[] = str.toCharArray();
        while (i < j) {
            char temp = ch[i];
            ch[i] = ch[j];
            ch[j] = temp;
            i++;
            j--;
        }
        System.out.println("The reverse String is :" + String.valueOf(ch));
    }
}
