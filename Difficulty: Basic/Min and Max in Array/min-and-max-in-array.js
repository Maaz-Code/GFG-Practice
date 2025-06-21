// User function Template for javascript
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    getMinMax(arr) {
        arr.sort((a,b) => a - b);
        let min = arr[0];
        let max = arr[arr.length - 1];
        return [min, max];
    }
}