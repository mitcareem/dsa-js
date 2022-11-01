// function fun(operator, a, b) {
//     if (operator == "+") {
//         return a + b;
//     } else if (operator == "-") {
//         return a - b;
//     } else {
//         return "Invalid";
//     }
// }

// console.log(fun("+", 2, 4));

function ops(operator, a, b) {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        default:
            return "Invalid";
    }
}

console.log(ops("+", 2, 4));