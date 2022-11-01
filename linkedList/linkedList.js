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
}

const list = new List(50);
list.addNode(100);
console.log(list);
