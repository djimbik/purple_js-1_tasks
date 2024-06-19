// HW - 17

/* page */
const page = {
    firstNum: document.querySelector('.first-num'),
    secondNum: document.querySelector('.second-num'),
    resultText: document.querySelector('.result__text'),
    errorBlock: document.querySelector('.inputs-block__error'),
    buttonsBlock: document.querySelector('.buttons__block'),
}

const showError = (target) => {
    page.errorBlock.classList.remove('inputs-block__error_inactive');
    target.value = '';
};

const hideError = () => {
    page.errorBlock.classList.add('inputs-block__error_inactive');
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

page.firstNum.addEventListener('input', validateInput);
page.secondNum.addEventListener('input', validateInput);

const validateFinalInput = (inputValue) => {
    const normalizedInput = inputValue.replace(',', '.');
    if (normalizedInput === '' || normalizedInput === '-' || normalizedInput === '.') {
        return false;
    }

    number = parseFloat(normalizedInput);

    return !isNaN(number) && isFinite(number);
};

const calculateResult = (operation) => {
    if (!validateFinalInput(page.firstNum.value) || !validateFinalInput(page.secondNum.value)) {
        showError(page.resultText);
        page.resultText.textContent = 'Неверное значение введено в поле ввода числа';
        return;
    }

    let finalResult;

    switch (operation) {
        case '+':
            finalResult = convertToNum(page.firstNum) + convertToNum(page.secondNum);
            break;
        case '-':
            finalResult = convertToNum(page.firstNum) - convertToNum(page.secondNum);
            break;
        case '*':
            finalResult = convertToNum(page.firstNum) * convertToNum(page.secondNum);
            break;
        case '/':
            finalResult = convertToNum(page.firstNum) / convertToNum(page.secondNum);
            break;
        default:
            return;
    }
    page.resultText.textContent = finalResult;
}

page.buttonsBlock.addEventListener('click', (event) => {
    const button = event.target.closest('.button');

    if (button) {
        const operation = button.innerText;
        calculateResult(operation);
    }
})