/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
function arithmeticTriplets(nums, diff) {
  const numSet = new Set(nums);
  let count = 0;

  for (let num of nums) {
    if (numSet.has(num + diff) && numSet.has(num + 2 * diff)) {
      count++;
    }
  }

  return count;
}

console.log(arithmeticTriplets([0,1,4,6,7,10],  3))