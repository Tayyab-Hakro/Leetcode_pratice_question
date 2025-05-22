/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let freq = {};

    // Count characters in s
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Subtract characters from t
    for (let char of t) {
        if (freq[char]) {
            freq[char]--;
        }
    }

    // Sum the remaining counts in freq
    let steps = 0;
    for (let key in freq) {
        steps += freq[key];
    }

    return steps;
};

console.log(minSteps("bab", "aba")); // Output: 1
