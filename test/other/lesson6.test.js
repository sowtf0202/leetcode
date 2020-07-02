/**
 * created by sowtf on 2020/6/23
 */
import numOfSubarrays from '../../code/other/lesson6'

test('numOfSubarrays1', () => {
    expect(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4)).toEqual(3)
})
test('numOfSubarrays2', () => {
    expect(numOfSubarrays([1, 1, 1, 1, 1], 1, 0)).toEqual(5)
})
test('numOfSubarrays3', () => {
    expect(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5))
    .toEqual(6)
})
test('numOfSubarrays4', () => {
    expect(numOfSubarrays([7, 7, 7, 7, 7, 7, 7], 7, 7)).toEqual(1)
})
test('numOfSubarrays5', () => {
    expect(numOfSubarrays([4, 4, 4, 4], 4, 1)).toEqual(1)
})
