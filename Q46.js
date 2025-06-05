/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
      let values = new Map()
      for(let char of arr2){
        arr1[char] = values.set(arr1[char] || 0)+1
      }
      return values
};
console.log(relativeSortArray( [2,3,1,3,2,4,6,7,9,2,19],  [2,1,4,3,9,6]))