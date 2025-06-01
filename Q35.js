/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
 prices = prices.sort((a,b) => a-b)
 let twocholocates =  prices[0] + prices[1]
 let divide = money - twocholocates
 return divide < 0 ? money :  divide
};
console.log(buyChoco([1,2,2], 3))
console.log(buyChoco([3,2,3],  3))