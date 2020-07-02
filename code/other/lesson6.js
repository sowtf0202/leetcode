/**
 * created by sowtf on 2020/6/23
 * https://leetcode-cn.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
 * 这道题目起初阅读起来产生了误解,后来看评论知道子数组是arr中连续的 k 个数
 */
export default (arr, k, threshold) => {
    let sum = 0, target = threshold * k, len = arr.length, num = 0
    if (len < k) {
        return 0
    }
    // 计算长度为 k 的初始数组和,假设从arr第0位开始
    for (let i = 0; i < k; i++) {
        sum += arr[i]
    }
    if (sum >= target) {
        num++
    }
    for (let m = k; m < len; m++) {
        sum -= arr[m - k]
        sum += arr[m]
        if (sum >= target) {
            num++
        }
    }
    return num
}
