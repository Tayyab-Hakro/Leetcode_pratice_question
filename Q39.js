var returnToBoundaryCount = function(nums) {
    let position = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        position += nums[i]; // ant moves
        console.log(position)
        if (position === 0) {
            count++; // ant is back at boundary
        }
    }

    return count;
};
console.log(returnToBoundaryCount([2,3,-5]))
// console.log(returnToBoundaryCount([3,2,-3,-4]))