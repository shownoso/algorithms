/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 逐位相加 进位carry 本位合计 sum
 * 通过head(指针)操作linkedList
 */
var addTwoNumbers = function(l1, l2) {
    
    var linkedList = new ListNode(0);
    var head = linkedList;
    var sum = 0;
    var carry = 0;

    while(l1 !== null || l2 !== null || sum > 0) {

        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
    
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    
    return linkedList.next;
};
// @lc code=end

