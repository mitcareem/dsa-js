class List {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;
        this.size = 1;
    }
    addNode(value) {
        let newNode = {
            value: value,
            next: null,
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    traverse() {
        let counter = 0;
        let currentNode = this.head;
        while (counter < this.size) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
            counter++;
        }
    }
}

const list = new List(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
// console.log(list.size);
list.traverse();
