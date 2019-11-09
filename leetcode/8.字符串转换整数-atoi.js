/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  const MAX_VALUE = Math.pow(2, 31) - 1;
  const MIN_VALUE = - Math.pow(2, 31);
  // 使用正则匹配需要的数值部分
  const dest = str.trim().match(/^[\+\-]?\d+/);
  if (dest) {
    // 匹配成功，转换为int并处理边界
    return Math.max(Math.min(parseInt(dest), MAX_VALUE), MIN_VALUE);
  }
  return 0;

};
// @lc code=end

