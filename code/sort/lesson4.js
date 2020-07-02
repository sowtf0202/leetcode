/**
 * created by sowtf on 2020/6/28
 * https://leetcode-cn.com/problems/first-missing-positive/
 */
export default arr => {
    arr = arr.filter(item => item > 0)
    if (!arr.length) return 1
    arr.sort((a, b) => a - b)
    if (arr[0] !== 1) return 1
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        if (arr[i + 1] - arr[i] > 1) return arr[i] + 1
    }
    return arr.pop() + 1
}
