//queue data structure************
//enqueue ----add item into queue-----rear
//dequeue -----remove item form queue----front

let queue = [];
let currentSize = queue.length;
let MAX_SIZE = 5;

//add item into the queue at the rear
function enqueue(value) {
    if (currentSize >= MAX_SIZE) {
        console.log("Queue don't have space!");
    } else {
        queue[currentSize] = value;
        currentSize++;
    }
}

function dequeue() {
    // queue.shift()
    if (currentSize > 0) {
        for (let i = 0; i < queue.length; i++) {
            queue[i] = queue[i + 1];
        }
        currentSize--;
        queue.length = currentSize;
    } else {
        console.log("Queue is already empty!");
    }
}

function display() {
    console.log(queue);
}

enqueue(10);
enqueue(11);
enqueue(12);
enqueue(13);
enqueue(14);
enqueue(15);
dequeue();
dequeue();
display();
