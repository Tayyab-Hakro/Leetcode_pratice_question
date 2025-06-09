/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    // Step 1: Split sentence into words
    let words = s.split(" ");

    // Step 2: Create a result array of same size
    let result = new Array(words.length);

    // Step 3: Loop through each word
    for (let word of words) {
        // Get the position (last character)
        let position = parseInt(word[word.length - 1]);

        // Remove the number and store the word at correct index
        result[position - 1] = word.slice(0, -1);
    }

    // Step 4: Join the result array with space
    return result.join(" ");
};

console.log(sortSentence("is2 sentence4 This1 a3"))