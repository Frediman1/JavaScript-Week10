function findNumCoins(arrOfCoins, totalValue) {
    arrOfCoins.sort(function (a, b) { return b - a });
    let numCoins = 0;
    let i = 0;
    while (i < arrOfCoins.length) {
        if (arrOfCoins[i] <= totalValue) {
            numCoins++;
            totalValue = totalValue - arrOfCoins[i];

        } else {
            i++;
        }
    }
    return totalValue === 0 ? numCoins : -1;
}
console.log(findNumCoins([1, 2, 5], 11));
console.log(findNumCoins([2], 3));