// import "./node";
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  /*
    -constructure(value); // create a new linkedlist with a given value as head and tail;
        --create a node with value;
        --add head pointer to newNode;
        --add tail pointer to newNode;
    -push(value); // insert at last/tail;
        --create a node with value;
        --push to last;
    -pop(); // remove from last/tail;
        --remove the node from last;
    shift(); // remove from first/head;
        --remove the node from first;
    unshift(value); // add to first/head;
        --create a node with value;
        --add to frist;
    get(index); // get the node item at given index
        -- check if index is valid and node exist in the list, if not then return undefined
        -- loop from 0 to index-1 and get the indexed item
        return the item


    addAtIndex(index, value); // add the node at given index
        --create a node with value;
        -- if index is out of bound than return false;
        -- if index is 0 unshift(value);
        -- if index is equal to this.length then push(value);
        -- if index is in between 0 and this.length;
        -- since, we need the indexed -1 node to add the new node to index
            -- update the new node next pointer to index-1 pointer
            -- update the index-1 pointer to new node
            -- return true

*/

  /*
    create a linkedlist with a node, head, and tail pointers.
        - use constructure to create a new node, by calling instance of Node.
        - link head and tail with newNode object.
    */
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  // add to last
  push(value) {
    // if there is no node then create one
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // add to existing linkedlist node end
      // -- change the tail pointer to new node;
      // -- set the tail to new node;
      this.tail.next = node;
      this.tail = node;
    }
    // increment the length by 1 and return
    this.length++;
    return this;
  }
  // remove from last
  pop() {
    // there is no node to pop then return undefined
    if (!this.head) return undefined;
    // if there is a node
    //- create a temp and pre pointed to head to start
    let temp = this.head;
    let pre = this.head;
    // if there is more node to traverse
    while (temp.next) {
      // set the pre to temp/pre.next
      pre = temp;
      // set temp to temp.next
      temp = temp.next;
    }
    // when there is no more temp
    // --cut the connection to last node and update the tail, also decrement the length
    pre.next = null;
    this.tail = pre;
    this.length--;
    // if after all task check the length
    //if length is 0 remove the head and tail pointer to null
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    // return the removed node/temp
    return temp;
  }
  // add to front
  unshift(value) {
    // create an instance of node with given value
    const node = new Node(value);
    // if there is no node to add before it, list is null
    // --point head and tail to new node;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // if there is node/list
      // --point the new node pointer to head;
      // --update the head to new node;
      node.next = this.head;
      this.head = node;
    }
    // after added to front
    //-- increament the length and return the linkedlist
    this.length++;
    return this;
  }

  // remove from front
  shift() {
    // if no node then return undefined
    if (!this.head) return undefined;
    // if node then save it to temp
    let temp = this.head;
    // update the head pointer to head.next
    this.head = this.head.next;
    // remove the temp pointer from the list
    temp.next = null;
    // decrement the list length
    this.length--;
    // if the left length is 0 then no node thus update the tail pointer to null
    if (this.length == 0) {
      this.tail = null;
    }
    // return temp/deleted node
    return temp;
  }

  // get the node at index
  get(index) {
    // if index is out of range
    if (index < 0 || index >= this.length) return undefined;
    // if not, then save the head pointer
    let temp = this.head;
    // loop through the head to index
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    // return the indexed node/item
    return temp;
  }
  // set the new value at index node
  set(index, value) {
    // get the item at index
    let temp = this.get(index);
    // if temp is not null/undefined
    if (temp) {
      // update the value and return true
      temp.value = value;
      return true;
    }
    // if no temp then return false
    return false;
  }
  // insert the new node at given index
  insert(index, value) {
    // create a node
    const node = new Node(value);
    // if index == 0;
    if (index == 0) return this.unshift(value);
    // if index == this.length;
    if (index == this.length) return this.push(value);
    // get the index  is less than 0 and greater than this.length
    if (index < 0 || index > this.length) return false;
    // if the index is in between the 0 and this.length then get index -1 node
    let prev = this.get(index - 1);
    node.next = prev.next;
    prev.next = node;
    this.length++;
    return true;
  }

  // remove the item from given index
  remove(index) {
    // ========if no node then return undefined
    // if (!this.head) return undefined;
    //=======if index is 0 then shift(), and if index is equal to this.length-1 then pop();
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();
    // =======if index is out of bound/range then return false
    if (index < 0 || index >= this.length) return undefined;
    // if node exist then get index -1 item
    const before = this.get(index - 1);
    // now get the, to be deleted node
    const temp = before.next;
    // update the prev node pointer to temp pointer
    before.next = temp.next;
    // now remove the to be deleted Node pointer to null
    temp.next = null;
    this.length--;
    return temp;
  }
}

let linklist1 = new LinkedList(1); // create a linklist with value 1
console.log(linklist1.push(2)); // push 2 at ends
console.log(linklist1.pop()); // remove 2
console.log(linklist1); // check the left node
console.log(linklist1.pop()); // remove 1
console.log(linklist1); // check the left node
console.log(linklist1.pop()); // show undefined as no node remains
console.log(linklist1); // check the left node

console.log("-------------unshift()");
console.log(linklist1.unshift(2)); // add to front 2
console.log(linklist1.unshift(3)); // add 3 infront of 2
console.log(linklist1.unshift(4)); // add 4 infront of 3

console.log("-------------shift()");
console.log(linklist1.shift()); // remove 4 from front
console.log(linklist1.shift()); // remove 3 from front

console.log("-------------get()");
console.log(linklist1.get(0)); // return 2
console.log(linklist1.get(1)); // return undefined

console.log("-------------set()");
console.log(linklist1.set(0, 100)); // return true, updating the index 0 value to 100
console.log(linklist1.set(1, 100)); // return false as no more than 1 length

console.log("-------------insert()");
console.log(linklist1.insert(1, 1000));
console.log(linklist1.insert(2, 2000));
console.log(linklist1.insert(0, 9000));
console.log(linklist1.insert(1, 99000));

console.log("-------------remove(index)");
console.log(linklist1.remove(0));
