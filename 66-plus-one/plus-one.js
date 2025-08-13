/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let lastDigit = digits.length - 1;
    digits[lastDigit]++;
    let carry = Math.floor(digits[lastDigit] / 10);
    digits[lastDigit] %= 10;

    while (carry) {
        lastDigit--;
        if (lastDigit < 0) {
            digits.unshift(1);
            carry = 0;
        } else {
            digits[lastDigit] += carry;
            carry = Math.floor(digits[lastDigit] / 10);
            digits[lastDigit] %= 10;
        }
    }
    return digits;
};