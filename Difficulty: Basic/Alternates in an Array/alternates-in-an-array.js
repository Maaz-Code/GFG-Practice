/**
 * @param {number[]} arr
 */

class Solution {
    getAlternates(arr) {
        let alt = [];
        let i = 0;
        while(i < arr.length){
            alt.push(arr[i]);
            i = i + 2;
        }
        return alt;
    }
}