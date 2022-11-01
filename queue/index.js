// ***********Circular Queue**********

class Queue {
    constructor(size) {
        this.item = []; // new Array(size)
        this.currentSize = 0;
        this.MAX_SIZE = size;
        this.rear = -1;
        this.front = -1;
    }

    enqueue(value) {
        if (this.currentSize != this.MAX_SIZE) {
            if (this.rear === this.MAX_SIZE - 1) {
                this.rear = 0;
            } else {
                this.rear++;
            }
            this.item[this.rear] = value;
            this.currentSize++;
            if (this.front == -1) {
                this.front = this.rear;
            }
        }
    }

    dequeue() {
        if (this.currentSize != 0) {
            this.item[this.front] = null;
            if (this.front == this.MAX_SIZE - 1) {
                this.front = 0;
            } else {
                this.front++;
            }
            this.currentSize--;
        } else {
            this.front = -1;
            this.rear = -1;
            console.log("Queue is already full!");
        }
    }
}

const queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue()
console.log(queue);
