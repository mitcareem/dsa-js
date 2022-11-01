let data = []; //inside stack
let currentSize = data.length;
let MAX_VALUE = 5;

//push operation
let str = "hello";
str = [...str];
console.log(str);

function push(value) {
    if (currentSize >= MAX_VALUE) {
        console.log("Stack is full!");
    } else {
        data[currentSize] = value;
        currentSize++;
    }
}

function pop() {
    let lastRemovedItem = data[currentSize - 1];
    if (currentSize > 0) {
        currentSize--;
        data.length = currentSize;
    } else {
        console.log("Stack is already empty!");
    }
    return lastRemovedItem;
}

function revStr(item) {
    for (let i = 0; i < item.length; i++) {
        push(item[i]);
    }
    for (let i = 0; i < item.length; i++) {
        // console.log(pop());
        item[i] = pop();
    }

}
revStr(str);
console.log(str.join(""));
