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
    const node = new TreeNode(value);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let temp = this.root;
    while (temp != null) {
      if (value === temp.value) return undefined;
      if (value < temp.value) {
        if (temp.left === null) {
          temp.left = node;
          return this;
        }
        temp = temp.left;
      } else if (value > temp.value) {
        if (temp.right === null) {
          temp.right = node;
          return this;
        }
        temp = temp.right;
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
  /*
  breadth-first-search(root): // traverse each level from top to bottom
  // use the queue to add each item into result of a level one by one until queue is empty
   - create queue container/list
   - create result container/list
   - add rootnode to queue
   - loop until queue is empty: while (queue.length):
      - pop queue item into temp 
      - add popped/temp item to result list
      - if temp has left then push it to queue
      - if temp has right then push it to queue
   - return result
*/

  bfsTraversal(root) {
    let queue = [];
    let result = [];
    queue.push(root);
    while (queue.length) {
      let temp = queue.shift();
      result.push(temp.value);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
    return result;
  }

  /* 

  depth-first-search Traversal(root): // traverse based on the pre/post/in and callStack/recursion
    preOrderTraversal(root):  // before left and right traverse add the value
      - let result = [];
      - traverse(currentNode):
        - result.push(currentNode.value);
        - if (currentNode.left) traverse(currentNode.left)
        - if (currentNode.right) traverse(currentNode.right)
      - traverse(root)
      - return result

    postOrderTraversal(root): // after left and right traverse add the value
      - let result = [];
      - traverse(currentNode):
        - if (currentNode.left) traverse(currentNode.left)
        - if (currentNode.right) traverse(currentNode.right)
        - result.push(currentNode.value)
      - traverse(root)
      - return result

    inOrderTraversal(root):  // add after the left traverse
      - let result = [];
      - traverse(currentNode):
        - if (currentNode.left) traverse(currentNode.left)
        - result.push(currentNode.value)
        - if (currentNode.right) traverse(currentNode.right)
      - traverse(root)
      - return result

  */

  dfsPreOrderTraversal(root) {
    if (!root) return undefined;
    let result = [];
    function traverse(currentNode) {
      result.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(root);
    return result;
  }

  dfsPostOrderTraversal(root) {
    if (!root) return undefined;
    let result = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      result.push(currentNode.value);
    }
    traverse(root);
    return result;
  }
  dfsInOrderTraversal(root) {
    if (!root) return undefined;
    let result = [];
    function traverse(currentNode) {
      if (currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    }
    traverse(root);
    return result;
  }
}

const mytree = new BST();
mytree.insert(47);
mytree.insert(21);
mytree.insert(76);
mytree.insert(18);
mytree.insert(27);
mytree.insert(52);
mytree.insert(82);
console.log("ok");
const bfs = mytree.bfsTraversal(mytree.root);
console.log(bfs);
const predfs = mytree.dfsPreOrderTraversal(mytree.root);
console.log(predfs);
const pstdfs = mytree.dfsPostOrderTraversal(mytree.root);
console.log(pstdfs);
const indfs = mytree.dfsInOrderTraversal(mytree.root);
console.log(indfs);
// console.log(mytree.dfsPreOrderTraversal(mytree.root));
