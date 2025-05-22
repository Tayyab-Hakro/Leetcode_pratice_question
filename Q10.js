/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const map = new Map();

  // Add items from items1
  for (const [value, weight] of items1) {
    map.set(value, (map.get(value) || 0) + weight);
  }

  // Add items from items2
  for (const [value, weight] of items2) {
    map.set(value, (map.get(value) || 0) + weight);
  }

  // Convert map to sorted result array
  const result = Array.from(map.entries())
    .sort((a, b) => a[0] - b[0]) // sort by value (index 0)
    .map(([value, weight]) => [value, weight]); // format as [value, weight]

  return result;
}
console.log(mergeSimilarItems([[1,1],[4,5],[3,8]],  [[3,1],[1,5]]))