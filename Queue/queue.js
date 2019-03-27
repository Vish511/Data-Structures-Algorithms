//[1,2,3,4,5]
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    Enqueue(val) {
        var newNode = new Node(val);
        if(!this.front) {
            this.front = newNode;
            this.rear = newNode;
        }else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        return ++this.size;
    }
    Dequeue() {
        if(!this.front) return null;
        var currentFront = this.head;
        if(this.length == 1) {
            this.rear = null;
        }
        this.front = this.front.next;
        this.size--;
        return currentFront;
    }
}