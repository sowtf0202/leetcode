/**
 * created by sowtf on 2020/7/2
 */
import rob from '../../code/array/lesson9'

test('fn1',()=>{
    expect(rob([1,2,3,1])).toEqual(4)
})
test('fn2',()=>{
    expect(rob([2,7,9,3,1])).toEqual(12)
})
test('fn3',()=>{
    expect(rob([2,1,1,2])).toEqual(4)
})
