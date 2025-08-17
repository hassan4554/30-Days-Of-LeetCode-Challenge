/**
 * @param {number} n
 * @return {number}
 */
// const map = new Map()
const waysToClimb = (n, arr) => {
    if(arr[n-1] !== -1) return arr[n-1]
    arr[n-1]=waysToClimb(n - 1, arr) + waysToClimb(n - 2, arr)
    return arr[n-1]
    // if (map.has(n)) return map.get(n)
    // map.set(n, waysToClimb(n - 1) + waysToClimb(n - 2))
    // return map.get(n);
}
var climbStairs = function (n) {
    const arr = new Array(n).fill(-1)
    arr[0]=1
    arr[1]=2
    // map.set(1, 1)
    // map.set(2, 2)
    const ways = waysToClimb(n, arr)
    return ways;
};