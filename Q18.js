/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function(num) {
    num  = num.toString().split("").sort()
    let num1  = "" ; let num2 = ""
    for(let i = 0 ; i<num.length ; i++ ){
        if(i %2  === 0){
            num1 += num[i]
        }else{
            num2 +=num[i]
        }
    }
    return parseInt(num1) + parseInt(num2)
    };
console.log(splitNum(4325))