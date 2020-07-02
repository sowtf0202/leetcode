/**
 * created by sowtf on 2020/4/12
 */
// export default (arr,k) => {
//     arr.sort((a,b)=>b-a)
//     return arr[k-1]
// }
export default (arr, k) => {
    let len = arr.length - 1
    for (let i = len, tmp; i > len - k; i--) {
        for (let j = 0; j < i; j++) {
            tmp = arr[j]
            if (arr[j] > arr[j + 1]) {
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
    }
    return arr[len-(k-1)]
}
