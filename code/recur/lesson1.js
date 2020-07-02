/**
 * created by sowtf on 2020/6/29
 */
export default str => {
    let arr = []
    if (str.length > 12 || str.length < 4) return arr
    let search = (cur, sub) => {
        if (cur.length === 4 && cur.join('') === str) {
            arr.push(cur.join('.'))
        } else {
            for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
                temp = sub.substr(0, i + 1)
                if (temp < 256) {
                    if (temp.length > 1 && temp[0] === '0') {
                        break
                    } else {
                        search(cur.concat([temp]), sub.substr(i + 1))
                    }
                }
            }
        }
    }
    search([], str)
    return arr
}
