/**
 * created by sowtf on 2020/5/8
 */
import reverse from '../../code/other/lesson1'

test('reverse1', () => {
    expect(reverse(123)).toEqual(321)
})
test('reverse2', () => {
    expect(reverse(-123)).toEqual(-321)
})
test('reverse3', () => {
    expect(reverse(120)).toEqual(21)
})
test('reverse4', () => {
    expect(reverse(1534236469)).toEqual(0)
})
