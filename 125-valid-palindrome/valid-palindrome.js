/**
 * @param {string} s
 * @return {boolean}
 */
const isAlphanumeric = (char) => {
    return /^[a-z0-9]$/i.test(char);
}

var isPalindrome = function (s) {
    s = s.toLowerCase()
    let newString = []
    for (let i = 0; i < s.length; i++) {
        if (isAlphanumeric(s[i])) newString.push(s[i])
    }
    return newString.join("") === newString.reverse().join("");
};