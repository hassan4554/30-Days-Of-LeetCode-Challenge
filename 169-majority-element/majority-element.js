/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let maxNum = nums[0];
    let maxFreq = 0;

    for (const [key, value] of Object.entries(nums.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {}))) {
        if (value > maxFreq) {
            maxFreq = value
            maxNum = key
        }
    }

    if (maxFreq > (nums.length / 2)) return Number(maxNum);
    else return null;
};