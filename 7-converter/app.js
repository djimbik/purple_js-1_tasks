// HW - 4

const age = 18;
const hasLicence = true;
const isDrunk = false;

const canDrive = age >= 18 && hasLicence && !isDrunk

console.log(`Можно ли Вам за руль? ${canDrive ? 'Да, можно' : 'Нет, нельзя'}`)
