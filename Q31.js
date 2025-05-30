/**
 * @param {string} s
 * @return {number}
 */
var minLength = function(s) {

let stack = []
for(let i =  0 ; i<s.length ;i++){
if(s[i] !== 'AB' || s[i] !== "CD"){
    stack.push(s[i])
}else{
    stack.pop()
}
return stack
};
}
console.log(minLength("ABFCACDB"))