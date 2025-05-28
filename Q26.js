function diStringMatch(s) {
  let low = 0;
  let high = s.length;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      result.push(low);
      low++;
    } else {
      result.push(high);
      high--;
    }
  }

  // Last element — ab low == high hoga
  result.push(low);

  return result;
}

// 🔍 Example
const s = "IDID";
const perm = diStringMatch(s);
console.log(perm);  // e.g., [0, 4, 1, 3, 2]
