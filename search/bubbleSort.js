const arr = [10, 9, 8, 7, 6].reverse();
for (i = 0; i < arr.length; i++) {
    console.log(arr);
    let flag = 0;
    for (j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j + 1]) {
            flag = 1;
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }

    }
    if (flag == 0) return;
}
console.log(arr); 
