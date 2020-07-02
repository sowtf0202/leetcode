/**
 * created by sowtf on 2020/7/1
 */
export default (A, m, B, n) => {
    let index1 = m - 1, index2 = n - 1, tail = m + n - 1
    while (index2 >= 0) {
        if (A[index1] > B[index2]) {
            A[tail] = A[index1]
            index1--
            tail--
        } else {
            A[tail] = B[index2]
            index2--
            tail--
        }
    }
    return A
}
