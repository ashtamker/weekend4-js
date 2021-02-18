const basicOp = (opr, num1, num2) => {
    switch (opr) {
        case '+': console.log(num1 + num2);

            break;
        case '-': console.log(num1 - num2);
            break;
        case '*': console.log(num1 * num2);
            break;
        case '/': console.log(num1 / num2);

        default:
            break;
    }

}


basicOp('+', 4, 7);
