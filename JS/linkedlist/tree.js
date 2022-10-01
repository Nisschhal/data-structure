class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
    this.nodes = 0;
  }

  /*
    insert(value); // insert into appropriate poistion in bst;
    - create a node
    - if root is null, set the root to node and return list
    - if root exist, set temp = root and loop untill temp is null
       -- if value < temp.value, check if temp.left is null, if yes then set temp.left = node and return
       -- else if value > temp.value, check if temp.right is null, if yes then set temp.right = node and return 



    */

  insert(value) {
    let temp = this.root;
    const node = TreeNode(value);
    if (!this.root) {
      this.root = node;

      return this;
    }
    while (temp != null) {
      if (value < temp.value) {
        if (temp.left == null) {
          temp.left = node;
          return this;
        }
      } else if (value > temp.value) {
        if (temp.right == null) {
          temp.right = node;
          return this;
        }
      }
    }
  }

  /*
    contains(value); // check if the value in the bst
    - set temp = root;
    - if root is null return false;
    - if temp has node:
       - if value < temp.value go left, set temp to temp.left
       - else if value > temp.value go right, set temp to temp.right
       - else value is matched return true;
    - if control statement is in this line, meaning temp has no node 
    - return false;
    */

  contains(value) {
    let temp = this.root;
    if (!temp) return false;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
