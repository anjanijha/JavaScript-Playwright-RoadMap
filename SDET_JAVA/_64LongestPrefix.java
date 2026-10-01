package SDET;

public class _64LongestPrefix {
    public static void main(String[] args) {
        String[] str = {"flower", "flow", "flight"};
        System.out.println(longestCommonPrefix(str));
    }
    public static String longestCommonPrefix(String[] str) {
        if (str == null || str.length == 0)
            return "";
        return divide(str, 0, str.length - 1);
    }
    private static String divide(String[] str, int left, int right) {
        if (left == right)
            return str[left];
        int mid = (left + right) / 2;
        String leftPrefix = divide(str, left, mid);
        String rightPrefix = divide(str, mid + 1, right);

        return commonPrefix(leftPrefix, rightPrefix);
    }
    private static String commonPrefix(String s1, String s2) {
        int i = 0;
        while (i < s1.length() && i < s2.length() && s1.charAt(i) == s2.charAt(i)) {
            i++;
        }
        return s1.substring(0, i);
    }
}
