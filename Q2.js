var maximumCount = function(nums) {
    // Find the count of positives (first index >= 1)
    let posCount = nums.length - binarySearch(nums, 1);

    // Find the count of negatives (first index >= 0)
    let negCount = binarySearch(nums, 0);

    return Math.max(posCount, negCount);
}
