function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: already sorted
  }

  const mid = Math.floor(arr.length / 2); // Find the middle index
  const left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
  const right = mergeSort(arr.slice(mid));   // Recursively sort right half

  return merge(left, right); // Merge the sorted halves
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays and push the smallest into result
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Push any remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage:
const arr = [4, 2, 7, 1, 3, 6];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 6, 7]
