// HW - 4

const convertCurrency = (sum, currencySell, currencyBuy) => {
    const rubToUsdRate = 95;
    const rubToEurRate = 100;
    const usdToEurRate = 0.92;

    if (currencySell === currencyBuy) {
        return sum;
    }

    if (currencySell === 'EUR') {
        if (currencyBuy === 'USD') {
            return sum / usdToEurRate;
        }
        if (currencyBuy === 'RUB') {
            return sum * rubToEurRate;
        }
    }

    if (currencySell === 'USD') {
        if (currencyBuy === 'EUR') {
            return sum * usdToEurRate;
        }
        if (currencyBuy === 'RUB') {
            return sum * rubToUsdRate;
        }
    }

    if (currencySell === 'RUB') {
        if (currencyBuy === 'EUR') {
            return sum / rubToEurRate;
        }
        if (currencyBuy === 'USD') {
            return sum / rubToUsdRate;
        }
    }

    return 0
}
