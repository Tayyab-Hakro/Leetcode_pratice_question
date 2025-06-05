function answerQueries(nums, queries) {
  nums.sort((a, b) => a - b); // sort to pick smallest first
  const result = [];

  for (let q of queries) {
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (sum + nums[i] <= q) {
        sum += nums[i];
        count++;
      } else {
        break;
      }
    }
    result.push(count);
  }

  return result;
}
