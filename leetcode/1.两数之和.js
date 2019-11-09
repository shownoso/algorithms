/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 将目标值(target-current)作为key，当前值(current)的下标作为value 存入map
 * 随着遍历，当map中存在一个key为当前值时，即满足条件，
 * 于是返回该key以及当前值的下标
 */
var twoSum = function(nums, target) {
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];
        var key = map[current];
        if (key !== undefined) {
            return [key, i]
        } else {
            map[target - current] = i;
        }
    }
};
// @lc code=end

