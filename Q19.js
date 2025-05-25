var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        const bitCountA = a.toString(2).split('1').length - 1;
        const bitCountB = b.toString(2).split('1').length - 1;
        if (bitCountA === bitCountB) {
            return a - b;
        }
        return bitCountA - bitCountB;
    });
};
