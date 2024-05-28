// HW - 17

const firstNum = document.querySelector('.first-num');
const secondNum = document.querySelector('.second-num');
const resultText = document.querySelector('.result__text');
const errorBlock = document.querySelector('.inputs-block__error');

const showError = (target) => {
    errorBlock.classList.remove('inputs-block__error_inactive');
    target.value = '';
};

const hideError = () => {
    errorBlock.classList.add('inputs-block__error_inactive');
};

const convertToNum = (input) => {
    return Number(input.value.replace(',', '.'));
}

const validateInput = (event) => {
    const {target} = event;
    const inputValue = target.value;
    const normalizedInput = inputValue.replace(',', '.');
    const characters = normalizedInput.split('');

    const dotCount = characters.filter(char => char === '.').length;
    if (dotCount > 1) {
        showError(target);
        return;
    }

    const hasInvalidChars = characters.some(char => isNaN(char) && (char !== '.') && (char !== '-'));
    if (hasInvalidChars) {
        showError(target);
        return;
    }

    const minusCount = characters.filter(char => char === '-').length;
    if (minusCount > 1 || (minusCount === 1 && characters[0] !== '-')) {
        showError(target);
        return;
    }

    hideError();
}

firstNum.addEventListener('input', validateInput);
secondNum.addEventListener('input', validateInput);

const validateFinalInput = (inputValue) => {
    const normalizedInput = inputValue.replace(',', '.');
    if (normalizedInput === '' || normalizedInput === '-' || normalizedInput === '.') {
        return false;
    }

    number = parseFloat(normalizedInput);

    return !isNaN(number) && isFinite(number);
};

const calculateResult = (operation) => {
    if (!validateFinalInput(firstNum.value) || !validateFinalInput(secondNum.value)) {
        showError(resultText);
        resultText.textContent = 'Неверное значение введено в поле ввода числа';
        return;
    }

    let finalResult;

    switch (operation) {
        case 'addition':
            finalResult = convertToNum(firstNum) + convertToNum(secondNum);
            break;
        case 'subtraction':
            finalResult = convertToNum(firstNum) - convertToNum(secondNum);
            break;
        case 'multiplication':
            finalResult = convertToNum(firstNum) * convertToNum(secondNum);
            break;
        case 'division':
            finalResult = convertToNum(firstNum) / convertToNum(secondNum);
            break;
        default:
            return;
    }
    resultText.textContent = finalResult;
}

const addition = () => calculateResult('addition');
const subtraction = () => calculateResult('subtraction');
const multiplication = () => calculateResult('multiplication');
const division = () => calculateResult('division');