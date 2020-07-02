/**
 * created by sowtf on 2020/5/8
 * 回文数
 * https://leetcode-cn.com/problems/palindrome-number/
 */
export default (x) => {
    if (x < 0) {
        return false
    }
    let len = String(x).length
    let middle = Math.floor(len / 2)
    let arr = String(x).split('')
    let arr1, arr2
    arr1 = arr.slice(0, len % 2 === 0 ? middle : middle + 1)
    arr2 = arr.slice(middle)
    let str1, str2
    str1 = arr1.join('')
    str2 = arr2.reverse().join('')
    return str1 === str2
}

