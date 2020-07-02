/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
/**
 * @param {number} x
 * @return {number}
 * https://leetcode-cn.com/problems/reverse-integer/
 */

export default (x) => {
    if (x === 0) {
        return 0
    }
    const f = x > 0 ? true : false
    let str = String(Math.abs(x))
    const len = str.length
    let arr
    if (str[len -1] === '0') {
        str = str.substr(0, len - 1)
    }
    arr = str.split('')
    str = arr.reverse().join('')
    const result = f ? Number(str) : 0 - Number(str)
    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31) || x === 0) {
        return 0
    } else {
        return result
    }
}
