package SDET;


import java.util.*;

public class Task2 {
    public static void main(String[] args) {
        System.out.println("Please enter the total number of array");
        Scanner sc = new Scanner(System.in);
        int tolNum = sc.nextInt();
        System.out.println("Please enter the element of array");
        int arr[] = new int[tolNum];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = sc.nextInt();
        }
        Map<Integer, Integer> hm = new HashMap<>();
        for (int num : arr) {
            if (hm.containsKey(num)) {
                hm.put(num, hm.get(num) + 1);
            } else {
                hm.put(num, 1);
            }
        }
/*        Map<Integer, Integer> newHm = new HashMap<>();
        int deleteCount = 0;
        Set<Integer> keys = hm.keySet();
        for (Integer key : keys) {
            int value = hm.get(key);
            if (newHm.containsKey(value)) {
                while (value != 0 && newHm.containsKey(value)) {
                    --value;
                    deleteCount++;
                }
                if (value != 0) {
                    newHm.put(value, 1);
                }
            } else {
                newHm.put(value, 1);
            }
        }*/
       Set<Integer> set = new HashSet<>();
        int deleteCount=0;
        Set<Integer> keys = hm.keySet();
        for(int num: keys){
            int value=hm.get(num);
            if(set.contains(value)){
                while(value!=0 && set.contains(value)){
                    --value;
                    deleteCount++;
                }
                if(value!=0){
                    set.add(value);
                }
            }
            else {
                set.add(value);
            }
        }

        System.out.println("deleted count ====" + deleteCount);

    }
}
