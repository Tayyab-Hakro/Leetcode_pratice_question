function pivotIndex(nums) {
  // Step 1: Total sum of all elements
  let totalSum = nums.reduce((a, b) => a + b, 0);
  // totalSum = 1 + 7 + 3 + 6 + 5 + 6 = 28 (for example)

  // Step 2: Start with 0 leftSum
  let leftSum = 0;

  // Step 3: Loop through array to find pivot
  for (let i = 0; i < nums.length; i++) {
    // Step 4: Calculate right sum without slicing
    // Right sum = totalSum - leftSum - current element
    let rightSum = totalSum - leftSum - nums[i];

    // Step 5: Check if leftSum equals rightSum
    if (leftSum === rightSum) {
      return i; // Found the pivot index
    }

    // Step 6: Update leftSum for next iteration
    leftSum += nums[i];
  }

  // Step 7: If no pivot index found
  return -1;
}
