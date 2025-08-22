/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const magazineMap = new Map()
    for (let ch of magazine) {
        magazineMap.set(ch, (magazineMap.get(ch) || 0) + 1)
    }

    for (let ch of ransomNote) {
        if (magazineMap.has(ch)) {
            magazineMap.set(ch, magazineMap.get(ch) - 1)
            if(magazineMap.get(ch) <= 0) magazineMap.delete(ch)
        }
        else return false;
    }
    return true;
};