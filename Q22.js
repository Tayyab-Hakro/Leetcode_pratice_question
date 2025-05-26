/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = 0 
    for(let i = 0 ; i<nums.length ; i++){
        sum +=nums[i]
    }
        let reminder = sum % k
        if(reminder === 0){
            return 0
        }
         return reminder
    }


console.log(minOperations([3,9,7] , 5))