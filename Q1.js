/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = []
    for(let i = 0 ; i<word1.length ;i++){
  res =   [word1[i] + word1[i+1]]= [word2[i] + word2[i+1]]
    }
    return res
};
console.log(mergeAlternately("abc","pqr"))