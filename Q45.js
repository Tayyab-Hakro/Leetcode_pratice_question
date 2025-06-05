/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
   let res = ""
    let freq  = { }
   for(let char of s){
    freq[char] = (freq[char] || 0)+1
   }
   let sorted = Object.entries(freq)
   sorted = sorted.sort((a,b)=> b[1]-a[1])
   for(let [char , value] of sorted){
    res += char.repeat(value)
}
return res
};
console.log(frequencySort("tree"))