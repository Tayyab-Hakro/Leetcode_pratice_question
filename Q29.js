/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    n  = n.toString().split("").map(Number)
    let num = 0
    for(let i = 0 ; i<n.length ; i++){
          for(let j = i+1 ; j<n.length ; j++){
            let product = n[i] * n[j]
            if(product > num){
                num = product
            }
        }
    
    }
    return num
}; 

console.log(maxProduct(31))
console.log(maxProduct(124))