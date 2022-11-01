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
    deleteNode(index) {
        let counter = 1;
        let leadNode = this.head;
        if (index === 1) {
            this.head = this.head.next;
            this.size--;
        } else {
            while (counter < index - 1) {
                leadNode = leadNode.next;
                counter++;
            }
            let nextNode = leadNode.next.next;
            leadNode.next = nextNode;
            this.size--;
        }
    }
}

const list = new List(100);
list.addNode(200);
list.addNode(300);
list.addNode(400);
list.addNode(500);
// list.deleteNode(4);

console.log(list);
