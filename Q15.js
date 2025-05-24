/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
  // Step 1: Initialize an array of 26 zeros
  let freq = new Array(26).fill(0);

  // Step 2: Count frequency of each character
  for (let char of s) {
    let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
    freq[index]++;
  }

  // Step 3: Reverse the array
  freq.reverse();

  // Step 4: Sum all values (or return the reversed array if needed)
  let sum = freq.reduce((acc, val) => acc + val, 0);
  return sum;
};

console.log(reverseDegree("abc")); // Output: 3
