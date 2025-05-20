function* fibonacci() {
  let a = 0;
  let b = 1;
  
  while (true) {
    yield a;         // Yield the current Fibonacci number
    [a, b] = [b, a + b];  // Update a and b to the next numbers in the sequence
  }
}

// Example: print first 10 Fibonacci numbers
const gen = fibonacci();
for (let i = 0; i < 10; i++) {
  console.log(gen.next().value);
}
