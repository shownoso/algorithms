/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = - Math.pow(2, 31);
  let rev = 0;
  while (x != 0) {
      //不断取余数 按顺序重排余数
      let pop = x % 10;
      x = (x - pop) / 10;
      if (rev > (MAX_VALUE - pop)/10) return 0;
      if (rev < (MIN_VALUE - pop)/10) return 0;
      rev = rev * 10 + pop;
  }
  return rev;

};
// @lc code=end

