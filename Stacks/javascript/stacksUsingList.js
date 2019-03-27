//[1,2,3,4,5]
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.start = null;
        this.end = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.start) {
            this.start = newNode;
            this.end = this.start;
        }else {
            var oldStart = this.start;
            this.start = newNode;
            this.start.next = oldStart;
        }
        return ++this.length;
    }
    pop() {
        if(!this.start) return null
        var popped
        if(this.length == 1) {
            popped = this.first;
            this.first = null;
            this.last = null;
            return popped;
        }else {
            var newStart = this.start.next;
             popped = this.start;
            this.start = newStart           
        }
        this.length--
        return popped
    }
}


var stack = new Stack() 
stack.push(3)
stack.push(2)
stack.push(1)
console.log(stack.pop())
