/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let setted = new Set()
    for(let [key ,value] of nums){
        for(let i = key ; i<=value ;i++ ){
            setted.add(i)
        }
    }
    return setted.size
};
console.log(numberOfPoints([[3,6],[1,5],[4,7]]))