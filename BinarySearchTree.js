function BinarySearchTree() {
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };
  var root = null;

  var insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  };

  this.insert = function (key) {
    var newNode = new Node(key);
    if (root === null) {
      root = newNode;
    } else {
      insertNode(root, newNode);
    }
  };

  const inOrderTraverseNode = (node, callback) => {
    if (node === null) return;
    inOrderTraverseNode(node.left, callback);
    callback(node.key);
    inOrderTraverseNode(node.right, callback);
  };

  const preOrderTraverseNode = (node, callback) => {
    if (node === null) return;
    callback(node.key);
    preOrderTraverseNode(node.left, callback);
    preOrderTraverseNode(node.right, callback);
  };

  const postOrderTracerseNode = (node, callback) => {
    if (node === null) return;
    postOrderTracerseNode(node.left, callback);
    postOrderTracerseNode(node.right, callback);
    callback(node.key);
  };

  this.inOrderTraverse = (callback) => inOrderTraverseNode(root, callback);
  this.preOrderTraverse = (callback) => preOrderTraverseNode(root, callback);
  this.postOrderTraverse = (callback) => postOrderTracerseNode(root, callback);
}

let tree = new BinarySearchTree();

const printValue = (value) => console.log(value);

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

tree.postOrderTraverse(printValue);
