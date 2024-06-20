//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let str = readLine();
        let obj = new Solution();
        let res = obj.compareFrac(str);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param string str

    * @returns string
    */
    compareFrac(str) {
        const frac = str.split(", ");
        const [num1, den1] = frac[0].split("/").map(Number);
        const [num2, den2] = frac[1].split("/").map(Number);
        
        const prod1 = num1*den2;
        const prod2 = num2*den1;
        
        if(prod1 > prod2){
            return `${num1}/${den1}`;
        }
        else if(prod1 < prod2){
            return `${num2}/${den2}`;
        }
        else {
            return "equal";
        }
    }
}
