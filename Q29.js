var getLucky = function(s, k) {
    // Step 1: Convert letters to their alphabetical positions
    let numStr = "";
    for (let char of s) {
        // 'a' is char code 97, so we subtract 96
        numStr += (char.charCodeAt(0) - 96).toString();
    }

    // Step 2: Perform digit sum transformation k times
    while (k-- > 0) {
        let sum = 0;
        for (let digit of numStr) {
            sum += parseInt(digit);
        }
        numStr = sum.toString();
    }

    // Return the final number
    return parseInt(numStr);
};
