function Stack() {
    this.items = [];
    this.Push = function(element) {
        this.items.push(element)
    }
    this.Pop = function(element) {
        this.items.pop(element)
    }
    this.Peek = function() {
        return this.item.length
    }
    this.isEmpty = function() {
        return this.item.length == 0 ?true : false
    }
}

var stack = new Stack();
stack.Push(1);
stack.Push(10);
stack.Push(20);
stack.Push(30);
stack.Push(40);
stack.Pop();
console.log(stack.Peek());
console.log(stack.isEmpty());



