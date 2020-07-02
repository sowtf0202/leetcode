/**
 * created by sowtf on 2020/4/6
 */
export default (arr) => {
    for (let i = 0, len = arr.length, min; i < len; i++) {
        min = arr[i]
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < min) {
                let tmp = arr[j]
                arr[j] = min
                min = tmp
            }
        }
        arr[i] = min
    }
    return arr
}
