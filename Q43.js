function numberOfPairs(nums) {
  const freq = {};
  let pairs = 0;
  let leftovers = 0;

  // Count frequency of each number
  for (let num of nums) {
    freq[num] = (freq[num] || 0) + 1;
  }

  // Calculate pairs and leftovers
  for (let key in freq) {
    pairs += Math.floor(freq[key] / 2); // har 2 same numbers ka 1 pair
    leftovers += freq[key] % 2; // agar ek extra bacha toh leftover
  }

  return [pairs, leftovers];
}

// Example usage:
const nums = [1, 2, 3, 1, 2, 1, 1];
console.log(numberOfPairs(nums)); // Output: [2, 3]
