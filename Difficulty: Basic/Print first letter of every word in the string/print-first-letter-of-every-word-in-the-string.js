// User function Template for javascript

/**
 * @param {string} str
 * @returns {str}
 */

class Solution {
    firstAlphabet(str) {
        let final = '';
        let arr = str.split(' ');
        for(let word of arr){
            if(word.length > 0){
                final += word.charAt(0);
            }
        }
        return final;
    }
}
