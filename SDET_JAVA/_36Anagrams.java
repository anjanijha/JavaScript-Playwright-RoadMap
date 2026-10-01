package SDET;

import java.util.Scanner;

public class _36Anagrams {
    public static void main(String[] args) {
        System.out.println("Please enter the 1st string");
        Scanner sc = new Scanner(System.in);
        String str1 = sc.nextLine();
        System.out.println("Please enter the 2nd string");
        String str2 = sc.nextLine();
        String sortStr1 = sortString(str1);
        String sortStr2 = sortString(str2);
        if (sortStr1.equals(sortStr2)) {
            System.out.println(str1 + " is Anagram");
        } else {
            System.out.println(str1 + " is Anagram");
        }
    }

    private static String sortString(String str) {
        char[] ch = str.toCharArray();
        for (int i = 0; i < str.length(); i++) {
            for (int j = i + 1; j < str.length(); j++) {
                if (ch[i] > ch[j]) {
                    char temp = ch[i];
                    ch[i] = ch[j];
                    ch[j] = temp;
                }
            }
        }
        return String.valueOf(ch);
    }


/*
    // Function to check if two strings are anagrams
    static boolean areAnagrams(String s1, String s2) {

        // Sort both strings
        char[] s1Array = s1.toCharArray();
        char[] s2Array = s2.toCharArray();
        Arrays.sort(s1Array);
        Arrays.sort(s2Array);

        // Compare sorted strings
        return Arrays.equals(s1Array, s2Array);
    }

    public static void main(String[] args) {
        System.out.println("Please enter the 1st String");
        Scanner sc= new Scanner(System.in);
        String s1 = sc.nextLine();
        System.out.println("Please enter the 2nd String");
        String s2 = sc.nextLine();
        System.out.println(" Both the string are Anagram :"+areAnagrams(s1, s2));
    }*/
}
