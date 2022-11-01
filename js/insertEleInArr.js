// structure === pattern
// model === logical frame

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let newEl = 100;
const position = 2;

for (i = arr.length - 1; i >= 0; i--) {
    if (i >= position) {
        arr[i + 1] = arr[i];
        if (i == position) {
            arr[i] = newEl;
        }
    }

}
console.log(arr);
