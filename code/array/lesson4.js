/**
 * created by sowtf on 2019/7/23
 * 格雷编码
 * n = 1 =>  ['0','1']
 * n = 2 => ['00','01','11','10']
 * n = 3 => ['000','001','011','010','110','111','101','100']
 */
export default (n) => {
  // 递归函数,用来计算输入为 n 的格雷编码
  let make = (n) => {
    // 如果输入 n 为1直接返回['0','1']
    if (n === 1) {
      return ['0', '1']
    } else {
      // 递归 求出上一个的格雷编码
      let prev = make(n - 1)
      let result = []
      // max为计算所的格雷编码的数组最后一个元素的下标
      // 格雷编码的数量为2的 n 次方
      // 数组最后一个元素的下标为数组长度-1
      let max = Math.pow(2, n) - 1
      // 循环上一个数的格雷编码,生成当前数字的格雷编码
      for (let i = 0, len = prev.length; i < len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      return result
    }
  }
  return make(n)
}
