function diStringMatch(s) {
  let low = 0;
  let high = s.length;
  const result = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      result.push(low++);
    } else {
      result.push(high--);
    }
  }

  // Last number jo bacha hota hai (low == high at this point)
  result.push(low);
  return result;
}

console.log(diStringMatch("IDID"))