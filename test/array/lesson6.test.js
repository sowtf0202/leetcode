/**
 * created by sowtf on 2020/6/30
 */
import findMinFibonacciNumbers from '../../code/array/lesson6'

test('fib1', () => {
    expect(findMinFibonacciNumbers(7)).toEqual(2)
})
test('fib2', () => {
    expect(findMinFibonacciNumbers(10)).toEqual(2)
})
test('fib3', () => {
    expect(findMinFibonacciNumbers(19)).toEqual(3)
})
