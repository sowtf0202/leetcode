/**
 * created by sowtf on 2020/6/15
 */
import romanToInt from '../../code/other/lesson3'

test('romanToInt1', () => {
    expect(romanToInt('III')).toEqual(3)
})
test('romanToInt2', () => {
    expect(romanToInt('IV')).toEqual(4)
})
test('romanToInt3', () => {
    expect(romanToInt('IX')).toEqual(9)
})
test('romanToInt4', () => {
    expect(romanToInt('LVIII')).toEqual(58)
})
test('romanToInt5', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994)
})
