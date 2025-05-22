/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let res = []
    let val = items1.map((item) => item[0] === items2[0] ? item[1] += items2[1] : res.push(item))
    console.log(val)
};
console.log(mergeSimilarItems([[1,1],[4,5],[3,8]],  [[3,1],[1,5]]))