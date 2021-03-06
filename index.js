class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = new Node(val);
  }

  add() {}
  removeTail() {}

  getList() {
    const listArr = [];
    let current = this.head;
    while (current.next) {
      listArr.push(current.val);
      current = current.next;
    }
    listArr.push(current.val);
    return listArr;
  }
}

// const list = new LinkedList("A");
// console.log(list.head);
// list.add("B");
// console.log(list.getList());
// list.add("C");
// console.log(list.getList());

// module.exports = { LinkedList };

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinaryList {
  constructor(value) {
    this.root = new BinaryTreeNode(value);
  }

  insert(value) {
    const newNode = new BinaryTreeNode(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(current, newNode) {
    if (newNode.value < current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        this.insertNode(current.left, newNode);
      }
    } else {
      if (newNode.value > current.value) {
        if (current.right === null) {
          current.right = newNode;
        } else {
          this.insertNode(current.right, newNode);
        }
      }
    }
  }
}
// OUR ATTEMPT
// add(node) {
//   let object = this.root;
//   let current = this.root.value;
//   console.log("current", current);
//   console.log("node", node);
//   while (current != null) {
//     if (node < current && object.left === null) {
//       object.left = node;
//       current = null;
//     } else if (node < current && object.left != null) {
//       current = current.left;
//     } else if (node > current && current.right === null) {
//       current.right = node;
//       current = null;
//     } else if (node > current && current.right != null) {
//       current = current.right;
//     }
//   }

// } else {
//   while (node > current) {
//     if (current.right === null) {
//       current.right = node;
//     } else current = current.right;
//   }
// }

// node to root
//node to current and left/right
//if current.left or right is null add node

// let current = this.head;
// while (current.right) {
//   current.left = current;
//   current = current.right;
// }
// current.right = new BinaryList(value);

// console.log('head', this.head);
// console.log('right', current.right)
// console.log('left', current.left)
const C = new BinaryList("C");
const A = new BinaryTreeNode("A");

console.log("C", C);
C.insert("A");
console.log("f", C);
C.insert("B");
console.log("b", C);

C.insert("F");
console.log("F", C);
