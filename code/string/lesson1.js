/**
 * created by sowtf on 2019/7/18
 * 字符串反转
 */
export default (str) => {
  return str.split(' ').map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
