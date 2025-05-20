/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length === 0 ? -1 :  this[this.length-1]
};

const vla = [1, 2, 3]
const vla2 = []

console.log(vla.last())
console.log(vla2.last())

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */