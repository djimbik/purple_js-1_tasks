// HW - 10

const myFilter = (arr, fnDel) => {
    for (const item of arr) {
        fnDel(item) ? arr.splice(arr.indexOf(item), 1) : item
    }
    return arr
}

const arr = [5, 4, 6, 7];
const fnDel = (item) => item % 2 !== 0;

console.log(myFilter(arr, fnDel));
