/**
 * created by sowtf on 2020/6/14
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */
export default s => {
    let len = s.length
    let arr = []
    let max = 0
    for (let i = 0; i < len; i++) {
        if (!arr.includes(s[i])) {
            arr.push(s[i])
            max = Math.max(arr.length, max)
        } else {
            max = Math.max(arr.length, max)
            let index = arr.findIndex(item => item === s[i])
            arr.push(s[i])
            arr.splice(0, index + 1)
        }
    }
    return max
}
