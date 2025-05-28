/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
   
  let setVowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])  
    let n = s.length/2
    let count  = 0
    let count2  = 0

    for(let i = 0 ; i<n ;i++){
        if(setVowels.has(s[i])){
            count++
        }
    }
        for(let i = n ; i<s.length ;i++){
        if(setVowels.has(s[i])){
            count2++
        }
    }
    
   
    return count === count2 ? true :false
};
console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("AbCdEfGh"))