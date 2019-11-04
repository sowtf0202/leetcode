/**
 * created by sowtf on 2019/11/5
 */
import twoSum from '../../code/array/lesson5'

test('getResult[0,1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})

test('getResult[0,3]', () => {
  expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3])
})

test('getResult[2,3]', () => {
  expect(twoSum([2, 7, 11, 15], 26)).toEqual([2, 3])
})

test('getResult[]', () => {
  expect(twoSum([2, 7, 11, 15], 100)).toEqual([])
})
