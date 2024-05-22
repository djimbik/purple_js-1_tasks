// HW - 13


const makeQueryString = (obj) => {
    let arr = []
    for (const [key, value] of Object.entries(obj)) {
        arr.push(`${key}=${value}`)
    }
    return arr.join('&')
}

console.log(makeQueryString({search: "Вася", take: 10}))