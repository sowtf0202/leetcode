/**
 * created by sowtf on 2019/7/24
 * 重复子串
 */
export default (str) => {
  let reg = /^(\w+)\1+$/
  return reg.test(str)
}
