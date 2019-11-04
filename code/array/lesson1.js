/**
 * created by sowtf on 2019/7/18
 * 电话号码组合
 */
export default (str) => {
  let code = []
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let num = str.split('')
  num.forEach(item => {
    if (map[item]) {
      code.push(map[item])
    }
  })
  let comb = (arr) => {
    let temp = []
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
      comb(arr)
    } else {
      return temp
    }
    return arr[0]
  }
  return comb(code)
}
