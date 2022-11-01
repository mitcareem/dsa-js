class Stack {
    constructor(size) {
        this.data = [];
        this.MAX_SIZE = size;
        this.currentSize = this.data.length;
    }

    push(value) {
        if (this.currentSize >= this.MAX_SIZE) {
            console.log("Stack is full!");
        } else {
            this.data[this.currentSize] = value;
            this.currentSize++;
        }
    }

    pop() {
        if (this.currentSize > 0) {
            this.currentSize--;
            this.data.length = this.currentSize;
        } else {
            console.log("Stack is already empty!");
        }
    }

    display() {
        console.log(this.data);
    }
}


const stack = new Stack(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.display();
stack.pop();
stack.display();
