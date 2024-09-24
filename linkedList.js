// 노드 클래스 정의
class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}
// 링크드리스트 클래스 정의
// 링크드리스트 연산: 마지막에 삽입, 첫번째에 삽입, 특정 노드 뒤에 삽입, 마지막 삭제, 맨앞삭제, 특정 데이터 가진 노드 삭제
class LinkedList {
  #head;
  #size;
  constructor() {
    this.#head = null;
    this.#size = 0;
  }
  checkEmptyAndThrow() {
    if (this.#head === null) throw new Error("this list is empty!");
  }
  // 마지막에 삽입
  append(data) {
    const newNode = new Node(data);
    if (this.#head === null) {
      this.#head = newNode;
    } else {
      let lastNode = this.#head;
      while (lastNode.link !== null) lastNode = lastNode.link;
      lastNode.link = newNode;
    }
    this.#size++;
  }

  //첫번째에 삽입
  prepend(data) {
    const newNode = new Node(data);
    newNode.link = this.#head;
    this.#head = newNode;
    this.#size++;
  }

  // 특정 인덱스에 삽입
  insert(data, index) {
    if (index > this.#size) {
      throw new Error("list보다 큰 인덱스는 선택할 수 없습니다.");
    }
    if (index === 0) {
      this.prepend(data);
      return;
    }
    if (index === this.#size) {
      this.append(data);
      return;
    }
    let newNode = new Node(data);
    let lastNode = this.#head;
    let count = 1;
    while (count !== index) {
      lastNode = lastNode.link;
      count++;
    }
    newNode.link = lastNode.link;
    lastNode.link = newNode;
    this.#size++;
  }

  // 마지막 노드 삭제
  removeLast() {
    this.checkEmptyAndThrow();

    if (this.#size === 1) {
      this.#head = null;
    } else {
      let currentNode = this.#head;
      while (currentNode.link.link !== null) {
        currentNode = currentNode.link;
      }
      currentNode.link = null;
    }
    this.#size--;
  }

  // 첫번째 노드 삭제
  removeFirst() {
    this.checkEmptyAndThrow();
    this.#head = this.#head.link;
    this.#size--;
  }

  // 특정 데이터 가진 노드 삭제
  removeData(data) {
    this.checkEmptyAndThrow();

    if (this.#head.data === data) {
      this.removeFirst();
    }

    let prevNode = this.#head;
    let delNode = prevNode.link;

    while (delNode !== null) {
      if (delNode.data === data) {
        prevNode.link = delNode.link;
        this.#size--;
        return;
      }
      prevNode = delNode;
      delNode = delNode.link;
    }
  }

  getSize() {
    return this.#size;
  }
  toString() {
    let result = "";
    let lastNode = this.#head;
    if (lastNode == null) {
      return "empty list";
    }
    while (lastNode !== null) {
      result += lastNode.data;
      lastNode = lastNode.link;
      if (lastNode !== null) result += "->";
    }
    return result;
  }
}

const myLinkedList = new LinkedList();
// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.prepend(1);
myLinkedList.append(4);
myLinkedList.append(5);
// myLinkedList.removeFirst();
// myLinkedList.removeFirst();
myLinkedList.removeData(5);

console.log(myLinkedList.toString());
