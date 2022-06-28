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

  add(){

  }
  removeTail(){}

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
    this.head = new BinaryTreeNode(value)
  }

  add(node) {
    let current = this.head;
    while(current.right){
      current.left = current
      current = current.right
    }
    current.right = new BinaryList(value)
  }
}
// console.log('head', this.head);
// console.log('right', current.right)
// console.log('left', current.left)

const B = new BinaryList('B');
const A = new BinaryList('A');
console.log('b', B.head)
console.log('A', current.left.add('A'))
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
