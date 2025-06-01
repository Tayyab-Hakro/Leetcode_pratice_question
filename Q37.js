/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const map = new Map();

    // Helper to mark where each number appears
    function mark(nums, source) {
        const set = new Set(nums);
        for (let num of set) {
            if (!map.has(num)) {
                map.set(num, new Set());
            }
            map.get(num).add(source);
        }
    }

    mark(nums1, 1);
    mark(nums2, 2);
    mark(nums3, 3);

    const result = [];

    for (let [num, sources] of map.entries()) {
        if (sources.size >= 2) {
            result.push(num);
        }
    }

    return result;
};

console.log(twoOutOfThree([1,1,3,2], [2,3], [3])); // [2, 3]
console.log(twoOutOfThree([3,1], [2,3], [1,2]));   // [1, 2, 3]
