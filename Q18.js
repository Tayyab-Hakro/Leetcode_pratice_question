/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    num  = num.toString().split("").sort()
let res  = []
let empty  = []
for(let i = 0 ; i<num.length ; i++){
    if(parseInt(num[i] % 2) === 0){
        res.push(num[i])
    }else{
        empty.push(num[i])

    }
}
let joined = res.toString().split("").join("")
console.log(joined)
};
console.log(splitNum(4325))