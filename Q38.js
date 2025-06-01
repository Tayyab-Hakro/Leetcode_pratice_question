/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums)
let max = Math.max(...nums)
let res = []
for(let i = 1 ; i <= max ;i++){
if(min % i === 0 && max % i ===0 &&min % 1 === 0 && max % 1 ===0 ){
    res.push(i)
}
}
return Math.max(...res)
};
console.log(findGCD([2,5,6,9,10]))
console.log(findGCD([7,5,6,8,3]))
console.log(findGCD([3,3]))

    