/**
 * created by sowtf on 2020/6/15
 */
export default (nums) => {
    let index = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[index] = nums[i]
            index++
        }
    }
    return index
}
