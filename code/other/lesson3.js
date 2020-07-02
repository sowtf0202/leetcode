/**
 * created by sowtf on 2020/6/15
 * https://leetcode-cn.com/problems/roman-to-integer/
 */
export default (str) => {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    const len = str.length
    let current, next,sum = 0
    for (let i = 0; i < len; i++){
        current = romanMap[str[i]]
        next = romanMap[str[i+1]] || 0
        if (current < next) {
            sum -= current
        } else {
            sum += current
        }
    }
    return sum
}
