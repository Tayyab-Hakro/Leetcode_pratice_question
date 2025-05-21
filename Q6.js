/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
let mapped = points.map((item) => item[0])
mapped = mapped.sort((a ,b) => b-a)
let res  = []
for(let i = 0 ; i<mapped.length-1 ;i++){
    res.push([mapped[i] - mapped[i+1]])
}
return Math.max(res)
};
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]))