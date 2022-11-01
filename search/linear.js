//linear search*********

// let data = [10, 22, 1, 2, 3, 2, 5, 90];
// let find = 2;
// let pos = [];
// for (let i = 0; i < data.length; i++) {
//     if (data[i] === find) {
//         // pos = [...pos, i];
//         pos.push(i);
//         // break;
//     }
// }
// // if (!pos) {
// //     console.log("Not found!")
// // }
// console.log(pos);

function isPrime(n) {
    let flag = false;
    if (n == 0 || n == 1) {
        return console.log("Neither prime nor composite!");
    } else if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                flag = true;
                break;
            }
        }
    }

    if (flag) {
        console.log("Not Prime!");
    } else {
        console.log("Prime!");
    }
}
isPrime(1);
isPrime(10);
isPrime(11);
