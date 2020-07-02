/**
 * created by sowtf on 2020/6/22
 * https://leetcode-cn.com/problems/string-to-integer-atoi/
 */
export default (str) => {
    let trimStr = str.trim()
    let sign = '+'
    const regExp = /^\d+/
    if (trimStr[0] === '-' || trimStr[0] === '+') {
        sign = trimStr[0]
        trimStr = trimStr.substr(1)
    }
    let matchStr = trimStr.match(regExp)
    let result, temp
    if (matchStr) {
        temp = parseInt(`${sign}${matchStr[0]}`)
        if (temp > Math.pow(2, 31) - 1) {
            result = Math.pow(2, 31) - 1
        } else if (temp < Math.pow(-2, 31)) {
            result = Math.pow(-2, 31)
        } else  {
            result = temp
        }
    } else {
        result = 0
    }
    return result
}
