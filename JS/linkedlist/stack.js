class StkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyStack {
  /*
  - stack can be initalized null thus constructor is null
  */

  constructor() {
    this.top = null;
    this.length = 0;
  }

  /*
    - push()
    - if there is no node then create a node and set to this.top
    - if node exist then set the temp to top 
        -- set node.next to top
        -- set top to node
        -- remove/update the temp.next pointer to null
    - increment the length
    - return temp
    */
  push(value) {
    const node = StkNode(value);
    let temp;
    if (this.length == 0) {
      this.top = node;
    } else {
      temp = this.top;
      this.top.next = node;
      this.top = node;
      temp.next = null;
    }
    this.length++;
    return this;
  }

  /*
  - pop()
    if no node then return undefined
    - set temp = top
    if only one node:
        - set top = null
    if more than one node:
        - set top = top.next;
    - set temp.next = null;
    - decrement the length
    - return temp;

    */
  pop() {
    if (this.length == 0) return undefined;
    let temp;
    temp = this.top;
    if (this.length == 1) {
      this.top = null;
    } else {
      this.top = this.top.next;
    }
    temp.next = null;
    this.length--;
    return temp;
  }
}
