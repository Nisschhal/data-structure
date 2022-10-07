class DNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor(value) {
    const node = new DNode(value);
    this.head = node;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    /*
      - create a node
      - if no node then set head and tail to new node
      - if node exist then set new node to line
        - set new node prev pointer to tail
        -- update the tail to new node
      - increment the length and return the list

      */
    const node = new DNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    /*
      if no node then return undefined
      if node exist
        - if only one node then save the node and set head and tail to null;
        - if more than one node then save the tail
            - set the tail to tail.prev pointer
            - set the tail.nex pointer to null;
            - set the saved temp prev pointer to null;
        - decrement the length and return temp
      */
    if (this.length == 0) return undefined;
    let temp;
    if (this.length == 1) {
      temp = this.tail;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  shift() {
    /*
        - if no node then return undefined
        - if only one node then save the node and set head and tail to null
        - if more than one node then save the head to temp
            - set the head pointer to head.next
            - set the new head.prev pointer to null
            - set the temp.next pointer to null
        - decrement the length and return the temp

        */
    let temp;
    if (this.length == 0) return undefined;
    if (this.length == 1) {
      temp = this.head;
      this.head = null;
      this.tail = null;
    } else {
      temp = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(value) {
    /* 
      - create a node
      - if no node exist then return undefined
      - if node exists then
        -- set new node .next pointer to head
        -- set head.prev pointer to new node
        -- set head pointer to new node
      - increment the length
      - return the list
      */
    const node = new DNode(value);

    if (this.length == 0) return undefined;
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  get(index) {
    /*
      if (index is out of bound return undefined)
      - set temp to head
      if index is less than middle loop through 0 to index to get index node on temp
      if index is more than middle then loop through this.length -1 to > index to get indexed node on temp
        - set the temp to tail
        - loop thorugh the tail to index, by using temp.prev
      return temp;
      */
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i++) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  set(index, value) {
    /*
    if (index is out of bound return undefined) 
      - get the value at index by get(index) and set it to temp
      - if temp has some node/value then change the value and return true
      - if temp is null then return false
    */
    let temp = get(index);
    if (temp) {
      temp.value = value;
      return true;
    }
    return fasle;
  }

  insert(index, value) {
    /*
    - create a node
    - if index is out of bound then return false
    - if index is 0 return unshift(value);
    - if index is this.length return push(value);
    - if index is between 0 and this.length then 
        - get the index - 1 node and set it to before
        - get the index  node and set it to after
        -- set the node.next pointer to before.next
        - set before.next to new node
        -- set the after.prev to node
        - set the node.prev to before
    - increment the length and return true

        

    */
    if (index < 0 || index >= this.length) return false;
    const node = new DNode(value);
    if (index == 0) return this.unshift(value);
    if (index == this.length) return this.push(value);
    let before = get(index - 1);
    let after = before.next;
    // next pointer set from before and node

    node.next = before.next;
    before.next = node;
    // prev pointer set from after and node
    after.prev = node;
    node.prev = before;
    this.length++;
    return true;
  }

  remove(index) {
    /*
        - if index is out of bound then return false
        - if index is 0 then shift();
        - if index is this.length then pop();
        - if index is between 0 and this.length then
            - get index - 1 node and set it to before
            - get index + 1 node and set it to after
            - set the index node to temp
            - set the before.next to after
            - set the after.prev = before
            -- set the temp.prev and next to null
        - decrement the list and return true
        */
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length) return this.pop();
    let before = get(index - 1);
    let temp = before.next;
    let after = temp.next;
    // update the next ponter from before to after node
    before.next = after;
    // update the prev pointer from before to after node
    after.prev = before;
    // update the temp node next and prev pointer to null
    temp.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
}
