/**
 * created by sowtf on 2019/9/22
 */
// mississippi  mis*is*p*.
export default (s, p) => {
    const isMatch = (s, p) => {
        if (p.length <= 0) return !s.length
        let match = false
        if (s.length > 0 && (
                p[0] === s[0] || p[0] === '.'
            )) {
            match = true
        }
        if (p.length > 1 && p[1] === '*') {
            //第一种情况: s*匹配0个字符
            //第二种情况: s*匹配1个字符,递归下去,用来表示s*匹配多个 s
            return isMatch(s, p.slice(2)) || (
                match && isMatch(s.slice(1), p)
            )
        } else {
            return match && isMatch(s.slice(1), p.slice(1))
        }
    }
    return isMatch(s, p)
}
