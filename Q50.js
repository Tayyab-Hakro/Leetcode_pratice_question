/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
let freq = {}
let res = []
for(let char of grid){
    freq[char] = (freq[char] || 0)+1
}
for(let [key, values] of Object.entries(freq)){
 if(values > 1){
    res.push(parseInt(key))
 }
}
return res
}
;
console.log(findMissingAndRepeatedValues([1,2,3,4,4,5]))