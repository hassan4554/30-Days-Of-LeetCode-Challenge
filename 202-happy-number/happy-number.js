/**
 * @param {number} n
 * @return {boolean}
 */
const getNextNumber = (n) => {
    let output = 0;

    while (n > 0) {
        const temp = n % 10;
        output += temp * temp;
        n = Math.floor(n / 10);
    }
    return output;
}
var isHappy = function (n) {
    if (n === 1) return true
    const set = new Set()

    while (!set.has(n)) {
        set.add(n)
        n = getNextNumber(n)
        if (n === 1) return true
    }

    return false;

};