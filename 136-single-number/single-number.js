/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let val = 0
    for (num of nums) {
        val = val ^ num
    }
    return val
};