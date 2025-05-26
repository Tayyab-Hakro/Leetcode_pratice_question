var countGoodTriplets = function(arr, a, b, c) {
    let count = 0;

    // i < j < k
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            // First condition
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < arr.length; k++) {
                    // Check all conditions
                    if (
                        Math.abs(arr[j] - arr[k]) <= b &&
                        Math.abs(arr[i] - arr[k]) <= c
                    ) {
                        count++; // Found a good triplet
                    }
                }
            }
        }
    }

    return count;
};
