class TreeNode {
  constructor(key) {
    this.left = null;
    this.key = key;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  #insertNode(node, newNode) {
    if (node.key < newNode.key) {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.#insertNode(node.right, newNode);
      }
    } else {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.#insertNode(node.left, newNode);
      }
    }
  }

  insert(key) {
    const newNode = new TreeNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.#insertNode(this.root, newNode);
    }
  }

  #inOrderTraverseNode(node, callback) {
    if (node === null) return;
    this.#inOrderTraverseNode(node.left, callback);
    callback(node.key);
    this.#inOrderTraverseNode(node.right, callback);
  }
  #preOrderTraverseNode(node, callback) {
    if (node === null) return;
    callback(node.key);
    this.#preOrderTraverseNode(node.left, callback);
    this.#preOrderTraverseNode(node.right, callback);
  }
  #postOrderTraverseNode(node, callback) {
    if (node === null) return;
    this.#postOrderTraverseNode(node.left, callback);
    this.#postOrderTraverseNode(node.right, callback);
    callback(node.key);
  }

  // 중위순회
  inOrderTraverse(callback) {
    this.#inOrderTraverseNode(this.root, callback);
  }

  // 전위순회
  preOrderTraverse(callback) {
    this.#preOrderTraverseNode(this.root, callback);
  }

  // 후위순회
  postOrderTraverse(callback) {
    this.#postOrderTraverseNode(this.root, callback);
  }

  #minNode(node) {
    if (node && node.left) {
      return this.#minNode(node.left);
    }
    return node.key;
  }
  #maxNode(node) {
    if (node && node.right) {
      return this.#maxNode(node.right);
    }
    return node.key;
  }

  min() {
    if (this.root === null) return null;
    return this.#minNode(this.root);
  }

  max() {
    if (this.root === null) return null;
    return this.#maxNode(this.root);
  }

  #searchNode(node, key) {
    if (node === null) return false;
    if (node.key > key) {
      return this.#searchNode(node.left, key);
    } else if (node.key < key) {
      return this.#searchNode(node.right, key);
    } else {
      return true;
    }
  }

  search(key) {
    return this.#searchNode(this.root, key);
  }

  #findMinNode(node) {
    if (node && node.left) {
      return this.#findMinNode(node.left);
    }
    return node;
  }

  #removeNode(node, key) {
    if (node === null) return null;
    if (node.key > key) {
      node.left = this.#removeNode(node.left, key);
      return node;
    } else if (node.key < key) {
      node.right = this.#removeNode(node.right, key);
      return node;
    } else if (node.key === key) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      let aux = this.#findMinNode(node.right);
      node.key = aux.key;
      node.right = this.#removeNode(node.right, aux.key);
      return node;
    }
  }

  remove(key) {
    this.root = this.#removeNode(this.root, key);
  }
}

const printValue = (value) => console.log(value);

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(15);
tree.insert(4);
tree.insert(8);
tree.insert(30);
tree.remove(10);

tree.inOrderTraverse(printValue);
// console.log(tree.min());
// console.log(tree.max());
// console.log(tree.search(15));
