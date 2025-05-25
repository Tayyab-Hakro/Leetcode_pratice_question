function checkArithmeticSubarrays(nums, l, r) {
    const result = [];

    for (let i = 0; i < l.length; i++) {
        // Get subarray from nums[l[i]] to nums[r[i]]
        const sub = nums.slice(l[i], r[i] + 1);

        // Sort the subarray
        sub.sort((a, b) => a - b);

        // Calculate common difference
        const diff = sub[1] - sub[0];
        let isArithmetic = true;

        // Check if all consecutive differences are equal
        for (let j = 1; j < sub.length; j++) {
            if (sub[j] - sub[j - 1] !== diff) {
                isArithmetic = false;
                break;
            }
        }

        result.push(isArithmetic);
    }

    return result;
}

// Example usage:
const nums = [4, 6, 5, 9, 3, 7];
const l = [0, 0, 2];
const r = [2, 3, 5];

console.log(checkArithmeticSubarrays(nums, l, r)); 
// Output: [true, false, true]
