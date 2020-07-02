/**
 * created by sowtf on 2020/7/1
 */
export default (nums) => {
    let stealMoney = (arr, start, money) => {
        for (let i = start, len = arr.length; i < len; i += 2) {
            money += arr[i]
        }
        return money
    }
    let evenStealMoney = stealMoney([...nums], 0, 0)
    let oddStealMoney = stealMoney([...nums], 1, 0)
    return Math.max(evenStealMoney, oddStealMoney)
}
