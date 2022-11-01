/* A type of data structure 
 where the arrangement of the data follows a linear trend.
*/

let data = []; //inside stack
let currentSize = data.length;
let MAX_VALUE = 5;

//push operation

function push(value) {
    if (currentSize >= MAX_VALUE) {
        console.log("Stack is full!");
    } else {
        data[currentSize] = value;
        currentSize++;
    }
}

function pop() {
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        console.log("Stack is already empty!");
    }
}
push(10);
push(10);
push(10);
push(10);
pop()
pop()
pop()
pop()
pop()
console.log(data);

