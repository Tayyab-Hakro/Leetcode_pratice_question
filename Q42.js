/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    let word = new Set(words1)
    let count  =0 
    for(let char of words2){
        if(!word.has(char)){
            count++
        }
    }
    return count
}
;
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]))