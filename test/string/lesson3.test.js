/**
 * created by sowtf on 2020/6/14
 */
import lengthOfLongestSubstring from '../../code/string/lesson3'
test('maxstr', () =>{
    expect(lengthOfLongestSubstring('abcabcbb')).toEqual(3)
    expect(lengthOfLongestSubstring('bbbbb')).toEqual(1)
    expect(lengthOfLongestSubstring('pwwkew')).toEqual(3)
    expect(lengthOfLongestSubstring('')).toEqual(0)
    expect(lengthOfLongestSubstring(' ')).toEqual(1)
    expect(lengthOfLongestSubstring("nfpdmpi")).toEqual(5)
})
