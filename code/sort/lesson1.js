/**
 * created by sowtf on 2020/4/6
 */
export default (arr) => {
    arr.sort((a, b) => a - b)
    let r = []
    let odd = 1, even = 0
    arr.forEach(item => {
        if (item % 2 === 1) {
            r[odd] = item
            odd += 2
        } else {
            r[even] = item
            even += 2
        }
    })
    return r
}
