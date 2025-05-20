// Main function jo minimum ship capacity return karega
function shipWithinDays(weights, days) {
  // Minimum capacity: har hal mein largest package ko uthana padega
  let low = Math.max(...weights);
  // Maximum capacity: agar ek din mein sab uthayein
  let high = weights.reduce((a, b) => a + b, 0);
  // Binary search between low and high capacity
  while (low < high) {
    let mid = Math.floor((low + high) / 2); // Middle capacity try kar rahe hain

    // Agar is capacity se hum 'days' mein ship kar sakte hain
    if (canShip(weights, days, mid)) {
      // Try lower capacity
      high = mid;
    } else {
      // Capacity kam hai, toh badhao
      low = mid + 1;
    }
  }

  // Final answer — minimum capacity jisse saare packages 'days' mein ship ho sakte hain
  return low;
}

// Helper function jo check karega ke given capacity se 'days' mein ho sakta hai ya nahi
function canShip(weights, days, capacity) {
  let currentLoad = 0; // Har din ka total load
  let requiredDays = 1; // Shuru mein 1 din maan ke chalte hain

  for (let weight of weights) {
    // Agar current package add karne se load zyada ho jaye
    if (currentLoad + weight > capacity) {
      requiredDays++;       // Naya din start
      currentLoad = 0;      // Load reset
    }
    currentLoad += weight;  // Package uthao
  }

  // Agar required days allowed se zyada hain toh return false
  return requiredDays <= days;
}
const weights = [1,2,3,4,5,6,7,8,9,10];
const days = 5;

const result = shipWithinDays(weights, days);
console.log("Minimum Capacity Required:", result);
