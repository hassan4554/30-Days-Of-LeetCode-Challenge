/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i]) {
            if ((!i && !flowerbed[i + 1]) || (i === flowerbed.length - 1 && !flowerbed[i - 1])) {
                count++
                flowerbed[i] = 1
            }
            else if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
                count++
                flowerbed[i] = 1;
            }
        }
    }

    if (n <= count) return true;
    return false
};