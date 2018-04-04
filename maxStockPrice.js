let maxStockProfit = (priceArray, cb) => {
    let maxProfit = -1;
    let buyPrice, sellPrice, changeOfBuyPrice = true;

    for (let index=0; index< priceArray.length - 1; index++) {

        if (changeOfBuyPrice) {
            buyPrice = priceArray[index];
        }
        sellPrice = priceArray[index + 1];
        if (sellPrice < buyPrice) {
            changeOfBuyPrice = true;
        } else {
            maxProfit = ((sellPrice - buyPrice) > maxProfit) ? (sellPrice - buyPrice) : maxProfit;
            changeOfBuyPrice = false;
        }
    }

    return cb(null, maxProfit);
};

maxStockProfit([32, 46, 26, 38, 40, 48, 42], (err, maxProfit) => {
    if (err) {

    } else {
        console.log(maxProfit);
    }
});

