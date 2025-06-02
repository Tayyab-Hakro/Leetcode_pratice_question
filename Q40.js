/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;

    for (let i = left; i <= right; i++) {
        let word = words[i];
        let first = word[0];
        let last = word[word.length - 1];

        if (vowels.has(first) && vowels.has(last)) {
            count++;
        }
    }

    return count;
};

// Example:
console.log(vowelStrings(["are", "amy", "u"], 0, 2));  // Output: 2
