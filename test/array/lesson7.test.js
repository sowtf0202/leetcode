/**
 * created by sowtf on 2020/6/30
 */
import movesToMakeZigzag  from '../../code/array/lesson7'

test('zigzag1', () => {
    expect(movesToMakeZigzag([1, 2, 3])).toEqual(2)
})
test('zigzag2', () => {
    expect(movesToMakeZigzag([9, 6, 1, 6, 2])).toEqual(4)
})
test('zigzag3', () => {
    expect(movesToMakeZigzag([1, 1, 3])).toEqual(1)
})
test('zigzag4', () => {
    expect(movesToMakeZigzag([7,4,8,9,7,7,5])).toEqual(6)
})
