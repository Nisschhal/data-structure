class QNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyQueue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /*
    push(value); // push to last
    - create a node with value
    - if no node then set first and last to node;
    - if node exists then
        - set this.last.next = node;
        - set this.last = node;
    - increment the length
    - return this/queue

     

     

    */

  push(value) {
    const node = new QNode(value);
    if (this.length == 0) {
      this.last = node;
      this.first = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  /*
    pop(); // remove item from first
    - if no node then return undefined
    - if only one node 
       -- temp to first
       -- then set first and last to null
    - if more than on node
       -- temp to first
       -- set first = first.next
       -- temp.next = null
    - decrement the length
    - return the temp
    */

  pop() {
    if (this.length == 0) return undefined;
    let temp = this.first;
    if (this.length == 0) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}
