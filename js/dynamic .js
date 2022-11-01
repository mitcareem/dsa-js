// fib(n) = fib(n - 1) + fib(n - 2);
// 0 1 1 2 3 5 8 13
let arr = [];
function fib(n) {
    if (arr[n] != undefined) {
        return arr[n];
    } else if (n == 0 || n == 1) {
        return arr[n] = n;
    } else {
        arr[n] = fib(n - 1) + fib(n - 2);
        return arr[n];
    }
}

function fibonacci(n) {
    if (n == 0 || n == 1) return n;
    else return fib(n - 1) + fib(n - 2);
}

console.time("a")
console.log(fibonacci(200));
console.timeEnd("a")

console.time("fib")
console.log(fib(200));
console.timeEnd("fib")







