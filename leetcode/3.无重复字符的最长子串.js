/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var left = 0;
    var right = 0;
    var map = {};
    var max = 0;
    while (right < s.length) {
        var char = s[right];
        // 如果该字符已存在，将窗口左边界拉至已存在值之后
        // tip: undefined与其他任何值进行非等比较（<,>,<=,>=,转换为NaN）返回都是false
        // 两个true: undefined === undefined  undefined == null
        left = map[char] >= left ? map[char] + 1 : left;
        // 记录当前字符所在位置
        map[char] = right;
        // 当前长度计算
        var len = right - left + 1;
        max = max > len ? max : len;
        right ++;
    }
    return max;

}
// @lc code=end

