function findThePrefixCommonArray(A, B) {
  const n = A.length;
  const seenA = new Set();
  const seenB = new Set();
  const common = new Set();
  const result = [];

  for (let i = 0; i < n; i++) {
    seenA.add(A[i]);
    seenB.add(B[i]);

    // Agar A[i] dono mein hai, to common mein add karo
    if (seenB.has(A[i])) common.add(A[i]);
    if (seenA.has(B[i])) common.add(B[i]);

    result.push(common.size);
  }

  return result;
}

// 🔹 Example:
const A = [1, 3, 2, 4];
const B = [3, 1, 2, 4];
console.log(findThePrefixCommonArray(A, B));  // Output: [0, 2, 3, 4]
