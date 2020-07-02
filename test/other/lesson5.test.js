/**
 * created by sowtf on 2020/6/22
 */
import myAtoi from '../../code/other/lesson5'

test('string to int1', () => {
    expect(myAtoi('42')).toEqual(42)
})
test('string to int 2', () => {
    expect(myAtoi('      -42')).toEqual(-42)
})
test('string to int 3', () => {
    expect(myAtoi('4193 with words')).toEqual(4193)
})
test('string to int 4', () => {
    expect(myAtoi('words and 987')).toEqual(0)
})
test('string to int 5', () => {
    expect(myAtoi('-91283472332')).toEqual(-2147483648)
})
