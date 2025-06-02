/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let plus = 0
    let minut = 0
    for(let i = 0 ; i<nums.length ;i++){
        if(nums[i] > 0){
            plus++
        }else{
            minut++
        }
    } 
    return  plus-minut
};
console.log(returnToBoundaryCount([2,3,-5]))
console.log(returnToBoundaryCount([3,2,-3,-4]))