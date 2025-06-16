/**
 * @param {number[]} arr
 * @return {number}
 */
class Solution {
    product(arr) {
        let mod = 1000000007;
        let prod = 1;
        for(let i = 0; i < arr.length; i++){
            prod = (prod * arr[i]) % mod;
        }
        return prod;
    }
}