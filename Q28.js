var findRelativeRanks = function(score) {
    // Step 1: Copy and sort the scores in descending order to find rank positions
    const sorted = [...score].sort((a, b) => b - a);
    // Example: score = [10, 3, 8, 9, 4] → sorted = [10, 9, 8, 4, 3]

    // Step 2: Create a map to store score → rank name (like "Gold Medal", "4", etc.)
    const map = new Map();

    // Step 3: Assign ranks based on index in sorted array
    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            map.set(sorted[i], "Gold Medal"); // Highest score
        } else if (i === 1) {
            map.set(sorted[i], "Silver Medal"); // 2nd highest
        } else if (i === 2) {
            map.set(sorted[i], "Bronze Medal"); // 3rd highest
        } else {
            map.set(sorted[i], (i + 1).toString()); // From 4th onward, use position as string
        }
    }

    // Step 4: Build the result array using the original score order
    // For each score, find the corresponding rank name from the map
    return score.map(s => map.get(s));
};
