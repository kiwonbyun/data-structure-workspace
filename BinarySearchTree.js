// function BinarySearchTree() {
//   var Node = function (key) {
//     this.key = key;
//     this.left = null;
//     this.right = null;
//   };
//   var root = null;

//   var insertNode = function (node, newNode) {
//     if (newNode.key < node.key) {
//       if (node.left === null) {
//         node.left = newNode;
//       } else {
//         insertNode(node.left, newNode);
//       }
//     } else {
//       if (node.right === null) {
//         node.right = newNode;
//       } else {
//         insertNode(node.right, newNode);
//       }
//     }
//   };

//   this.insert = function (key) {
//     var newNode = new Node(key);
//     if (root === null) {
//       root = newNode;
//     } else {
//       insertNode(root, newNode);
//     }
//   };

//   const inOrderTraverseNode = (node, callback) => {
//     if (node === null) return;
//     inOrderTraverseNode(node.left, callback);
//     callback(node.key);
//     inOrderTraverseNode(node.right, callback);
//   };

//   const preOrderTraverseNode = (node, callback) => {
//     if (node === null) return;
//     callback(node.key);
//     preOrderTraverseNode(node.left, callback);
//     preOrderTraverseNode(node.right, callback);
//   };

//   const postOrderTracerseNode = (node, callback) => {
//     if (node === null) return;
//     postOrderTracerseNode(node.left, callback);
//     postOrderTracerseNode(node.right, callback);
//     callback(node.key);
//   };

//   this.inOrderTraverse = (callback) => inOrderTraverseNode(root, callback);
//   this.preOrderTraverse = (callback) => preOrderTraverseNode(root, callback);
//   this.postOrderTraverse = (callback) => postOrderTracerseNode(root, callback);

//   const minNode = (node) => {
//     if (!node) return null;
//     while (node && node.left) {
//       node = node.left;
//     }
//     return node.key;
//   };

//   const maxNode = (node) => {
//     if (!node) return null;
//     while (node && node.right) {
//       node = node.right;
//     }
//     return node.key;
//   };

//   this.min = function () {
//     return minNode(root);
//   };
//   this.max = function () {
//     return maxNode(root);
//   };

//   const searchNode = (node, target) => {
//     if (node === null) {
//       return false;
//     } else if (node.key > target) {
//       return searchNode(node.left, target);
//     } else if (node.key < target) {
//       return searchNode(node.right, target);
//     } else {
//       return true;
//     }
//   };

//   this.search = function (targetKey) {
//     return searchNode(root, targetKey);
//   };

//   const findMinNode = (node) => {
//     if (!node) return null;
//     while (node && node.left) {
//       node = node.left;
//     }
//     return node;
//   };

//   const removeNode = (node, key) => {
//     if (node === null) return null;
//     if (node.key > key) {
//       node.left = removeNode(node.left, key);
//       return node;
//     } else if (node.key < key) {
//       node.right = removeNode(node.right, key);
//       return node;
//     } else {
//       // node.key와 key가 같은 경우
//       if (node.left === null && node.right === null) {
//         node = null;
//         return node;
//       }

//       if (node.left === null) {
//         node = node.right;
//         return node;
//       }

//       if (node.right === null) {
//         node = node.left;
//         return node;
//       }

//       let aux = findMinNode(node.right);
//       node.key = aux.key;
//       node.right = removeNode(node.right, aux.key);
//       return node;
//     }
//   };

//   this.remove = function (key) {
//     root = removeNode(root, key);
//   };
// }

// let tree = new BinarySearchTree();
// const allArray = [];
// const printValue = (value) => allArray.push(value);
// const resultArray = [];
// const printResult = (value) => resultArray.push(value);

// tree.insert(11);
// tree.insert(7);
// tree.insert(15);
// tree.insert(5);
// tree.insert(3);
// tree.insert(18);
// tree.insert(25);
// tree.insert(6);
// tree.insert(14);
// tree.insert(16);

// tree.inOrderTraverse(printValue);
// console.log(allArray);

// tree.remove(18);

// tree.inOrderTraverse(printResult);
// console.log(resultArray);
