// reverse array with recursion *******

function customReverse(data, start, end) {
    console.log(data);
    if (start <= end) {
        let temp = data[start];
        data[start] = data[end];
        data[end] = temp;
        customReverse(data, start + 1, end - 1);
    }
}

let arr = [1, 2, 3, 4, 5, 6];

customReverse(arr, 0, arr.length - 1);
console.log(arr);
