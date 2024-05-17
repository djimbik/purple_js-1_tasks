// HW - 4

const convertCurrency = (sum, currencySell, currencyBuy) => {
    const rubToUsdRate = 95;
    const rubToEurRate = 100;
    const usdToEurRate = 0.92;

    if (currencySell === currencyBuy) {
        return sum;
    }

    switch (currencySell) {
        case 'EUR':
            switch (currencyBuy) {
                case 'USD':
                    return sum / usdToEurRate;
                case 'RUB':
                    return sum * rubToEurRate;
                default:
                    return 0;
            }
        case 'USD':
            switch (currencyBuy) {
                case 'EUR':
                    return sum * usdToEurRate;
                case 'RUB':
                    return sum * rubToUsdRate;
                default:
                    return 0;
            }
        case 'RUB':
            switch (currencyBuy) {
                case 'EUR':
                    return sum / rubToEurRate;
                case 'USD':
                    return sum / rubToUsdRate;
                default:
                    return 0;
            }
        default:
            return 0
    }
}