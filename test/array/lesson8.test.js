/**
 * created by sowtf on 2020/6/30
 */
import merge from '../../code/array/lesson8'

test('merge1', () => {
    expect(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
    .toEqual([1, 2, 2, 3, 5, 6])
})
test('merge2', () => {
    expect(merge([2, 0], 1, [1], 1))
    .toEqual([1, 2])
})
test('m === 0', () => {
    expect(merge([0], 0, [1], 1))
    .toEqual([1])
})
test('n === 0', () => {
    expect(merge([2], 1, [0], 0))
    .toEqual([2])
})
