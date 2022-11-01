// let arr = [5, 9, 13, 17];
// const find = 5;
// let start = 0;
// let end = arr.length - 1;
// let position;

// while (start <= end) {
//     let mid = Math.floor((start + end) / 2);
//     console.log(mid);
//     if (arr[mid] === find) {
//         position = mid;
//         break;
//     } else if (arr[mid] < find) {
//         start = mid + 1;
//     } else {
//         end = mid - 1;
//     }
// }
// console.log(arr[position]);

let arr = [10, 15, 18, 34, 67];
let start = 0;
let end = arr.length - 1;
let position;
const find = 67;
function bSearch(arr, start, end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === find) {
        position = mid;
        return position;
    } else if (arr[mid] < find) {
        bSearch(arr, mid + 1, end);
    } else {
        bSearch(arr, start, mid - 1);
    }
}

bSearch(arr, start, end);
console.log(arr[position]);
