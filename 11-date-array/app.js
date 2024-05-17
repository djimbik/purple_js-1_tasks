// HW - 11

const checkDay = (day, month, year) => {
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

    if (month === 2) {
        if (isLeapYear) {
            return day >= 1 && day <= 29;
        } else {
            return day >= 1 && day <= 28;
        }
    }

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return day >= 1 && day <= 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return day >= 1 && day <= 30;
        default:
            return false;
    }
}

const checkMonth = (month) => {
    return month >= 1 && month <= 12;
};

const checkYear = (year) => {
    return year >= 1;
};

const parseDate = (item) => {
    const dateDashArray = item.split('-');
    const dateSlashArray = item.split('/');
    const dateDotArray = item.split('.');
    let day, month, year;

    if (dateDashArray.length === 3) {
        [day, month, year] = dateDashArray.map(Number);
    } else if (dateSlashArray.length === 3) {
        [month, day, year] = dateSlashArray.map(Number);
    } else if (dateDotArray.length === 3) {
        [day, month, year] = dateDotArray.map(Number);
    } else {
        return [null, null, null];
    }

    return [day, month, year];
}

const convertToDate = (arr) => {
    return arr
        .map(item => {
            if (typeof item !== 'string') {
                return null;
            }

            const [day, month, year] = parseDate(item);

            if (day !== null && month !== null && year !== null &&
                checkDay(day, month, year) && checkMonth(month) && checkYear(year)) {
                const formattedDay = day < 10 ? '0' + day : String(day);
                const formattedMonth = month < 10 ? '0' + month : String(month);

                return `${formattedDay}-${formattedMonth}-${year}`;
            } else {
                return null;
            }
        })
        .filter(item => item !== null);
}

const arr = [
    '10-02-2024', 'string', '11/12/2024', 5, null, '37/12/2990', '25.08.2021', '13/13/2023', '04/31/2022',
    '15-15-2022', '02-30-2024', 'hello world', '12/31/2023', '01/00/2022', '12-25-2024', '31/12/2024',
];

console.log(convertToDate(arr));