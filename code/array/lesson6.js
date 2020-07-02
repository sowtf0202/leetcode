/**
 * created by sowtf on 2020/6/30
 * https://leetcode-cn.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/
 */
export default k => {
    let fibonacci = []
    fibonacci[0] = 1
    fibonacci[1] = 1
    let i = 2
    // create fibonacci sequence
    while (true) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
        if (fibonacci[i] >= k) {
            break
        }
        i++
    }
    let num = 1
    for(let m = fibonacci.length - 1; m >=0; m--){
        if(fibonacci[m] === k){
            return num
        }else if(k > fibonacci[m]){
            k -= fibonacci[m]
            num++
        }
    }
}
