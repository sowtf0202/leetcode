/**
 * created by sowtf on 2020/7/1
 */
export default (g, s) => {
    let gArr = g.sort((a, b) => a - b)
    let sArr = s.sort((a, b) => a - b)
    let count = 0
    for (let i = 0, len1 = gArr.length; i < len1; i++) {
        for (let j = 0, len2 = sArr.length; j < len2; j++) {
            if (sArr[j] >= gArr[i]) {
                count++
                sArr[j] = -1
                break
            }
        }
    }
    return count
}
