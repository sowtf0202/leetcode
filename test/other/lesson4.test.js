/**
 * created by sowtf on 2020/6/15
 */
import removeDuplicates from '../../code/other/lesson3'

test('removeDuplicates1', () => {
    expect(removeDuplicates([1,1,2])).toEqual(2)
})
test('removeDuplicates2', () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5)
})
