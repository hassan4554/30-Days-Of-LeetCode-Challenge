/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let answer = "";
    let i = a.length - 1
    let j = b.length - 1
    let carry = 0;

    while (i >= 0 || j >= 0 || carry) {
        if (i >= 0) {
            carry += a[i--] - "0"
        }
        if (j >= 0) {
            carry += b[j--] - "0"
        }
        answer += (carry % 2).toString()
        carry = Math.floor(carry / 2)
    }
    return answer.split("").reverse().join("")
};