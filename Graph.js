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

function Graph() {
  // 정점
  let vertices = [];
  // 인접리스트
  let adjList = new Map();

  this.addVertex = function (v) {
    vertices.push(v);
    adjList.set(v, []);
  };

  this.addEdge = function (v, w) {
    adjList.get(v).push(w);
    adjList.get(w).push(v);
  };

  this.toString = function () {
    let s = "";
    for (let i = 0; i < vertices.length; i++) {
      s += vertices[i] + " -> ";
      let neighbors = adjList.get(vertices[i]);
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + " ";
      }
      s += "\n";
    }
    return s;
  };

  var initializeColor = function () {
    var color = [];
    for (var i = 0; i < vertices.length; i++) {
      color[vertices[i]] = "white";
    }
    return color;
  };

  this.bfs = function (v, callback) {
    var color = initializeColor();
    var queue = new CircularQueue(100);

    queue.enqueue(v);

    while (!queue.isEmpty()) {
      var u = queue.dequeue();
      var neighbors = adjList.get(u);
      color[u] = "grey";
      for (let i = 0; i < neighbors.length; i++) {
        let w = neighbors[i];
        if (color[w] === "white") {
          color[w] = "grey";
          queue.enqueue(w);
        }
      }
      color[u] = "black";
      if (callback) {
        callback(u);
      }
    }
  };

  var dfsVisit = function (u, color, callback) {
    color[u] = "grey";
    if (callback) callback(u);
    var neighbors = adjList.get(u);
    for (var i = 0; i < neighbors.length; i++) {
      var w = neighbors[i];
      if (color[w] === "white") {
        dfsVisit(w, color, callback);
      }
    }
    color[u] = "black";
  };

  this.dfs = function (callback) {
    let color = initializeColor();
    for (var i = 0; i < vertices.length; i++) {
      if (color[vertices[i]] === "white") {
        dfsVisit(vertices[i], color, callback);
      }
    }
  };
}

let graph = new Graph();
let myVertices = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "G");
graph.addEdge("D", "H");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

// console.log(graph.toString());
graph.dfs(console.log);
