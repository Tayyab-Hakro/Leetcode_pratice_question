/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let last = stack[stack.length - 1];
        let current = s[i];

        if ((last === 'A' && current === 'B') || (last === 'C' && current === 'D')) {
            stack.pop(); // Remove the pair
        } else {
            stack.push(current); // Add to stack
        }
    }

    return stack.length;
};

console.log(minLength("ABFCACDB")); // Output should be 2
