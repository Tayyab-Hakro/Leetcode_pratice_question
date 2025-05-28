var minTimeToType = function(word) {
    let time = 0;       // Total time taken to type the word
    let prev = 'a';     // Pointer starts at 'a'

    for (let i = 0; i < word.length; i++) {
        let curr = word[i];  // Current character we want to type

        // Calculate the distance between current char and previous pointer position
        let dist = Math.abs(curr.charCodeAt(0) - prev.charCodeAt(0));

        // Because the typewriter is circular, we take the minimum of:
        // 1. direct distance
        // 2. 26 - distance (which is the other way around the circle)
        let moveTime = Math.min(dist, 26 - dist);

        // Total time = move time + 1 second for typing the character
        time += moveTime + 1;

        // Update the pointer position to current character
        prev = curr;
    }

    return time;  // Final time taken to type the whole word
};
