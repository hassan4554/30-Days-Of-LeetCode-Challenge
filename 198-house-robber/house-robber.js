/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length
    if (n === 1) return nums[0]

    const arr = new Array(n).fill(0)
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])

    for (let i = 2; i < n; i++) {
        arr[i] = Math.max(arr[i - 1], nums[i] + arr[i - 2])
    }
    return arr[n - 1]
};