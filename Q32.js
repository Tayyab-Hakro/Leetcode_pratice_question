var numberOfPairs = function(nums) {
    let freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let pairs = 0;
    let leftovers = 0;

    for (let key in freq) {
        pairs += Math.floor(freq[key] / 2);
        leftovers += freq[key] % 2;
    }

    return [pairs, leftovers];
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2])); // Output: [3,1]
