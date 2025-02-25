//{ Driver Code Starts
import java.io.*;
import java.util.*;

class Geeks {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine()); // Number of test cases
        for (int g = 0; g < t; g++) {
            String[] str =
                (br.readLine()).trim().split(" "); // Reading input as a string array
            int arr[] = new int[str.length]; // Creating integer array from the input
            for (int i = 0; i < str.length; i++) {
                arr[i] = Integer.parseInt(str[i]);
            }

            // Getting the result from the Solution class
            List<Integer> result = new Solution().frequencyCount(arr);

            // Printing the result in the required format
            if (result.isEmpty()) {
                System.out.println("[]");
            } else {
                for (int i = 0; i < result.size(); i++) {
                    if (i != 0) System.out.print(" ");
                    System.out.print(result.get(i));
                }
                System.out.println();
            }
        }
    }
}

// } Driver Code Ends


class Solution {
    // Function to count the frequency of all elements from 1 to N in the array.
    
    //O(n^2) Time Complexity:
    // List<Integer> answer = new ArrayList<>();
        // for(int i = 1; i <= arr.length; i++){
        //     int count = 0;
        //     for(int j = 0; j < arr.length; j++){
        //         if(arr[j] == i){
        //             count += 1;
        //         }
        //     }
        //     answer.add(count);
        // }
        // return answer;
        
    public List<Integer> frequencyCount(int[] arr) {
        HashMap<Integer, Integer> map = new HashMap<>();
        
        for(int i = 0; i < arr.length; i++){
            map.put(arr[i], map.getOrDefault(arr[i],0)+1);
        }
        
        for(int i = 1; i <= arr.length; i++){
            map.put(i, map.getOrDefault(i,0));
        }
        
        List<Integer> answer = new ArrayList<>(map.values());
        return answer;
    }
    
    // Best answer without Hashmap and ensures order:
    // public List<Integer> frequencyCount(int[] arr) {
    // int N = arr.length;
    // int[] freq = new int[N];  // Frequency array of size N

    // // Count occurrences
    // for(int num : arr) {
    //     if(num >= 1 && num <= N) {  // Ignore out-of-range numbers
    //         freq[num - 1]++;
    //     }
    // }

    // // Convert to List<Integer>
    // List<Integer> answer = new ArrayList<>();
    // for(int count : freq) {
    //     answer.add(count);
    // }

    // return answer;
    //}

}
