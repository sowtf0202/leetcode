/**
 * created by sowtf on 2020/6/30
 * https://leetcode-cn.com/problems/decrease-elements-to-make-array-zigzag/
 */
/**
 * 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] >  A[5] < A[6]
 * 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < A[5] > A[6]
*         A[0] > A[1] < A[2] > A[3] < A[4] >  A[5] < A[6]
 * A[0] < A[1] > A[2] < A[3] > A[4] < A[5] >  A[6]
 * 可以看出规律:两种情况分别从0和从1开始对比,符号都是一样的,那么只需要每次循环后+2,然后对比当前数字跟左右两边大小比较,
 * 如果不符合条件则算出两个数的差值,然后+1(+1是因为相等也不符合条件,必须比左右两边的数字都大)就是需要操作的次数
 * 另外就是数组极左和极右两种边界条件的对比
 * */
export default nums => {
    const getCount = (arr, start, count) => {
        let len = arr.length
        let distance = 0
        for (let i = start; i < len; i += 2) {
            if (i - 1 >= 0 && arr[i] <= arr[i - 1]) {
                // 判断当前数字是否比左边的小
                distance = arr[i - 1] - arr[i] + 1
                count += distance
                arr[i - 1] -= distance
            }
            if (i + 1 < len && arr[i] <= arr[i + 1]) {
                // 判断当前数字是否比右边小
                distance = arr[i + 1] - arr[i] + 1
                count += distance
                arr[i + 1] -= distance
            }
        }
        return count
    }
    const evenCount = getCount([...nums], 0, 0)
    const oddCount = getCount([...nums], 1, 0)
    return Math.min(evenCount, oddCount)
}
