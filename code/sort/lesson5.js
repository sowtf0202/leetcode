/**
 * created by sowtf on 2020/6/28
 */
// export default arr => {
//     let quickSort = (arr) => {
//         let len = arr.length
//         if(len < 2) return arr
//         let flag = arr[0]
//         let left = []
//         let right = []
//         for(let i = 1; i < len;i++){
//             if(arr[i] < flag) {
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return quickSort(left).concat(flag, quickSort(right))
//     }
//     return quickSort(arr)
// }
export default arr => {
    let swap = (arr, i, j) => {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let findCenter = (arr, left, right) => {
        let flag = arr[left]
        let idx = left + 1
        for (let i = idx; i <= right; i++) {
            if (flag > arr[i]) {
                swap(arr, idx, i)
                idx++
            }
        }
        swap(arr, left, idx - 1)
        return idx
    }
    let quickSort = (arr, left, right) => {
        if (left < right) {
            let center = findCenter(arr, left, right)
            quickSort(arr,left, center - 1)
            quickSort(arr,center,right)
        }
    }
    quickSort(arr, 0, arr.length - 1)
    return arr
}
