function fact(n) {
    let answer = 1;
    if (n == 0 || n == 1) {
        return answer;
    } else {
        for (i = n; i >= 1; i--) {
            answer = answer * i
        }
        return answer;
    }
}

console.log(fact(5));

function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));
