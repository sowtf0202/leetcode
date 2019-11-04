/**
 * created by sowtf on 2019/7/23
 * 种花问题
 * [0,0,1,0,0,0,1,0,1,0,1,0,0,1]
 * 相邻位置不能种花
 * 0表示空地,1表示花
 */
export default (arr, n) => {
  let max = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      // 第一位和第二位都为0或者只存在一个0
      if ((i === 0 && arr[1] === 0) || (i === 0 && len === 1)) {
        // 计数累加
        max++
        // 直接跳过下一个索引
        i++
        // 当前索引左右两侧都为0
      } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
        max++
        i++
        // 当前索引为数组最后一个元素,且前一个为0
      } else if (i === len - 1 && arr[i - 1] === 0) {
        max++
        i++
      }
    }
  }
  return max >= n
}
