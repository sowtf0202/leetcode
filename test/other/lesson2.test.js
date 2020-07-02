/**
 * created by sowtf on 2020/5/8
 */
import palindrome from '../../code/other/lesson2'

test('Palindrome1', () => {
    expect(palindrome(121)).toEqual(true)
})
test('Palindrome2', () => {
    expect(palindrome(-121)).toEqual(false)
})
test('Palindrome3', () => {
    expect(palindrome(10)).toEqual(false)
})
