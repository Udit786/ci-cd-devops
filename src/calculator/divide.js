function divide(firstNum, secondNum) {
    if (secondNum !== 0) {
        return firstNum / secondNum;
    } else {
        return "Cannot divide by zero";
    }
}

module.exports = divide;
