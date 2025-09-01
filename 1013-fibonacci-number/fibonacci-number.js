/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (!n) return 0
    let arr = []
    arr.push(0)
    arr.push(1)

    for (let i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    return arr[arr.length - 1]
};