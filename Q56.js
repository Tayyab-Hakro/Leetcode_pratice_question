function minOperations(boxes) {
  const n = boxes.length;
  const answer = new Array(n).fill(0);

  // Left to right pass
  let count = 0, ops = 0;
  for (let i = 0; i < n; i++) {
    answer[i] += ops;
    if (boxes[i] === '1') count++;
    ops += count;
  }

  // Right to left pass
  count = 0;
  ops = 0;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] += ops;
    if (boxes[i] === '1') count++;
    ops += count;
  }

  return answer;
}
console.log(minOperations("110")); // Output: [1, 1, 3]
