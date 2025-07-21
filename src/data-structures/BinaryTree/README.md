# Binary Tree

A generic and minimal binary tree data structure in TypeScript that supports recursive DFS traversals, BFS traversal, and basic utilities like height and size calculation. Ideal for learning, solving LeetCode-style problems, or integrating into larger tree-based algorithms.

---

## 📦 Installation

```bash
npm install js-ds-collection
```

---

## 📥 Import

```ts
import { BinaryTree, BinaryTreeNode } from 'js-ds-collection';
```

---

## 🚀 Usage

### ✅ Create a Tree

```ts
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.left.right = new BinaryTreeNode(5);

const tree = new BinaryTree(root);
```

### 🔁 Traversals

```ts
tree.preorder();   // [1, 2, 4, 5, 3]
tree.inorder();    // [4, 2, 5, 1, 3]
tree.postorder();  // [4, 5, 2, 3, 1]
tree.levelOrder(); // [1, 2, 3, 4, 5]
tree.toArray();    // [1, 2, 3, 4, 5]  (alias for level order)
```

### 📏 Tree Info

```ts
tree.size();   // 5
tree.height(); // 3
```

---

## 📘 API Reference

| Method          | Description                              | Return Type |
|-----------------|------------------------------------------|-------------|
| `preorder()`    | DFS Preorder: Root → Left → Right        | `T[]`       |
| `inorder()`     | DFS Inorder: Left → Root → Right         | `T[]`       |
| `postorder()`   | DFS Postorder: Left → Right → Root       | `T[]`       |
| `levelOrder()`  | BFS traversal                            | `T[]`       |
| `toArray()`     | Same as `levelOrder()`                   | `T[]`       |
| `size()`        | Total number of nodes in the tree        | `number`    |
| `height()`      | Height (max depth) of the tree           | `number`    |

---

## 🧠 Time & Space Complexity

| Operation      | Time Complexity | Space Complexity |
|----------------|------------------|------------------|
| `preorder()`   | O(n)             | O(n)             |
| `inorder()`    | O(n)             | O(n)             |
| `postorder()`  | O(n)             | O(n)             |
| `levelOrder()` | O(n)             | O(n)             |
| `size()`       | O(n)             | O(h) recursion   |
| `height()`     | O(n)             | O(h) recursion   |

> **n** = number of nodes, **h** = height of the tree

---

## 🛠️ Example Use Cases

- Tree-based recursion problems on platforms like LeetCode
- Expression tree evaluation
- Binary tree serialization/deserialization
- Visual tree builders and BFS/DFS learners

---

## 👨‍💻 Author

Made with ❤️ by [Yashkumar Khorja](https://github.com/yash-khorja)

For full collection: [js-ds-collection](https://www.npmjs.com/package/js-ds-collection)

---

## 📄 License

MIT © [Yashkumar Khorja](https://github.com/yash-khorja)