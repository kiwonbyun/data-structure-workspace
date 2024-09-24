//원형연결리스트 구현
class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class CircleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  // 첫번째에 삽입 연산
  prepend(data) {
    const newNode = new Node(data);
    let tempNode;
    if (this.head === null) {
      this.head = newNode;
      newNode.link = newNode;
      this.size++;
      return newNode;
    } else {
      tempNode = this.head;
      while (tempNode.link !== this.head) tempNode = tempNode.link;
      newNode.link = tempNode.link;
      tempNode.link = newNode;
      this.head = newNode;
      this.size++;
      return newNode;
    }
  }
  insert(data, prevNode) {
    const newNode = new Node(data);
    newNode.link = prevNode.link;
    prevNode.link = newNode;
    this.size++;
    return newNode;
  }

  deleteNode(prevNode) {
    let lastNode;
    let delNode;
    lastNode = this.head;
    while (lastNode.link !== this.head) lastNode = lastNode.link;
    delNode = prevNode?.link ?? this.head;
    if (prevNode === null) {
      if (lastNode === delNode) {
        this.head = null;
        this.size--;
        return;
      }
      this.head = delNode.link;
      lastNode.link = delNode.link;
      this.size--;
    } else {
      prevNode.link = delNode.link;
      this.size--;
    }
  }

  removeData(data) {
    if (this.head === null) {
      throw new Error("removeData is not usable in empty list");
    }
    let currentNode = this.head;
    let prevNode = null;
    do {
      if (currentNode.data === data) {
        this.deleteNode(prevNode);
        return;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.link;
      }
    } while (currentNode !== this.head);
    console.log(`not found data: ${data}`);
  }

  getSize() {
    return this.size;
  }
  toString() {
    if (this.head === null) return "empty list";

    let result = "";
    let currentNode = this.head;
    do {
      result = result + currentNode.data;
      if (currentNode.link !== this.head) {
        result += " -> ";
      }
      currentNode = currentNode.link;
    } while (currentNode !== this.head);

    result += " -> (back to " + currentNode.data + ")";
    return result;
  }
}

const my = new CircleLinkedList();
const node = my.prepend(2);
my.prepend(1);
const node2 = my.insert(3, node);
my.insert(4, node2);

my.removeData(4);
my.removeData(1);
// my.removeData(2);
// my.removeData(3);

console.log(my.toString());
console.log(my.getSize());
