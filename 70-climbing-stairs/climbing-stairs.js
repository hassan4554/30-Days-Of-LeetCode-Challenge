/**
 * @param {number} n
 * @return {number}
 */
const map = new Map()
const waysToClimb = (n) => {
    if (map.has(n)) return map.get(n)
    map.set(n, waysToClimb(n - 1) + waysToClimb(n - 2))
    return map.get(n);
}
var climbStairs = function (n) {
    map.set(1, 1)
    map.set(2, 2)
    const ways = waysToClimb(n)
    return ways;
};