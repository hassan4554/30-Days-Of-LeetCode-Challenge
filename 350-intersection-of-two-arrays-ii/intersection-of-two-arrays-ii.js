/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let answer = []
    const map1 = new Map()

    for (let num of nums1) {
        map1.set(num, (map1.get(num) || 0) + 1)
    }

    for (let num of nums2) {
        if (map1.has(num)) {
            answer.push(num)
            map1.set(num, map1.get(num) - 1)
            if (map1.get(num) < 1) map1.delete(num)
        }
    }

    return answer;

};