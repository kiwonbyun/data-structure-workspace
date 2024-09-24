// 큐는 단순히 선입선출을 구현한 배열이 아니다.
// 큐의 추상자료형중 객체를 정의한 내용은 0개 이상의 원소를 갖는 유산 순서 리스트이다.
// 그러므로 무한한 길이를 넣을 수 있는 단순 배열로 구현하면 안됨.
// maxSize를 가진 유한 길이의 리스트 객체를 선언해야함.
class arrayBaseQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
  }

  isEmpty() {
    return this.front === this.rear;
  }
  isFull() {
    return this.rear === this.maxSize - 1;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("queue is full!");
      return false;
    }
    this.rear++;
    this.queue[this.rear] = value;
    return true;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("queue is empty!");
      return false;
    }
    this.front++;
    return this.queue[this.front];
  }

  print() {
    console.log("front: ", this.front);
    console.log("rear: ", this.rear);
    console.log("queue: ", this.queue.toString());
  }
}

// const myQueue = new arrayBaseQueue(5);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);
// // // stack is full!
// // myQueue.enqueue(6);

// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// // stack is empty!
// myQueue.enqueue(6);
// console.log(myQueue.dequeue());
// // stack is full!
// console.log(myQueue.enqueue(6));
// // front:4 rear:4
// myQueue.print();
// // 배열로 구현한 큐의 경우, 큐의 원소의 개수가 max가 아니더라도 큐가 full이 될 수 있음.
// // 해결하기 위해 원형큐를 만들자

class CircularQueue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.queue = new Array(maxSize);
    this.front = -1;
    this.rear = -1;
    this.size = 0;
  }
  isFull() {
    return this.size === this.maxSize;
  }
  isEmpty() {
    return this.size === 0;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("circular stack is full!");
      return false;
    }
    if (this.isEmpty()) {
      this.front = 0;
    }
    this.rear = (this.rear + 1) % this.maxSize;
    this.queue[this.rear] = value;
    this.size++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("circular quere is empty!");
      return undefined;
    }
    const value = this.queue[this.front];
    this.queue[this.front] = undefined;
    if (this.size === 1) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.maxSize;
    }
    this.size--;
    return value;
  }

  print() {
    console.log("front: ", this.front);
    console.log("rear: ", this.rear);
    console.log(this.queue.toString());
  }
}

const myCircularQueue = new CircularQueue(5);
myCircularQueue.enqueue(1);
myCircularQueue.enqueue(2);
myCircularQueue.dequeue();
myCircularQueue.dequeue();
myCircularQueue.enqueue(3);
myCircularQueue.enqueue(4);
myCircularQueue.enqueue(5);
myCircularQueue.enqueue(6);
myCircularQueue.enqueue(7);
myCircularQueue.dequeue();
myCircularQueue.dequeue();
myCircularQueue.enqueue(8);
myCircularQueue.dequeue();
myCircularQueue.enqueue(9);
myCircularQueue.dequeue();
myCircularQueue.print();
