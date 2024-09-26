function floor(data) {
  return Math.floor(data);
}

class MinHeap {
  #heap;
  #size;
  constructor() {
    this.#heap = [null];
    this.#size = 0;
  }

  insert(data) {
    let index = ++this.#size;
    while (index !== 1 && data < this.#heap[floor(index / 2)]) {
      this.#heap[index] = this.#heap[floor(index / 2)];
      index = floor(index / 2);
    }
    this.#heap[index] = data;
  }

  remove() {
    if (this.#size < 1) return;
    let parent = 1;
    let child = 2;
    let data = this.#heap[1];
    let temp = this.#heap.pop();
    --this.#size;

    while (child <= this.#size) {
      if (this.#heap[child] > this.#heap[child + 1]) {
        child++;
      }
      if (temp <= this.#heap[child]) {
        break;
      }
      this.#heap[parent] = this.#heap[child];
      parent = child;
      child = child * 2;
    }
    this.#heap[parent] = temp;
    return data;
  }

  print() {
    console.log(this.#heap.toString());
  }
}

const myMinHeap = new MinHeap();
myMinHeap.insert(10);
myMinHeap.insert(15);
myMinHeap.insert(5);
myMinHeap.insert(3);
myMinHeap.insert(4);
myMinHeap.insert(6);
myMinHeap.insert(7);
myMinHeap.insert(22);
myMinHeap.print();
console.log(myMinHeap.remove());
console.log(myMinHeap.remove());
console.log(myMinHeap.remove());
console.log(myMinHeap.remove());
console.log(myMinHeap.remove());

myMinHeap.print();
