// HW - 12

const checkCard = (cardNum) => {
    cardNum = cardNum.trim().replaceAll('-', '');

    if (isNaN(cardNum)) {
        return false;
    }

    const finalArr = [];
    const numsArr = cardNum.split('').reverse();

    for (const index in numsArr) {
        let num = Number(numsArr[index]);

        if (index % 2 !== 0) {
            num = (num * 2) > 9 ? num * 2 - 9 : num * 2;
        }

        finalArr.push(num);
    }

    const sum = finalArr.reduce((acc, value) => acc + value, 0);

    return sum % 10 === 0;
}

console.log(checkCard("4246-3200-1398-2409")); //false
console.log(checkCard("4561-2612-1234-5467")); //true