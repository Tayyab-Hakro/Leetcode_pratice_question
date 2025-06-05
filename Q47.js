var minSteps = function(s, t) {
    let freqS = {};
    let freqT = {};

    // Count frequency of characters in s
    for (let char of s) {
        freqS[char] = (freqS[char] || 0) + 1;
    }

    // Count frequency of characters in t
    for (let char of t) {
        freqT[char] = (freqT[char] || 0) + 1;
    }

    let steps = 0;

    // For each character in s, calculate how many are missing in t
    for (let char in freqS) {
        let countS = freqS[char];
        let countT = freqT[char] || 0;

        if (countS > countT) {
            steps += countS - countT;
        }
    }

    return steps;
};
console.log(minSteps( "bab", "aba"))