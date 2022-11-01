const arr = [1, 2, 3, 4, 5, 6, 7];
const position = 3;

for (i = 3; i < arr.length; i++) {
    arr[i] = arr[i + 1];
}

arr.length = arr.length - 1;

console.log(arr);
