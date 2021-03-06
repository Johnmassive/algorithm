/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (39.69%)
 * Likes:    347
 * Dislikes: 0
 * Total Accepted:    76.9K
 * Total Submissions: 188.2K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 * 
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 * 
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const combine = new Array()
var plusOne = function (digits) {
    var num = ++digits[digits.length - 1];
    if (num > 9) {
        combine.push(0)
        if (digits.length === 1) {
            return plusOne([0])
        }
        return plusOne(digits.splice(0, digits.length - 1))
    } else {
        let testArr = new Array().concat(combine);
        combine.length = 0;
        return digits.concat(testArr)
    }
};
// console.log(plusOne([9]));

