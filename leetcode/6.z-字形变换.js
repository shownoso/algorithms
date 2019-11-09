/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows < 2 ) {
    return s;
  }
  let array = []; 
  let flag = 1; // 向下为1 向上为-1
  let row = 0; // 当前处理的层数 
  
  for (let i = 0; i < s.length; i++) {
      // 把第row层的都堆一起
      array[row] = (array[row] || '') + s[i];
      if (row === numRows - 1) {
          flag = -1;
      } 
      if (row === 0) {
          flag = 1;
      }
      row = row + flag;
  }
  
  return array.join('');
};
// @lc code=end

