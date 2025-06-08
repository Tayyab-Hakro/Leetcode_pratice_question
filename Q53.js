function countSymmetricIntegers(low, high) {
    let count = 0;

    for (let num = low; num <= high; num++) {
        const str = num.toString();
        const len = str.length;

        if (len % 2 === 0) {
            const half = len / 2;
            const firstHalf = str.slice(0, half);
            const secondHalf = str.slice(half);

            const sum1 = [...firstHalf].reduce((acc, digit) => acc + Number(digit), 0);
            const sum2 = [...secondHalf].reduce((acc, digit) => acc + Number(digit), 0);

            if (sum1 === sum2) {
                count++;
            }
        }
    }

    return count;
}
