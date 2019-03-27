var arr = [1, 3, -1, -3, 5, 3, 6, 7];

//[1]

var k = 3;

var maximumArr = [];
class dequeue {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    getfront() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
    }
    getlastElement() {
        return this.items[this.items.length - 1];
    }
    pop_lastElement() {
        this.items.pop();
    }
    pop_frontElement() {
        this.items.shift();
    }
    push_backElement(i) {
        this.items.push(i);
    }
}

var obj = new dequeue();

for (var i = 0; i < arr.length; i++) {
    if (!obj.isEmpty() && obj.getfront() === arr[i - k]) {
        obj.pop_frontElement();
    }
    while (!obj.isEmpty() && obj.getlastElement() < arr[i]) {
        obj.pop_lastElement();
    }
    obj.push_backElement(arr[i]);
    if (i >= k - 1) {
        maximumArr.push(obj.getfront());
    }
}
// var arr = [1,3,2,1,4,5,2,3,6];

//[3,1]
console.log(maximumArr);