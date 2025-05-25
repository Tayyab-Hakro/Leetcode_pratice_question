var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b); // increasing order
    let n = deck.length;
    let result = new Array(n);
    let indexQueue = [];

    // fill indexQueue with 0 to n-1
    for (let i = 0; i < n; i++) {
        indexQueue.push(i);
    }

    for (let card of deck) {
        let index = indexQueue.shift();  // get first index
        result[index] = card;            // place card at that index

        if (indexQueue.length) {
            indexQueue.push(indexQueue.shift()); // move next index to bottom
        }
    }

    return result;
};
