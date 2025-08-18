/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    if (s.length === 1) return 1;
    let map = new Map()
    let count = 0;
    let hasOdd = false;

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }

    for (let value of map.values()) {
        if (value % 2 === 0) count += value
        else {
            count += value - 1
            hasOdd = true
        }
    }

    if (hasOdd) count++
    return count;
};