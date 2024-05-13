// HW - 6

const sortArr = (originalArr) => {
    const arr = [...originalArr];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    return arr;
}

console.log(sortArr([1, 40, -5, 10, 0]))