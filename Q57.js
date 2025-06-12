function totalSubarraySum(nums) {
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    let start = Math.max(0, i - nums[i]);
    for (let j = start; j <= i; j++) {
      total += nums[j];
    }
  }

  return total;
}

// Example usage:
const nums = [1, 2, 3];
console.log(totalSubarraySum(nums)); // Output: 10
