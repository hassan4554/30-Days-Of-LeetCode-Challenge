/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        let newArr;
        if (result.length < 2) {
            newArr = new Array(i + 1).fill(1)
        } else {
            const temp = result[i - 1]
            newArr = [...result[1]]
            let k = 1;
            for (let j = 0; j < i - 1; j++) {
                newArr.splice(k, 0, (temp[j] + temp[j + 1]))
            }
        }
        result.push(newArr)
    }
    return result;
};