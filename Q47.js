var similarPairs = function(words) {
    const map = new Map();

    for (let word of words) {
        // Create a sorted unique key from characters in word
        let key = [...new Set(word)].sort().join('');
        map.set(key, (map.get(key) || 0) + 1);
    }

    let count = 0;
    for (let val of map.values()) {
        if (val > 1) {
            count += (val * (val - 1)) / 2;
        }
    }

    return count;
};
