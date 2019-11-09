/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // 回文是对称的，由中心向左右展开查找回文
  function findPalindrome(str, left, right) {
    while (str[left] && str[left] === str[right]) {
        left --;
        right ++;
    }
    return {
      left,
      right,
      len: right - left - 1
    }
  }

  let max = '';

  for (let i = 0; i < s.length; i++) {
      // 奇数情况 假设i就是中心 向左右两边查找
      let palindrome1 = findPalindrome(s, i, i);
      // 偶数情况 i 与 i+1是相同的字符 分别向左右两边查找
      let palindrome2 = findPalindrome(s, i, i + 1);
      let {len, left, right} = palindrome1.len > palindrome2.len ? palindrome1 : palindrome2;
      if (len >= max.length) {
        max = s.substring(left + 1, right);
      }
      
  }
  return max;


};
// @lc code=end

