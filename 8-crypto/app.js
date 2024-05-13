// HW - 5

const encryptPassword = (password) => {
    if (password.length < 7) {
        return 'пароль меньше 7 символов не принимается';
    }

    const lastThree = password.slice(-3);
    const firstFour = password.slice(0, 4);
    const middle = password.slice(4, -3);

    return (lastThree + firstFour + middle).split('').reverse().join('');
}

console.log(encryptPassword('Привет!'));

const checkPassword = (hashedPassword, password) => {
    return encryptPassword(hashedPassword) === password;
}

console.log(checkPassword('вирП!те', 'Привет!'));

