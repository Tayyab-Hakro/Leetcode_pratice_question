/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
let divive = s.length /2
let count = 0
let count2 = 0
for(let i= 0 ; i<s.length ; i+=divive){
    if(s[i] === "a" || s[i] ===  "e" || s[i] ===  "i" || s[i] ===   "o"|| s[i] ===  "u" )
        count++
    }
    
};
console.log(halvesAreAlike("book"))