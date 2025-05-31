/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr = arr.sort((a,b) => a-b)
    let divider = Math.abs(arr[0] - arr[1])
    let check = true
    for(let i = 1 ; i<arr.length-1 ;i++){
        if(Math.abs(arr[i] - arr[i+1]) !== divider){
            return false
        }
    }
    return check
};

console.log(canMakeArithmeticProgression([1,3,5]))
console.log(canMakeArithmeticProgression([1,2,4]))