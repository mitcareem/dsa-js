const arr = [81, 433, 52, 2]; // do sort in increasing order

for (i = 0; i < arr.length; i++) {
    console.log(arr);
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr); 
