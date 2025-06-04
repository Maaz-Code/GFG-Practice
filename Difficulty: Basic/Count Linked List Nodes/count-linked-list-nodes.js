/**
 * @param {Node} head
 * @returns {number}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    // Function to count nodes of a linked list.
    getCount(head) {
        let count = 0;
        let curr = head;
        
        while(curr !== null){
            count++;
            curr = curr.next;
        }
        
        return count;
    }
}