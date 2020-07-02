/**
 * created by sowtf on 2020/4/12
 */
export default (arr) => {
    let len = arr.length - 1
    if (len < 1) {
        return 0
    }
    let space, max = 0
    for (let i = len, tmp; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
            }
        }
        if (i < len) {
            space = arr[i + 1] - arr[i]
            if (space > max) {
                max = space
            }
        }
    }
    return Math.max(max, arr[1] - arr[0])
}
