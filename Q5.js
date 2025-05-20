/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let map = new Map();
    let pairs = 0;

    for (let num of nums) {
        if (map.has(num)) {
            map.delete(num); // pair formed, remove it
            pairs++;
        } else {
            map.set(num, true); // mark it as unmatched
        }
    }

    return [pairs, map.size];
};

console.log(numberOfPairs([1,3,2,1,3,2,2])); // Output: [3,1]
