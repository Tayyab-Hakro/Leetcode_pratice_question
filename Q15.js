/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let ch = s[i];
        // 'a'.charCodeAt(0) = 97, so reverse index = 26 - (ch - 'a') = 122 - code + 1
        let reverseIndex = 26 - (ch.charCodeAt(0) - 'a'.charCodeAt(0));
        let positionInString = i + 1;
        total += reverseIndex * positionInString;
    }
    return total;
};
