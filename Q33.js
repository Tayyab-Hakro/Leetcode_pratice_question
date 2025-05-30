/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let freq = {}
    for(let char of num){
        freq[char] = (freq[char] || 0) +1
    }
    return freq
};
console.log(digitCount("1210"))