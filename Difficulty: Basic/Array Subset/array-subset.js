//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function printList(res,n){
    let s="";
    for(let i=0;i<n;i++){
        s+=res[i];
        s+=" ";
    }
    console.log(s);
}


function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar1[0];
        let m = input_ar1[1];
        let a1 = new Array(n);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++){
            a1[i] = input_ar1[i];
        }
        let a2 = new Array(m);
        input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<m;i++){
            a2[i] = input_ar1[i];
        }
        let obj = new Solution();
        let res = obj.isSubset(a1, a2, n, m);
        console.log(res);
        
    }
}// } Driver Code Ends




// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} a1
 * @param {number[]} a2
 * @param {number} n
 * @param {number} m
 * @returns {string}
*/

class Solution{
    isSubset(a1, a2, n, m){
        return a2.every(item => {
        // Count how many times `item` occurs in both a1 and a2
        const countA1 = a1.filter(x => x === item).length;
        const countA2 = a2.filter(x => x === item).length;

        // Check if a1 has enough occurrences of `item` as needed by a2
        return countA1 >= countA2;
    }) ? "Yes" : "No";
    }
}


