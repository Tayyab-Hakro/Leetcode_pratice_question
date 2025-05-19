/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
let first = nums.filter((item) => item < 0).length
let second = nums.filter((item) => item >= 1).length
return Math.max(first , second)
};

    
console.log(maximumCount([-2,-1,-1,1,2,3]))
console.log(maximumCount( [-3,-2,-1,0,0,1,2]))
console.log(maximumCount([5,20,66,1314]))