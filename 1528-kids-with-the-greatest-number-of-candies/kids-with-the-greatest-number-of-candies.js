/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const max=Math.max(...candies)
    let result=new Array(candies.length).fill(0)

    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=max){
            result[i]=1
        }
    }

    return result;
};